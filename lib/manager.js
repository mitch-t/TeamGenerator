// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

class Manager extends Employee {
    constructor(name,id,email,role,office) {
      super(name,id,email,role);
      this.manager = office;
    }
}
//need to add variable or constant
const Manager = [
    new Manager("employee name", 50, "email",office),
    new Employee("dean", 60, "email")
    ]
    
module.exports = {
    Employee,
    Manager
  };

  