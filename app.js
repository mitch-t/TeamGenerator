const Manager = require("./lib/manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = [];
// Write code to use inquirer to gather information about the development team members,

//const writeFileAsync = util.promisify(fs.writeFile);

function createEmployee() {
   const employeeType = [
    {
        type: "list",
        name: "role",
        message: "Which type of employee would you like to add to your team?",
            choices: ["Engineer","Intern","Manager"]
        },
      ]
      inquirer.prompt(employeeType)
        .then(answers => {
            if (answers.role === "Manager") {
                createManager();
            } else if (answers.role === "Engineer") {
                createEngineer();
            } else {
                createIntern();
            }
        })
};
function createManager() {
  const manager = [
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
  ]

  inquirer.prompt(manager)
  .then(answers => {
    const managerInput = new Manager(answers.name,answers.email,answers.empID,answers.office);
    employess.push(managerInput);
    console.log(`You have added ${answers.name}!`);
    addmember();
  })
}

function createEngineer() {
  const engineer =[
       {
         type: "input",
         name: "name",
         message: "Enter the engineer's name."
       }, 
       {
         type: "input",
         name: "email",
         message: "Enter the engineer's email."
       },
       {
         type: "input",
         name: "empID",
         message: "Enter the enginner's ID number?"
       },
       {
         type: "input",
         name: "github",
         message: "Enter the engineer's github username."
       }
      ]
      inquirer.prompt(engineer)
      .then(answers => {
        const engineerInput = new Engineer(answers.name,answers.email,answers.empID,answers.github);
        employess.push(engineerInput);
        console.log(`You have added ${answers.name}`);
        addmember();
      })
    }

    function createIntern() {
      const intern = [
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
      ]

      inquirer.prompt(intern)
      .then(answers => {
        const internInput = new Intern(answers.name,answers.email,answers.empID,answers.school);
        employess.push(internInput);
        console.log(`You have added ${answers.name}`);
        addmember();
      });
    }
    function addmember() {
      const next = [
          {
              type: "list",
              message: "Would you like to add another employee profile?",
              name: "continue",
              choices: ["Yes", "No"]
          }
      ]
      inquirer.prompt(next)
          .then(answers => {
              if (answers.continue === "Yes") {
                  createEmployee();
              } else {
                  createTeam();
                  console.log("You have created your Team!")
              }
          })
  };
  
  function createTeam(){
      const htmlPage = render(employees)
      fs.writeFileSync(outputPath, htmlPage);
  }
  
  createEmployee();