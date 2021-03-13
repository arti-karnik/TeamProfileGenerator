
class Employee {
    constructor(id, name, email, role){
      if (typeof name !== "string" || !name.trim().length) {
        throw new Error("Name is required field and should be string");
      }
      if (typeof id !== "number" || id == "") {
        throw new Error("Id is required field and should be number");
      }
      this.id = id;
      this.name = name;
      this.email = email;
      this.role = role;
    }
    getName() {
     return this.name;
    }
    getId() {
      return this.id;
    }
    getEmail() {
      return this.email;
    }
    getRole() {
     return this.role;
    }

}
module.exports = Employee;