const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const promisify = require('util');
​
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
​
const render = require("./lib/htmlRenderer");
​
​
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

let team = [];

const questionsForEmployees = [
//employee name    
{
    type: "input",
    message: "What is the name of the the employee?",
    name:"name",
},
//employee id
{
    type: "input",
    message: "id",
    name: "What is the id of the employee?"
},
//employee email
{
    type: "input",
    message: "What is the email of the employee?",
},
//get roll of employee
{
    type: "list",
    message: "What is the role of the employee?",
    name: "role",
    choices : ["engineer", "intern", "manager"],
},
// when engineer
{
    when: choice => {
        return choice.role == "engineer"
    },
    type:"input",
    message: "What is your GitHub username?",
    name: "github",
    
 
},
//when intern
{
    when: choice => {
        return choice.role == "intern"
    },
    type: "input",
    message: "What is the name of your school?",
    name: "school",


},
//when manager
{
    when: choice => {
        return choice.role == "manager"
    },
    type: "input",
    message: "What is your office number?",
    name: "officeNumber",


},
]
//check if more team members
const checkForMoreEmployees =
{
    type: "list",
    name: "addMore",
    message: "Do you have any more team members you'd liek to add?",
    choices: ["Yes", "No"]
};

//create async function to check if user added more employees
async function checkForMoreEmployees() {
    try {
        const checkForMore = await inquirer.prompt(checkForMoreEmployees);
        if(checkForMore.addmore === "Yes") {
            await createTeam();
        }
        return team;
    }
    catch (err) {
        console.log("There is an error in the chackForMre Employees Function");
    }
};

//create another asyn funtion that creates the team by pushing the new constructor into empty team array
function createTeam() {
}





//create async funtion foro the renderhtml to occur and to write the outpu to






// addManager();
// createTeam();
// render(team);
​
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
​
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
​
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
​
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
