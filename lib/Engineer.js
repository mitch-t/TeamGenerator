// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

class Employee {
    // method which prints all of the stats for a employee
    constructor(name,id,email,role) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.role = role;
    }
}

class Engineer extends Employee {
    constructor(name,id,email,role,github) {
      super(name,id,email,role);
      this.engineer = github;
    }
}

//note: Engineer will show engineer and then all same parameters as employee. Engineer has github info
// should role be asked first and than if statement?
const Engineer = [
    new Engineer("employee name", 50, "email",Engineer),
    new Employee("dean", 60, "email")
    ]
    
    module.exports = {
        Employee,
        Engineer
      };