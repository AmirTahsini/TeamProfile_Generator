const Manager = require("../lib/manager");

test("Can a Manager have an office number?", () => {
    const testOfficeNumber = 2;
    const newManager = new Manager("", "", "", testOfficeNumber);
    expect(newManager.officeNumber).toBe(testOfficeNumber);
})

test("Can we access the office number through getOfficeNumber() method?", () => {
    const testOfficeNumber = 2;
    const newManager = new Manager("", "", "", testOfficeNumber);
    expect(newManager.getOfficeNumber()).toBe(testOfficeNumber);
})

test("Return value of role", () => {
    const returnValue = "Manager";
    const newManager = new Manager("Amir", 1, "test@test.com", 2);
    expect(newManager.getRole()).toBe(returnValue);
})