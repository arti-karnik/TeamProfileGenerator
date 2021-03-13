const { off } = require("process");
const Employee = require("./Employee");

class Manager extends Employee{
    constructor(id,name,role,email,officeNumber) {
        if (typeof officeNumber !== "string" || !officeNumber.trim().length) {
            throw new Error("Phone number is required field");
        } 
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
