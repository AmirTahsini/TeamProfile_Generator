const Employee = require("../lib/employee");

test("Can an Employee have a name?", () => {
    const testName = "Amir";
    const newEmployee = new Employee(testName, "", "");
    expect(newEmployee.name).toBe(testName);
})

test("Can an Employee have an ID?", () => {
    const testId = 1;
    const newEmployee = new Employee("", testId, "");
    expect(newEmployee.id).toBe(testId);
})

test("Can an Employee have an email?", () => {
    const testEmail = "test@test.com";
    const newEmployee = new Employee("", "", testEmail);
    expect(newEmployee.email).toBe(testEmail);
})

test("Can we access the name through getName() method?", () => {
    const testName = "John";
    const newEmployee = new Employee(testName, "", "");
    expect(newEmployee.getName()).toBe(testName);
})

test("Can we access the id through getId() method?", () => {
    const testId = 1;
    const newEmployee = new Employee("", testId, "");
    expect(newEmployee.getId()).toBe(testId);
})

test("Can we access the email through getEmail() method?", () => {
    const testEmail = "test@test.com";
    const newEmployee = new Employee("", "", testEmail);
    expect(newEmployee.getEmail()).toBe(testEmail);
})

test("Return value of role", () => {
    const returnValue = "Employee";
    const newEmployee = new Employee("Amir", 1, "test@test.com");
    expect(newEmployee.getRole()).toBe(returnValue);
})