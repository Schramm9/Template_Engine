const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
let employees = [];
// array of questions for user
const roleQs = [
  {
    type: "list",
    name: "role",
    message: "Which type of employee?",
    choices: ["Engineer", "Intern", "Team Completed"],
  },
];
const managerQs = [
  {
    type: "input",
    name: "name",
    message: "Name of manager?",
  },
  {
    type: "input",
    name: "id",
    message: "ID of manager?",
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
];
const engineerQs = [
  {
    type: "input",
    name: "name",
    message: "Name of engineer?",
  },
  {
    type: "input",
    name: "id",
    message: "ID of engineer?",
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
];
const internQs = [
  {
    type: "input",
    name: "name",
    message: "Name of intern?",
  },
  {
    type: "input",
    name: "id",
    message: "ID of intern?",
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
  },
];
const OUTPUT_DIR = path.resolve(__dirname, "output"); //locates folder dir
const outputPath = path.join(OUTPUT_DIR, "team.html"); //creates file
const render = require("./lib/htmlRenderer");
function createManager(response) {
  const aManager = new Manager(
    response.name,
    response.id,
    response.emailM,
    response.officeNumber
  );
  employees.push(aManager);
  console.log(aManager.getName());
}
function engineerAsk() {
  inquirer.prompt(engineerQs).then(function (response) {
    const anEngineer = new Engineer(
      response.name,
      response.id,
      response.emailE,
      response.github
    );
    console.log(anEngineer.getName());
    employees.push(anEngineer);
    teamQs();
  });
}
function internAsk() {
  inquirer.prompt(internQs).then(function (response) {
    const anIntern = new Intern(
      response.name,
      response.id,
      response.emailI,
      response.school
    );
    console.log(anIntern.getName());
    employees.push(anIntern);
    teamQs();
  });
}
function teamQs() {
  inquirer.prompt(roleQs).then(function (response) {
    switch (response.role) {
      case "Engineer":
        engineerAsk();
        break;
      case "Intern":
        internAsk();
        break;
      default:
        makeTeam();
    }
  });
}
function makeTeam() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFileSync(outputPath, render(employees), "utf-8");
  process.exit(0);
}
function init() {
  inquirer.prompt(managerQs).then(function (response) {
    createManager(response);
    teamQs();
  });
}
// function init() {
//   inquirer.prompt(managerQs).then(function (response) {
//     createManager(response)
//     "choices" =
//     while (roleQs != "Team Completed") { teamQs() }
//   })
// }
// function call to initialize program
init();
