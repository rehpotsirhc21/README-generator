const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    message: "Please enter the title of your project",
    name: "title",
  },
  {
    type: "input",
    message: "Please enter a description of your project",
    name: "description",
  },
  {
    type: "input",
    message: "Please provide directions on how to install your application",
    name: "instructions",
  },
  {
    type: "input",
    message: "Please describe how your application should be used",
    name: "use",
  },
  {
    type: "checkbox",
    message: "What license does your repository use? Please choose only one.",
    choices: ["MIT", "Mozilla Public License 2.0", "Apache License 2.0"],
    name: "license",
  },
  {
    type: "input",
    message: "How can other contribute to this project?",
    name: "contribute",
  },
  {
    type: "input",
    message: "How do you write tests for your application?",
    name: "tests",
  },
  {
    type: "input",
    message: "Please provide your GitHub username",
    name: "github",
  },
  {
    type: "input",
    message:
      "Please provide an email address for people to contact you with questions",
    name: "email",
  },
];
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      return "success";
    }
  });
}

function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile("README.md", generateMarkdown(data));
    console.log(data);
  });
}

// Function call to initialize app
init();
