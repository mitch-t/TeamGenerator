const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require("util");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = [];
// Write code to use inquirer to gather information about the development team members,

const writeFileAsync = util.promisify(fs.writeFile);

function createManager() {
   inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter manager name."
    }, 
    {
      type: "input",
      name: "email",
      message: "Enter manager email."
    },
    {
      type: "input",
      name: "empID",
      message: "What is your team member ID number?"
    },
    {
      type: "input",
      name: "office",
      message: "List the office number."
    },
    { 
    type: "list",
    name: "role",
    message: "Which type of employee would you like to add to your team?",
        choices: ["Engineer","Intern","none at this time"]
    },
  ]).then(answers => {
    if(answers.role === "Engineer") {
      createEngineer();
    }
    else if(answers.role === "Intern") {
      createIntern();
    }
    else {
      render(employees);
    }
  
    function createEngineer() {
      inquirer.prompt([
       {
         type: "input",
         name: "name",
         message: "Enter engineer name."
       }, 
       {
         type: "input",
         name: "email",
         message: "Enter engineer email."
       },
       {
         type: "input",
         name: "empID",
         message: "Enter enginner ID number?"
       },
       {
         type: "input",
         name: "github",
         message: "Enter engineer github name."
       }
      ]).then(answers => {
        const engineer = new Engineer(answers.name,answers.email,answers.empID,);
        employess.push(engineer);
        addmember();
      });
    };

    function createIntern() {
      inquirer.prompt([
       {
         type: "input",
         name: "name",
         message: "Enter the name of the intern."
       }, 
       {
         type: "input",
         name: "email",
         message: "Enter the email address."
       },
       {
         type: "input",
         name: "empID",
         message: "Enter the intern ID number?"
       },
       {
         type: "input",
         name: "school",
         message: "Enter the name of the school that the intern attended."
       }
      ]).then(answers => {
        const intern = new Intern(answers.name,answers.email,answers.empID,);
        employess.push(intern);
        addmember();
      });
    };
  
// and to create objects for each team member (using the correct classes as blueprints!)

//Class new Employee
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
function generateHTML(answers) {
    return `
    ` 
  ;
  }
  createManager()
    .then(function(answers) {
      const html = generateHTML(answers);
  
      return writeFileAsync("manager.html", html);
    })
    .then(function() {
      console.log("Successfully wrote to manager.html");
    })
    .catch(function(err) {
      console.log(err);
    });
  
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```


  }