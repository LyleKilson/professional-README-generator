// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project (Required)?",
      validate: (titleInput) => {
        if (titleInput) {
          return true;
        } else {
          console.log("You need to enter a project title!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Provide a description of the project (Required)",
      validate: (descriptionInput) => {
        if (descriptionInput) {
          return true;
        } else {
          console.log("You need to enter a project description!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "install",
      message: "Describe the installation instructions/requirments if any?",
    },
    {
      type: "input",
      name: "use",
      message: "What is this project to be used for?",
    },
    {
      type: "input",
      name: "contributions",
      message: "Are there any contribution guidelines?",
    },
    {
      type: "input",
      name: "test",
      message: "Please provide test instructions if applicable",
    },
    {
      type: "checkbox",
      message: "Choose a license",
      name: "license",
      choices: [
        "Apache 2.0 License",
        "Boost Software License 1.0",
        "BSD 3-Clause License",
        "BSD 2-Clause License",
      ],
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub username",
      validate: (githubInput) => {
        if (githubInput) {
          return true;
        } else {
          console.log("You need to enter a Github username!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email account",
    },
  ]);
};

generateReadme = (answers) => {
  return `# ${answers.title}
#### Table of Contents
1. [Project Description](#project-description)
2. [Installation Instructions](#installation-instructions)
3. [Usage Information](#usage-information)
4. [Contributor Guidelines](#contributor-guidelines)
5. [Code of Conduct](#code-of-conduct)
6. [Test Instructions](#test-instructions)
7. [License](#license)
8. [Questions](#questions)

## Project Description
* ${answers.description}

## Installation Instructions
* ${answers.install}

## Usage Information
* ${answers.use}

## Contributor Guidelines
* ${answers.contributions}

## Code of Conduct
* [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md)

## Test Instructions
* ${answers.test}

## License
* licensed under the ${answers.license}

## Questions
* For additional help or questions about collaboration, please reach out to ${answers.email}
* Follow me on Github at [${answers.github}](http://github.com/${answers.github})`;
};

promptUser()
  .then(function (answers) {
    const readme = generateReadme(answers);
    return writeFileAsync("README.md", readme);
  })
  .then(function () {
    console.log("Your README.md has been created!");
  })
  .catch((err) => {
    console.log(err);
  });
