# Professional README Generator

## Description
Every project needs a README to provide users with important information about what the project is for, how to use the it, how to install it, how to report issues, and how to make contributions. Check out the readme-guide.md in this repository for more info. Professional README Generator is a command-line application powered by Node.js that dynamically generates a proffesional README file based on user input.

## Table of Contents
* Installation
* Usage
* Methodology
* License

## Application video
https://drive.google.com/file/d/14CVE7YS8-ByyFdYC5HzAQ3OAVrLoAZz4/view

## Installation and operation
To generate a new README.md file, first run `npm install` in order to install the following npm package:

* [`inquirer`](https://www.npmjs.com/package/inquirer) will prompt you for your inputs from the command line.
* To run professional-README-generator in the command line from the root directory enter `node index.js`

## Usage
When running `node index.js`, the application uses the `inquirer` package to prompt a series of questions about the users project.

The application then will generate markdown and a table of contents for the README file based on the users responses to the `inquirer` prompts.

Lastly, `fs.writeFile` is used to generate your project's README file.

## License

MIT License

## Contact

GitHub: https://github.com/LyleKilson

Email: kylwlsn@gmail.com
