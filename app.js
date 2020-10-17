const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// inquirer is used to gather information about the development team members,

const employees = [];

function generatePerson() {
    const personType = [
        {
            type: "list",
            message: "Which type of employee would you like to add to your team?",
            name: "type",
            choices: ["Manager", "Engineer", "Intern"]
        }
    ]
    //inquirer info is used to differeniate between employee roles based on user input
    inquirer.prompt(personType)
        .then(answers => {
            if (answers.type === "Manager") {
                createManager();
            } else if (answers.type === "Engineer") {
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
            message: "Enter manager name.",
            name: "name"
        },
        {
            type: "input",
            message: "Enter manager ID.",
            name: "id"
        },
        {
            type: "input",
            message: "What is the manager's email?",
            name: "email"
        },
        {
            type: "input",
            message: "Enter the office number of the manager.",
            name: "office"
        },
    ]

    //user input is used to create data on each employee(manager) and that data and employee are pushed into an array called employees
    inquirer.prompt(manager)
        .then(answers => {
            const managerInput = new Manager(answers.name, answers.id, answers.email, answers.office);
            employees.push(managerInput);
            console.log(`You have successfully added ${answers.name}!`);
            addOn();
        })

}

function createEngineer() {
    const engineer = [
        {
            type: "input",
            message: "Enter the name of the engineer.",
            name: "name"
        },
        {
            type: "input",
            message: "Enter the engineer's employee ID number.",
            name: "id"
        },
        {
            type: "input",
            message: "Enter the engineer's email.",
            name: "email"
        },
        {
            type: "input",
            message: "What is this engineer's github username?",
            name: "github"
        },
    ]
     //user input is used to create data on each employee(enginneer) and that data and employee are pushed into an array called employees
    inquirer.prompt(engineer)
        .then(answers => {
            const engineerInput = new Engineer(answers.name, answers.id, answers.email, answers.github);
            employees.push(engineerInput);
            console.log(`You have added ${answers.name}!`);
            addOn();
        })
}

function createIntern() {
    const intern = [
        {
            type: "input",
            message: "Enter the name of the intern.",
            name: "name"
        },
        {
            type: "input",
            message: "Enter the intern's ID number.",
            name: "id"
        },
        {
            type: "input",
            message: "Enter the intern's email address.",
            name: "email"
        },
        {
            type: "input",
            message: "What school does this intern attend?",
            name: "school"
        },
    ]
    //user input is used to create data on each employee(intern) and that data and employee are pushed into an array called employees
    inquirer.prompt(intern)
        .then(answers => {
            const internInput = new Intern(answers.name, answers.id, answers.email, answers.school);
            employees.push(internInput);
            console.log(`You have successfully added ${answers.name}!`);
            addOn();
        })
}
// this function enables the user to add new team members after data is collected for each new employee
function addOn() {
    const add = [
        {
            type: "list",
            message: "Would you like to add another employee?",
            name: "continue",
            choices: ["Yes", "No"]
        }
    ]
    inquirer.prompt(add)
        .then(answers => {
            if (answers.continue === "Yes") {
                generatePerson();
            } else {
              createTeam();
                console.log("You have created your Team!")
            }
        })
};

//employee data is gathered and generated into a html page.
function createTeam(){
    const htmlPage = render(employees)
    fs.writeFileSync(outputPath, htmlPage);
}

generatePerson();