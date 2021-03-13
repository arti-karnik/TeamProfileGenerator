const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(id,name,role,email,githubUserName) {
        super(id,name,role,email);
        this.githubUserName = githubUserName;
    }
}
module.exports = Engineer;