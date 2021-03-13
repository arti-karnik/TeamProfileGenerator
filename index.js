const { info } = require("console");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const intern = require("./lib/intern");
const Manager = require("./lib/Manager");
const fs = require("fs");

var members = [];

const employee = () => { 
inquirer.prompt([{
    name: "name",
    type: "input",
    message: "Please Enter name: "
},
{
    name: "Id",
    type: "input",
    message: "Please Enter Id: ",
}, 
{
    name: "email",
    type: "input",
    message: "Please Enter Email: ",
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
    message: "Please Enter Github username: "
    },
    {
        when: input => {
            return input.role == "Intern"
        },
        type: "input",
        name: "school",
        message: "Please Enter School name: "
    },
    {
        when: input => {
            return input.role == "Manager"
        },
        type: "input",
        name: "officeNumber",
        message: "Please Enter Office number: "
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
            member = new Engineer(response.Id, response.name, response.email, response.role, response.githubUserName)
        } else if (response.role == "Manager") {
            member = new Manager(response.Id, response.name, response.email, response.role, response.officeNumber)
        } else if (response.role == "Intern") {
            member = new intern(response.Id, response.name, response.email, response.role, response.school)
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
    //console.log(cardHtml);

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
            <div class="name"> ${member.getName()}</div> 
            <div class="role"> ${member.getRole()}</div> 
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