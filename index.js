const { info } = require("console");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const intern = require("./lib/intern");
const Manager = require("./lib/Manager");
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
        console.log(members);
    if (response.add) {
        employee();
    } 
})};

employee();