// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the name of your project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the purpose of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please describe your project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How is your project installed?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How should your project be used?'
    },
    {
        type: 'input',
        name: 'license',
        message: 'What license does your project have?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who contributed to this project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What tests does this project have?'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What github username should be contacted for further information?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the link for that github?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What email address can people contact for more information?'
    },
    {
        type: 'input',
        name: 'contact',
        message: 'Any further instructions for contacting you about the project?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then(projectData => {
        return generateMarkdown(projectData)
    })
    .then(readMeData => {
        return writeToFile('./dist/README.md', readMeData)
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err);
    })
}

// Function call to initialize app
init();
