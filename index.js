// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
// Imports generateMarkdown from generateMarkdown.js
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "name",
        message: "Welcome to the README generator! Please enter your full name:"
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub username:",
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email:",
    },
    {
        type: "input",
        name: "title",
        message: "Enter the title of your project:",
    },
    {
        type: "input",
        name: "description",
        message: "Enter a short description of your project:",
    },
    {
        type: "list",
        name: "license",
        message: "Select a license for your project:",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        type: "input",
        name: "dependencies",
        message: "Enter instructions to install dependencies:",
    },
    {
        type: "input",
        name: "usage",
        message: "Enter instructions for usage:",
    },
    {
        type: "input",
        name: "tests",
        message: "Enter instructions needed to run tests:",
    },
    {
        type: "input",
        name: "know how",
        message: "Enter anything the user needs to know about using the repo:",
    },
    {
        type: "input",
        name: "contributing",
        message: "Enter anything the user needs to know about contributing to the repo:",
    },
    {
        type: "input",
        name: "credits",
        message: "Enter any credits and acknowledgements for your project here:",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
