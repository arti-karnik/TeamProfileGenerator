const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, email, role and office phone number if provided valid arguments", () => {
     const manager  = new Manager(1, "Jared", "Jared@gmail.com", "Manager", "123-456-7886")
      expect(manager.name).toEqual("Jared");
      expect(manager.id).toEqual(1);
      expect(manager.email).toEqual("Jared@gmail.com");
      expect(manager.role).toEqual("Manager");
      expect(manager.officeNumber).toEqual("123-456-7886");
    });

    it("should throw an error if not provided Office phone number", () => {
      const cb = () => new Manager(1, "Jared", "Jared@gmail.com", "Manager", "");
      const err = new Error("Phone number is required field");
        expect(cb).toThrowError(err);
  });
  });
});
