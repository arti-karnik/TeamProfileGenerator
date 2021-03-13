const Engineer = require("../lib/Engineer");

describe("Enginner", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, email, role and github username if provided valid arguments", () => {
     const engineer  = new Engineer(1, "Jared", "Jared@gmail.com", "Engineer", "Jared@Github")
      expect(engineer.name).toEqual("Jared");
      expect(engineer.id).toEqual(1);
      expect(engineer.email).toEqual("Jared@gmail.com");
      expect(engineer.role).toEqual("Engineer");
      expect(engineer.githubUserName).toEqual("Jared@Github");
    });

    it("should throw an error if not provided email", () => {
        const cb = () => new Engineer(12, "Jared", "");
        const err = new Error("Email is required field");
        expect(cb).toThrowError(err);
    });
   
    
  });
});
