const { info } = require("console");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const fs = require("fs");
const validator = require('./src/validator');

var members = [];

const checkName = async (input) => {
    if (input == "") {
       return 'Required field.. ';
    }
    return true;
};

const checkId = async (input) => {
    if(input == "")
        return "Id is required field";
    else if(isNaN(input)){
        return "Id should be number";
    }
    return true;
};
const checkEmail = async (input) => {
    if(input == "")
        return "Email is required field";
    else if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input)) {
        return true;
    }
    return "Please enter valid email format";
};
const checkPhone = async (input) => {
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if(input == "")
        return "Phone is required field";
    else if (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(input)) {
        return true;
    }
    return "Please enter valid phone number";
};

const employee = () => { 
inquirer.prompt([{
    name: "name",
    type: "input",
    message: "Please Enter name: ",
    validate: checkName
},
{
    name: "Id",
    type: "input",
    message: "Please Enter Id: ",
    validate: checkId
}, 
{
    name: "email",
    type: "input",
    message: "Please Enter Email: ",
    validate: checkEmail
},
{
    name: "role",
    type: "list",
    message: "Please Enter Designation",
    choices: ["Manager", "Engineer", "Intern"]
},
{
    when: input => {
        return input.role == "Engineer"
    },
    type: "input",
    name: "githubUserName",
    message: "Please Enter Github username: ",
    validate: validator.checkName
    },
    {
        when: input => {
            return input.role == "Intern"
        },
        type: "input",
        name: "school",
        message: "Please Enter School name: ",
        validate: validator.checkName
    },
    {
        when: input => {
            return input.role == "Manager"
        },
        type: "input",
        name: "officeNumber",
        message: "Please Enter Office number: ",
        validate: checkPhone
    },
    {
        type: "list",
        name: "add",
        message: "Do You like to add more Employee name?",
        choices: ["Yes", "No"]
    }
])
.then (function(response){

    var member = "";
        if (response.role == "Engineer") {
            member = new Engineer(parseInt(response.Id), response.name, response.email, response.role, response.githubUserName)
        } else if (response.role == "Manager") {
            member = new Manager(parseInt(response.Id), response.name, response.email, response.role, response.officeNumber)
        } else if (response.role == "Intern") {
            member = new Intern(parseInt(response.Id), response.name, response.email, response.role, response.school)
        }
        members.push(member);
       // 
    if (response.add == "Yes") {
        employee();
    } else {
        console.log(members);
        showInfo();
    }
})};

employee();



function showInfo() {
    let newFile = fs.readFileSync("./dist/index.html");
    fs.writeFileSync("./dist/Page.html", newFile, function(err){
        if(err) throw err;
    });
    console.log("Page generated");
    var cardHtml = "";

    for (member of members) {
        cardHtml = cardHtml + generateCard(member);
    }
    fs.appendFileSync("./dist/Page.html", cardHtml, err => { if (err) throw err;});

    fs.appendFileSync("./dist/Page.html", "</div><main></body></html>", function (err){
        if (err) throw err});
}
function generateCard(member) {
    var other = "";
    var otherInfo = "";

    if (member.role == "Engineer") {
        other = "Github";
        otherInfo = member.getGithubUserName();

    } else if (member.role == "Manager") {
        other = "Office-Number";
        otherInfo = member.getOfficeNumber();
    } else if (member.role == "Intern") {
        other = "School";
        otherInfo = member.getSchool();
    }
    return `
    <div class="col mb-4">
    <div class="card" style="width: 18rem;">
        <div class="card-title">
            <div class="name"><strong> Name: </strong> ${member.getName()}</div> 
            <div class="role"><strong> Role: </strong> ${member.getRole()}</div> 
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><strong> Id: </strong><span id="memberId">${member.getId()} </span></li>
          <li class="list-group-item"><strong>Email: </strong> <span id="memberEmail"> ${member.getEmail()}</span> </li>
          <li class="list-group-item"><strong> <span id="memberOther">${other}: </span> </strong> <span id="memberOtherInfo"> ${otherInfo}</span></li>
        </ul>
      </div>
</div>
`
}