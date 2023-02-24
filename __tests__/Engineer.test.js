const Engineer = require("../lib/engineer");

test("Can an Engineer have a GitHub account?", () => {
    const testGithub = "AmirTahsini";
    const newEngineer = new Engineer("", "", "", testGithub);
    expect(newEngineer.github).toBe(testGithub);
})

test("Can we access the Github account through getGithub() method?", () => {
    const testGithub = "AmirTahsini";
    const newEngineer = new Engineer("", "", "", testGithub);
    expect(newEngineer.getGithub()).toBe(testGithub);
})

test("Return value of role", () => {
    const returnValue = "Engineer";
    const newEngineer = new Engineer("Amir", 1, "test@test.com", "AmirTahsini");
    expect(newEngineer.getRole()).toBe(returnValue);
})