const fs = require("fs");
const util = require("util");
var inquirer = require("inquirer");

  // Promise-based versions of functions using node style callbacks
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your project title?",
      Title: "Title",
    },
    {
      type: "input",
      message: "What is the description of your project?",
      Description: "Description",
    },
    {
      type: "input",
      message: "What are your project's installation instructions?",
      Install: "Install",
    },
    {
      type: "input",
      message: "What is your project's usage information?",
      Usage: "Usage",
    },
    {
      type: "input",
      message: "What are your project's contribution guidelines?",
      Contribution: "Contribution",
    },
    {
      type: "input",
      message: "What are your project's test instructions?",
      Test: "Test",
    },
    {
      type: "checkbox",
      message: "What languages do you know?",
      name: "languages",
      choices: [
          "HTML", "JS", "CSS"
      ],
    },
    {
      type: "list",
      message: "What is your preferred method of communciation?",
      name: "method",
      choices: ["email", "phone"]
    }
  ])
  .then(function(response) {

    fs.appendFile("index.json", JSON.stringify(response, null, "\t"), function(err) {

        if (err) {
          return console.log(err);
        }
      
        console.log("Success!");
      
      })
    });

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
