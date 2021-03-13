const Child = require("../Engineer");
const Engineer = require("../lib/Engineer");

describe("Enginner", () => {
  // Test for all use cases when initializing a new Child object
  describe("Initialization", () => {
    it("should create an object with a name, id, email, role and github username if provided valid arguments", () => {
      const engineer = new Engineer("Jared", 1, "Engineer", "Jared@gmail.com", "JaredGitub");

      // Verify that the new object has the correct properties
      expect(engineer.name).toEqual("Jared");
      expect(engineer.id).toEqual(1);
      expect(engineer.email).toEqual("Jared@gmail.com");
      expect(engineer.role).toEqual("Engineer");
      expect(engineer.githubUserName).toEqual("JaredGitub");
    });

    it("should throw an error if provided no arguments", () => {
      // Wrap the object initialization in a callback function that Jest will run
      const cb = () => new Engineer();

      // Verify that an error was thrown in the callback function
      expect(cb).toThrow();
    });

    it("should throw an error if not provided an id", () => {
     //const engineer = new Engineer("Jared", "Engineer", "Jared@gmail.com", "JaredGitub");

      const engineer = () => new Engineer("Jared", "Engineer", "Jared@gmail.com", "JaredGitub");
      
      // Define the error message that is expected to be thrown
      const err = new Error("Expected parameter 'id' to be a non-negative number");

      // Verify that the correct error was thrown when the callback is executed
      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'name' is not a string", () => {
        const engineer = () => new Engineer(11, "Engineer", "Jared@gmail.com", "JaredGitub");
      const err = new Error("Expected parameter 'name' to be a non-empty string");

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'id' is not a number", () => {
        const engineer = new Engineer("Jared", "1", "Engineer", "Jared@gmail.com", "JaredGitub");
        const err = new Error("Expected parameter 'id' to be a non-negative number");

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'age' is less than 0", () => {
      const cb = () => new Child("Sarah", -1);
      const err = new Error("Expected parameter 'age' to be a non-negative number");

      expect(cb).toThrowError(err);
    });
  });
});
