// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}
module.exports = Engineer;

// class Employee {
//     constructor(name, id, email) {
//       this.name = name;
//       this.id = id;
//       this.email = email;
//     }
//     get getName() {
//       return this.name;
//     }
//     get getId() {
//       return this.id;
//     }
//     get getEmail() {
//       return this.email;
//     }
//     get getRole() {
//       return "Employee";
//     }
//   }
//   module.exports = Employee;
//}
//const christTheEngineer= newEngineer(1, "chris", "chris@chris.com", "Chrischramm")
