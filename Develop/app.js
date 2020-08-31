const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// array of questions for user
const questions = [

  {
    type: "list",
    name: "role",
    message: "Which type of employee?",
    choices: ["Manager", "Engineer", "Intern"]
  },
  // {
  //   type: "input",
  //   name: "managerId",
  //   message: "Manager's ID?",
  // },
  // {
  //   type: "input",
  //   name: "officeNum",
  //   message: "Office number of Team-Lead/manager?",
  // },
  // {
  //   type: "number",
  //   name: "internNum",
  //   message: "How many interns on development team?",
  // },
  // {
  //   type: "input",
  //   name: "school",
  //   message: "What is the school for intern + ' '?",
  // },
  // {
  //   type: "number",
  //   name: "engineerNum",
  //   message: "How many engineers on development team?",
  // },
  // {
  //   type: "input",
  //   name: "github",
  //   message: "What is the GitHub username for engineer + ' '?",
  // },
]
const managerQs = [
  {
    type: "input",
    name: "name",
    message: "Name of employee?",
  },
  {
    type: "input",
    name: "id",
    message: "ID of employee?",
  },
  {
    type: "input",
    name: "emailM",
    message: "What is the email for manager?",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Office number of manager?",
  },
]

const engineerQs = [{
  type: "input",
  name: "name",
  message: "Name of employee?",
},
{
  type: "input",
  name: "id",
  message: "ID of employee?",
},
{
  type: "input",
  name: "emailE",
  message: "What is the email for engineer?",
},
{
  type: "input",
  name: "github",
  message: "What is the GitHub username for engineer?",
},
]

const internQs = [
  {
    type: "input",
    name: "name",
    message: "Name of employee?",
  },
  {
    type: "input",
    name: "id",
    message: "ID of employee?",
  },
  {
    type: "input",
    name: "emailI",
    message: "What is the email for intern?",
  },
  {
    type: "input",
    name: "school",
    message: "What is the school for intern?",
  },]

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
function engineerAsk() {
  inquirer.prompt(engineerQs).then(function (response) {
    const anEngineer = new Engineer(response.name, response.id, response.emailE, response.github)
    console.log(anEngineer.getName())
  })
}
function managerAsk() {
  inquirer.prompt(managerQs).then(function (response) {
    const aManager = new Manager(response.name, response.id, response.emailM, response.officeNumber)
    console.log(aManager.getName())
  })
}
function internAsk() {
  inquirer.prompt(internQs).then(function (response) {
    const anIntern = new Intern(response.name, response.id, response.emailI, response.school)
    console.log(anIntern.getName())
  })
}
function init() {
  inquirer.prompt(questions).then(function (response) {
    switch (response.role) {
      case "Manager":
        // code block
        managerAsk();
        break;
      case "Engineer":
        // code block
        engineerAsk();
        break;
      default:
        // code block
        internAsk();
    }
    function createManager() { }
    function createTeam() { }
    function createEngineer() { }
    function createIntern() { }
    function renderHTML() { }
    createManager();
  })
}

// function call to initialize program
init();

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

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
