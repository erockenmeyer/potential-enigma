// packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// array of questions for user input
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
        message: 'How is your project installed?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please explain how to install your project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How should your project be used?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please explain the use of project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'license',
        message: 'What license does your project have?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who contributed to this project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the name(s) of the contributors.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What tests does this project have?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please state what tests exist for this project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'username',
        message: 'What github username should be contacted for further information?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a github username.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the link for that github?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please link to the github.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What email address can people contact for more information?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please provide an email.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contact',
        message: 'Any further instructions for contacting you about the project?'
    }
];

// write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'README created!'
            })
        })
    })
}

// function to initialize app
function init() {
    return inquirer.prompt(questions)
    // sends info to generate the markdown
    .then(projectData => {
        return generateMarkdown(projectData)
    })
    // sends markdown to create a file
    .then(readMeData => {
        return writeToFile('./dist/README.md', readMeData)
    })
    // states completion
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err);
    })
}

// Function call to initialize app
init();
