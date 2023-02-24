const Intern = require("../lib/intern");

test("Can an Intern have a school?", () => {
    const testSchool = "UCLA";
    const newIntern = new Intern("", "", "", testSchool);
    expect(newIntern.school).toBe(testSchool);
})

test("Can we access the School through the getSchool() method?", () => {
    const testSchool = "UCLA";
    const newIntern = new Intern("", "", "", testSchool);
    expect(newIntern.getSchool()).toBe(testSchool);
})

test("Return value of role", () => {
    const returnValue = "Intern";
    const newIntern = new Intern("Amir", 1, "test@test.com", "UCLA");
    expect(newIntern.getRole()).toBe(returnValue);
})