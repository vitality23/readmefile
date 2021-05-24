// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require(`./utils/generateMarkdown`);
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
    {
    type: "input",
    message: "What is your github username?",
    name: "userName"   
    },
    {
    type: "input",
    message: "what is your email address?",
    name: "email"
    },
    {
    type: "input",
    message: "what is the title of your project?",
    name: "Title"
    },
    {
    type: "input",
    message: "Please give a description of the project",
    name: "Description"
    },
    {
    type: "checkbox",
    message: "what license was used for this ReadMe?",
    name: "license",
    choices: [
             "MIT",
             "ISC",           
             ]
    },
    {
    type: "input",
    message: "what is this app used for?",
    name: "usage"
    },
    {
    type: "input",
    message: "add contributers",
    name: "contributer"
    },
    {
    type: "input",
    message: "what command is used to test the app?",
    name: "test"
    },
    {
    type: "input",
    message: "what dependencies do you need to install?",
    name: "installation"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data,(err) =>{
        if(err){
            return console.log(err);
        }
        
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const response = generateMarkdown(answers);
        console.log(answers)

        writeToFile("readme.md", response)
    })}
    

// Function call to initialize app
init();
