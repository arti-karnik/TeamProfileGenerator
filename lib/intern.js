const Employee = require("./Employee");

class Intern extends Employee {
    constructor(id,name,email,role,school) {
        super(id,name,role,email);
        this.school = school;
    }
    getRole() {
        return "School";
    }
    getSchool() {
        return this.school;
    }
}
module.exports = Intern;
