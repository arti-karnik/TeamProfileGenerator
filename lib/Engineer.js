const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(id,name,role,email,githubUserName) {
        if (typeof email !== "string" || !email.trim().length) {
            throw new Error("Email is required field");
        }
        super(id,name,role,email);
        this.githubUserName = githubUserName;
    }
    getRole() {
        return "Engineer";
    }
    getGithubUserName() {
        return this.githubUserName;
    }
}
module.exports = Engineer;
