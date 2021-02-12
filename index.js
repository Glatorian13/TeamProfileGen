const fs = require("fs");
const inquirer = require("inquirer");
const jest = require("jest");
//require constructors in lib library
const Employee = ("./lib/Employee");
const Engineer = ("./lib/Engineer");
const Intern = ("./lib/Intern");
const Manager = ("./lib/Manager");

const employees = [];

initalizeApp => {
    startHtml();
    addMember();
}