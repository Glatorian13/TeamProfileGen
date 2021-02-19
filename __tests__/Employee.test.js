const Employee = require("../lib/Employee");

test("start employee instance", () => {
    const employee = new Employee();
    expect(ypeof (employee)).toBe("object");
})

test("Return called value of name", () => {
    const name = "Javier";
    const employee = new Employee(name);
    expect(employee.name).toBe("Javier");
})

