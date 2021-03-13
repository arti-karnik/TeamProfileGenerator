const Employee = require("../lib/Employee");
const validator = require('../src/validator');

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an Employee object with a name, id, email when valid arguments are provided", () => {
     const engineer  = new Employee(1, "Jared", "Jared@gmail.com")
      expect(engineer.name).toEqual("Jared");
      expect(engineer.id).toEqual(1);
      expect(engineer.email).toEqual("Jared@gmail.com");
    });

    it("should throw an error if not provided name", () => {
        const cb = () => new Employee(12, "", "Jared@gmail.com");
        const err = new Error("Name is required field and should be string");
        expect(cb).toThrowError(err);
    });

    it("should throw an error if not provided an id", () => {
        const cb = () => new Employee("id", "Jared", "Jared@gmail.com");
        const err = new Error("Id is required field and should be number");
        expect(cb).toThrowError(err);
    });

  });
});
