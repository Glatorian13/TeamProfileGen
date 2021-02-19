const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const jest = require("jest");
const ejs = require("ejs");
const src = require("./src");
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

async function run() {
    let empArr = [];
    const count = 4;
    for (i = 0; i < count; i++) {
        const promise = new Promise((resolve, reject) => {
            uiEmployee()
            .then(function ({ name, id, email, title }) {

                if (title === "Manager") {
                    uiManager().then(function ({ officeNumber }) {
                    this.employee = new Manager(name, id, email, officeNumber, title);
                    empArr.push(this.employee);
                    resolve("done");
                    })
                } else if (title === "Engineer") {
                    uiEngineer().then(function ({ github }) {
                        this.employee = new Engineer(name, id, github, title);
                        empArr.push(this.employee);
                        resolve("done");
                    })
                } else if (title === "Intern") {
                    uiIntern().then(function ({ school }) {
                        this.employee = new Intern(name, id, email, school, title);
                        empArr.push(this.employee);
                        resolve("done");
                    })
                }

            }).catch(function (err) {
                console.log("Error with building array.");
                console.log(err);
            })
        })
        const result = await promise;
        console.log(result);
    }

    function displayTitle(employee) {
        if (employee.title === "Manager") {
            return `Office Number: ${employee.officeNumber}`;
        }

        if (employee.title === "Engineer") {
            return `GitHub: ${employee.github}`;
        }

        if (employee.title === "Intern") {
            return `School: ${employee.school}`;
        }
    }
    function fasBadge(employee) {
        if (employee.title === "Manager") {
            return `"fas fa-mug-hot mr-2"`;
            //replaces fasIcon
        }

        if (employee.title === "Engineer") {
            return `"fas fa-glasses mr-2"`;
        }

        if (employee.title === "Intern") {
            return `"fas fa-user-graduate mr-2"`;
        } 
    }
    // function htmlDivs(employee) {
    //     if(employee.title === "Manager") {
    //         let htmlTemplate = fs.readFileSync(path.resolve(src, "manager.html"), "utf-8");
    //         var mHtml = ""
    //         mHtml = mHtml + htmlTemplate.replace(/{{ name }}/g, manager.getName)
    //     }
    // }

    //now add html templates

    function getCardHtml() {
        let html = "";
        let template = fs.readFileSync(path.resolve(src, "div.html"), "utf-8");
        for (j = 0; j < count; j++) {
            console.log(empArr[j])
            html = html + template.replace(/{{} name }}/g, empArr[j].name)
            .replace(/{{ fasIcon }}/g, fasBadge(empArr[j]))
            //etc add more
        }
            return html;
    }
    
    let html = fs.readFileSync(path.resolve(src, "body.html"), "utf-8")
    .replace(/{{ team }}/g, getCardHtml())
}
