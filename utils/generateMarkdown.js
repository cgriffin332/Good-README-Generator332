// get package info
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");

// Promise-based versions of functions using node style callbacks
const writeFileAsync = util.promisify(fs.writeFile);

// function to generate markdown for README
function generateMarkdown() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your project title?",
        name: "Title",
      },
      {
        type: "input",
        message: "What is the description of your project?",
        name: "Description",
      },
      {
        type: "input",
        message: "What are your project's installation instructions?",
        name: "Install",
      },
      {
        type: "input",
        message: "What is your project's usage information?",
        name: "Usage",
      },
      {
        type: "input",
        message: "What are your project's contribution guidelines?",
        name: "Contributing",
      },
      {
        type: "input",
        message: "What are your project's test instructions?",
        name: "Test",
      },
      {
        type: "list",
        message: "Choose a license for your application.",
        name: "License",
        choices: ["MIT", "Mozilla", "ISC", "IBM", "GNU", "BSD", "Boost"],
      },
      {
        type: "input",
        message: "In what year did you finish this application?",
        name: "Year",
      },
      {
        type: "input",
        message: "What is your full name?",
        name: "Name",
      },
      {
        type: "input",
        message: "What is your GitHub username?",
        name: "GitHub",
      },
      {
        type: "input",
        message: "What are your email address?",
        name: "Email",
      },
    ])
    .then(function (data) {
      //assign the variable badge to the badge information for each license using a conditional
      let badge = "";
      if (data.License === "MIT") {
        badge =
          "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      } else if (data.License === "Mozilla") {
        badge =
          "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      } else if (data.License === "ISC") {
        badge =
          "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
      } else if (data.License === "IBM") {
        badge =
          "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
      } else if (data.License === "GNU") {
        badge =
          "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      } else if (data.License === "BSD") {
        badge =
          "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      } else if (data.License === "Boost") {
        badge =
          "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      }
      //write the information to a md file
      writeFileAsync(
        "README2.md",
        `# ${data.Title}
${badge}

## Description

${data.Description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#Contributing)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)

## Installation

${data.Install}

## License

This project is covered under the ${data.License} License. <br />
Copyright (c) [${data.Year}] [${data.Name}]

## Usage

${data.Usage}

## Contributing

${data.Contributing}

## Tests

${data.Test}

## Questions

If you have any additional questions, please contact me via email or GitHub by clicking the links below.

Email: ${data.Email} <br />
GitHub: https://github.com/${data.GitHub}
`
      );
    });
}
//export function
module.exports = generateMarkdown;
