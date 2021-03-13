const Employee = require("./Employee");

class Intern extends Employee {
    constructor(id,name,role,email,school) {
        if (typeof school !== "string" || !school.trim().length) {
            throw new Error("School is required field");
        } 
       
        super(id,name,role,email);
        this.school = school;
    }
    getRole() {
        return "Intern";
    }
    getSchool() {
        return this.school;
    }
}
module.exports = Intern;
