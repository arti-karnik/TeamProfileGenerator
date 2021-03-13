const Employee = require("../lib/Employee");
const employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, email if provided valid arguments", () => {
     const engineer  = new Employee(1, "Jared", "Jared@gmail.com")
      expect(engineer.name).toEqual("Jared");
      expect(engineer.id).toEqual(1);
      expect(engineer.email).toEqual("Jared@gmail.com");
    });
  });
});
