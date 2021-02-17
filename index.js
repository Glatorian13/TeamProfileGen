//ES6-style module import (thanks vs-code)
const fs = require("fs");
const inquirer = require("inquirer");
const jest = require("jest");
//require constructors in lib library
const Employee = "./lib/Employee";
const Manager = "./lib/Manager";
const Engineer = "./lib/Engineer";
const Intern = "./lib/Intern";
//render html files based off templates
let renderFile = require("./render");
const generateEngineer = renderFile.createEngineer;
const generateManager = renderFile.createManager;
const generateIntern = renderFile.createIntern;
// remove above later??


//run inquirer to gather input data
function userInput() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter employee name.",
        name: "name",
      },
      {
        type: "number",
        message: "Enter employee's ID number.",
        name: "id",
      },
      {
        type: "input",
        message: "Enter employee's email address.",
        name: "email",
      },
      {
        type: "list",
        message: "Enter employee's role",
        name: "role",
        choices: ["Engineer", "Intern", "Manager"],
      },
    ])
    .then(function ({ name, id, email, role }) {
      switch (role) {
        case "Engineer":
          inquirer
            .prompt({
              type: "input",
              message: "Enter GitHub user-name.",
              name: "github",
            })
            .then(function ({ github }) {
              generateEngineer(name, id, email, github);
              addMember();
            });
          break;
        case "Intern":
          inquirer
            .prompt({
              type: "input",
              message: "Enter school attended.",
              name: "school",
            })
            .then(function ({ school }) {
              generateIntern(name, id, email, school);
              addMember();
            });
          break;
        case "Manager":
          inquirer
            .prompt({
              type: "input",
              message: "Office number?",
              name: "officeNum",
            })
            .then(function ({ officeNum }) {
              generateManager(name, id, email, officeNum);
              addMember();
            });
          break;
      }
    });
}

(addMember) => {
  inquirer
    .prompt({
      type: "confirm",
      message: "Add more Team Members?",
      name: "addMember",
    })
    .then(function ({ addMember }) {
      console.log("add other members", addMember);
      if (addMember) {
        userInput();
      } else {
        renderHTML();
      }
    })
    .catch((err) => {
      console.log("Problem adding more team members", err);
      throw err;
    });
};

userInput();

