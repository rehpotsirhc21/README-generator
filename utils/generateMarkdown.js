// function to generate markdown for README

function licenseBadge(data) {
  const licenseName = data.license[0];
  let licenseDesc = " ";
  if (licenseName === "MIT") {
    licenseDesc = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  }
  if (licenseName === "Mozilla Public License 2.0") {
    licenseDesc = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0))`;
  }
  if (licenseName === "Apache License 2.0") {
    licenseDesc = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  }

  return licenseDesc;
}

function generateMarkdown(data) {
  return `# ${data.title}
## Table of Contents:
  1. [Description](#description) 
  2. [Installation](#Installation)
  3. [Use](#Use)  
  4. [Contribute](#Contribute)
  5. [Tests](#Tests)
  6. [License](#License)
  7. [GitHub](#GitHub)
  8. [E-mail](#E-mail)
## Description
${data.description} 
## Installation
${data.instructions}
## Use
${data.use}
## Contribute
${data.contribute}
## Tests
${data.tests}
## License
${licenseBadge(data)}
## GitHub
${data.github}
## E-mail
${data.email}`;
}
module.exports = generateMarkdown;
