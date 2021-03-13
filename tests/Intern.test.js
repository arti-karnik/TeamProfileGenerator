const intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, email, role and school name if provided valid arguments", () => {
     const intern  = new Intern(1, "Jared", "Jared@gmail.com", "Intern", "University of Austin")
      expect(intern.name).toEqual("Jared");
      expect(intern.id).toEqual(1);
      expect(intern.email).toEqual("Jared@gmail.com");
      expect(intern.role).toEqual("Intern");
      expect(intern.school).toEqual("University of Austin");
    });
  });
});
