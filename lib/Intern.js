// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

class Intern extends Employee {
    constructor(name,id,email,role,school) {
      super(name,id,email,role);
      this.intern = school;
    }
}
//create varibale - intern has school info
const Intern = [
    new Intern("employee name", 50, "email",school),
    new Employee("dean", 60, "email")
    ]
    
    module.exports = {
        Employee,
        Intern
      };



