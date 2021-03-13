const Employee = require("./Employee");

class Manager extends Employee{
    constructor(id,name,role,email,officeNumber) {
        super(id,name,role,email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager";
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}
module.exports = Manager;
