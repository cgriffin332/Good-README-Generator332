// get package info
const fs = require("fs");
const inquirer = require("inquirer");

// function to generate markdown for README
function generateMarkdown() {
  inquirer
  //ask user each question
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
        message: "What is your email address?",
        name: "Email",
      },
    ])
    .then(function (data) {
      //assign the variable badge to the badge information for each license using a conditional
      let badge = "";
      let licenseText = "";
      if (data.License === "MIT") {
        badge =
          "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        licenseText = `Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
      } else if (data.License === "Mozilla") {
        badge =
          "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
        licenseText = `Link to license: https://opensource.org/licenses/MPL-2.0`;
      } else if (data.License === "ISC") {
        badge =
          "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
        licenseText = `Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.`;
      } else if (data.License === "IBM") {
        badge =
          "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
        licenseText = `Link to license: https://opensource.org/licenses/IPL-1.0`;
      } else if (data.License === "GNU") {
        badge =
          "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        licenseText = `Link to license: https://www.gnu.org/licenses/gpl-3.0`;
      } else if (data.License === "BSD") {
        badge =
          "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
        licenseText = `Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.         
3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.          
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`;
      } else if (data.License === "Boost") {
        badge =
          "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
        licenseText = `Permission is hereby granted, free of charge, to any person or organization obtaining a copy of the software and accompanying documentation covered by this license (the "Software") to use, reproduce, display, distribute, execute, and transmit the Software, and to prepare derivative works of the Software, and to permit third-parties to whom the Software is furnished to do so, all subject to the following:
The copyright notices in the Software and this entire statement, including the above license grant, this restriction and the following disclaimer, must be included in all copies of the Software, in whole or in part, and all derivative works of the Software, unless such copies or derivative works are solely in the form of machine-executable object code generated by a source language processor.          
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE COPYRIGHT HOLDERS OR ANYONE DISTRIBUTING THE SOFTWARE BE LIABLE FOR ANY DAMAGES OR OTHER LIABILITY, WHETHER IN CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
      }
      //write the information to README2.md file
      fs.writeFile(
        "README2.md",
        `# ${data.Title}
${badge}

## Description

${data.Description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#Contributing)
* [License](#license)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${data.Install}

## Usage

${data.Usage}

## License

This project is covered under the ${data.License} License. <br />
Copyright (c) [${data.Year}] [${data.Name}] <br />
${licenseText}

## Contributing

${data.Contributing}

## Tests

${data.Test}

## Questions

If you have any additional questions, please contact me via email or GitHub by clicking the links below.

Email: ${data.Email} <br />
GitHub: https://github.com/${data.GitHub}
`,
//check fir errors
        function (err) {
          if (err) throw err;
          console.log("Successfully created README2.md");
        }
      );
    })
    .catch((err) => {
      console.log(err);
    });
}

//export function
module.exports = generateMarkdown;
