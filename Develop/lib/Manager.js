// In addition to `Employee`'s properties and methods, `Manager` will also have:
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    //   * officeNumber
    this.officeNumber = officeNumber;
  }

  //   * getRole() // Overridden to return 'Manager'
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
