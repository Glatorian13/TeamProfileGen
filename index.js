//ES6-style module import (thanks vs-code)
import fs from "fs";
import inquirer from "inquirer";
import jest from "jest";
//require constructors in lib library
const Employee = ("./lib/Employee");
const Manager = ("./lib/Manager");
const Engineer = ("./lib/Engineer");
const Intern = ("./lib/Intern");

//run inquirer to gather input data
function userInput() {
    inquirer
        .prompt([{
            type: "input",
            message: "Enter employee name.",
            name: "name",
        }, {
            type: "number",
            message: "Enter employee's ID number.",
            name: "id",
        }, {
            type: "input",
            message: "Enter employee's email address.",
            name: "email",
        }, {
            type: "list",
            message: "Enter employee's role",
            name: "role",
            choices: ["Engineer", "Intern", "Manager"]
        }])
        .then(
            function ({ name, id, email, role }) {
                case "Engineer":
                inquirer
                    .prompt({
                        type: ""
                    })
            }
        )
}