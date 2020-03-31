console.log('Hello World');

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const promisify = require('./node_modules/util.promisify');

console.log('Hello World');

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


let team = [];

console.log('Hello World');

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
        name: "What is the id of the employee?",
    },
    //employee email
    {
        type: "input",
        message: "What is the email of the employee?",
        name: "email",
    },
    //get roll of employee
    {
        type: "list",
        message: "What is the role of the employee?",
        name: "role",
        choices : ["Engineer", "Intern", "Manager"],
    },
    ];

    console.log("HI");

    const questionForEngineer = 
{
    // when: choice => {
    //     return choice.role == "engineer"
    // },
    type:"input",
    message: "What is your GitHub username?",
    name: "github",
    
};

console.log("QFE");

//when intern
const questionForIntern = 
{
    // when: choice => {
    //     return choice.role == "intern"
    // },
    type: "input",
    message: "What is the name of your school?",
    name: "school",

};

console.log("QFI");

//when manager
const questionForManager = 
{
    // when: choice => {
    //     return choice.role == "manager"
    // },
    type: "input",
    message: "What is your office number?",
    name: "officeNumber",

};
console.log("QFM");


//check if more team members
const askForMoreEmployees =
{
    type: "confirm",
    name: "addMore",
    message: "Do you have any more team members you'd like to add?",
    default: false,
};

console.log("check employees");

//create async function to check if user added more employees
async function checkForMoreEmployees() {
    try {
        const checkForMore = await inquirer.prompt(askForMoreEmployees);
        if(checkForMore.addMore) {
            await createTeam();
        }
        return team;
    }
    catch (err) {
        console.log("There is an error in the chackForMre Employees Function");
    }
};
console.log("function");

//create another asyn funtion that creates the team by pushing the new constructor into empty team array
async function createTeam() {

    try {
        const inputFromUsers = await inquirer.prompt(questionsForEmployees);
        const {name,id,email} = inputFromUsers;
        //use switch and break
        switch(inputFromUsers.role) {
            case "Engineer": try{
            const engineerInput = await inquirer.prompt(questionForEngineer);
            const {github} = engineerInput;
                let engineer = new Engineer(name,id,email,github);
                team.push(engineer);
            await checkForMoreEmployees();
        }catch (err) {
            console.log("Error for the engineer");
        };
    break;

    case "Intern": try{
        const internInput = await inquirer.prompt(questionForIntern);
        const {school} = internInput;
            let intern = new Intern(name,id,email,school);
            team.push(intern);
        await checkForMoreEmployees();
    }catch (err) {
        console.log("Error for the intern");
    };
break;

case "Manager": try{
    const managerInput = await inquirer.prompt(questionForManager);
    const {officeNumber} = managerInput;
        let manager = new Manager(name,id,email,officeNumber);
        team.push(manager);
    await checkForMoreEmployees();
}catch (err) {
    console.log("Error for the manager");
};
break;
        }
    }catch (err) {
        console.log("Error!")
    }

};

console.log("wow");

async function main() {
    await createTeam();

    const renderedHtml = render(team);

    var dir = './output';
    if(!fs.existsSync(dir)){
        console.log("outputting");
        fs.mkdirSync(dir);
    };

    fs.writeFile(outputPath, renderedHtml, error => {
        if(error) throw error;
        console.log("Done!");
    });


}
main().then(()=>console.log('Yay!')).catch((err)=>console.log(err));