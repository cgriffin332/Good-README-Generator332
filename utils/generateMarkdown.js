const fs = require("fs");
const util = require("util");
var inquirer = require("inquirer");

// Promise-based versions of functions using node style callbacks
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

// function to generate markdown for README
function generateMarkdown(data) {
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
        //[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
        //[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
        //[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
        //[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)
        //[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
        //[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
        //[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)
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
      console.log(data);

      writeFileAsync(
        "README2.md",
        `# ${data.Title}

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

${data.License}

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
`,
        (err) => {
          if (err) console.log(err);
          console.log("Success!");
          return `# ${data.Title}`;
        }
      );
    });
}

module.exports = generateMarkdown;
