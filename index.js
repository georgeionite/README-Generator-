const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a detailed description of your project:',
      },
      {
        type: 'input',
        name: 'features',
        message: 'What are the key features of your project? List them:',
      },
      {
        type: 'input',
        name: 'technologies',
        message: 'What technologies and tools were used in the development of this project?',
      },
      {
        type: 'input',
        name: 'credits',
        message: 'Would you like to acknowledge any individual or organization for their contributions?',
      },
    
      {
        type: 'input',
        name: 'installation',
        message: 'How can one install your project? Provide step-by-step instructions:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project? Provide examples or use cases:',
      },

      {
        type: 'input',
        name: 'contributing',
        message: 'What are the guidelines for contributing to this project?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Provide instructions on how to run tests for your project:',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD', 'None'],
      },
      
      
      
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdown = generateMarkdown(answers);
        writeToFile('SAMPLE.md', markdown);
      });
}

// function call to initialize program
init();
