const Employee = require("./Employee");

class intern extends Employee {
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
module.exports = intern;
