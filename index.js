// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// Imports generateMarkdown from generateMarkdown.js
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    
    {
        type: "input",
        name: "github",
        message: "Welcome to the README generator! Enter your GitHub username:",
        validate: function(input) {
            return input ? true : "Please enter a valid GitHub username";
        }
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email:",
        validate: function(input) {
            return input ? true : "Please enter a valid email";
        }
    },
    {
        type: "input",
        name: "title",
        message: "Enter the title of your project:",
        validate: function(input) {
            return input ? true : "Please enter the title of your project";
        }
    },
    {
        type: "input",
        name: "description",
        message: "Enter a short description of your project:",
        validate: function(input) {
            return input ? true : "Please enter a description of your project";
        }
    },
    {
        type: "list",
        name: "license",
        message: "Select a license for your project:",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3-Clause", "None"],
        validate: function(input) {
            return input ? true : "Please select a valid license option";
        }
        
    },
    {
        type: "input",
        name: "installation",
        message: "Enter instructions to install dependencies:",
        validate: function(input) {
            return input ? true : "Please enter instructions to install dependencies";
        }
    },
    {
        type: "input",
        name: "usage",
        message: "Enter what the user needs to know about using this project:",
        validate: function(input) {
            return input ? true : "Please enter usage information about your project";
        }
    },
    {
        type: "input",
        name: "tests",
        message: "Enter instructions needed to run tests:",
        validate: function(input) {
            return input ? true : "Please enter the instructions to run tests or write N/A";
        }
    },
    {
        type: "input",
        name: "contributing",
        message: "Enter anything the user needs to know about contributing to the project:",
        validate: function(input) {
            return input ? true : "Please enter information about contributing to your project or write N/A";
        }
    },
    {
        type: "input",
        name: "credits",
        message: "Enter any credits and acknowledgements for your project here:",
        validate: function(input) {
            return input ? true : "Please enter any credits/acknowledgements or write N/A";
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("generatedREADME.md", data, (err) => {
        err ? console.error(err) : console.log("README has been generated!");
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data => {
        return generateMarkdown(data);
    })
    .then(data => {
        return writeToFile("generatedREADME.md", data);
    });
    
}

// Function call to initialize app
init();
