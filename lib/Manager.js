const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNum, title) {
    super(name, id, email);
    this.officeNum = officeNum;
    this.title = title;
  }
  getRole() {
    return this.title;
  }
  getOfficeNum() {
    return this.officeNum;
  }
}

export default Manager;
