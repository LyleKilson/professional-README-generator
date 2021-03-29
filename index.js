// packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
// Reference: https://www.npmjs.com/package/util.promisify
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
        "afl-3.0",
        "apache-2.0",
        "artistic-2.0",
        "bsl-1.0",
        "bsd-2-clause",
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
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("You need to enter a email!");
          return false;
        }
      },
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
5. [Test Instructions](#test-instructions)
6. [License](#license)
7. [Questions](#questions)

## Project Description
* ${answers.description}

## Installation Instructions
* ${answers.install}

## Usage Information
* ${answers.use}

## Contributor Guidelines
* ${answers.contributions}

## Test Instructions
* ${answers.test}

## License
* licensed under the ${answers.license}

## Questions
* For additional help or questions about collaboration, please reach out to me at **${
    answers.email
  }**
* Follow me on Github at [${answers.github}](http://github.com/${
    answers.github
  })`;
};

promptUser()
  .then(function (answers) {
    const readme = generateReadme(answers);
    return writeFileAsync("README.md", readme);
  })
  .then(function () {
    console.log("Success! Your README.md file has been created!");
  })
  .catch((err) => {
    console.log(err);
  });
