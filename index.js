const fs = require("fs");
const { ui } = require("inquirer");
const inquirer = require("inquirer");
const jest = require("jest");
const ejs = require("ejs");
//constructor inport
const Employee = "./lib/Employee";
const Manager = "./lib/Manager";
const Engineer = "./lib/Engineer";
const Intern = "./lib/Intern";

//build array for employee using inquirer
function uiEmployee() {
    const uiArray = [{
        type: "input",
        message: "Enter employee name.",
        name: "name"
    }, {
        type: "number",
        message: "Enter employee's ID number.",
        name: "id"
    }, {
        type: "input",
        message: "Enter employee's email address.",
        name: "email"
    }, {
        type: "list",
        message: "Enter employee's title",
        choices: ["Engineer", "Intern", "Manager"],
        name: "title"
    }];
    return inquirer
        .prompt(uiArray);
}

function uiManager() {
    const uiArray = [{
        type: "input",
        message: "Enter office number.",
        name: "officeNumber"
    }];
    return inquirer
    .prompt(uiArray);
}

function uiEngineer() {
    const uiArray = [{
        type: "input",
        message: "Enter github username",
        name: "github"
    }];
    return inquirer
    .prompt(uiArray);
}

function uiIntern() {
    const uiArray = [{
        type: "input",
        message: "Enter school.",
        name: "school"
    }];
    return inquirer
    .prompt(uiArray);
}

