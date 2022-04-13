const inquirer = require('inquirer'); //inquirer
const Manager = require('./lib/manager'); // class manager
const Engineer = require('./lib/engineer'); // class engineer
const Intern = require('./lib/intern'); // class intern
const site = require('./site');
const path = require('path');
const fs = require('fs');
const OUTPUT_DIR = path.resolve(__dirname, 'output'); // output 
const outputPath = path.join(OUTPUT_DIR, 'team.html'); // site
const teamMembers = []; // team

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'List your name.',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name before you continue');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter your ID number.',
            validate: employeeId => {
                if(employeeId) {
                    return true;
                } else {
                    console.log('Please enter your employee ID before you continue');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email',
            validate: email => {
                if(email) {
                    return true;
                } else {
                    console.log('Please enter your email before you continue');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter your office number',
            validate: officeNumber => {
                if(officeNumber) {
                    return true;
                } else {
                    console.log('Please enter your office number before you continue');
                    return false;
                }
            }
        },
    ]).then(answers => {
        // console.log(answers);
        const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        promptMenu();
    })
};

const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Please select which role you would like to add.',
            choices: ['Engineer', 'Intern', 'Finished building team']
        }
    ]) 
    .then (userChoice => {
        console.log(userChoice);
        switch (userChoice.menu) {
            case "Engineer":
                promptEngineer();
                break;
            case 'Intern':
                promptIntern();
                break;
            default:
                buildTeam();
        }
    })
};

const promptEngineer = () => {
    console.log('Add a new engineer');
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Name of engineer',
            validate: engineerName => {
                if (engineerName) {
                    return true;
                } else {
                    console.log('Please enter name of engineer.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter your ID number.',
            validate: employeeId => {
                if(employeeId) {
                    return true;
                } else {
                    console.log('Please enter your employee ID before you continue');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email',
            validate: email => {
                if(email) {
                    return true;
                } else {
                    console.log('Please enter your email before you continue');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'Enter your github username',
            validate: githubUsername => {
                if(githubUsername) {
                    return true;
                } else {
                    console.log('Please enter your github username before you continue');
                    return false;
                }
            }
        },
    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.githubUsername);
        teamMembers.push(engineer);
        promptMenu();
    }) 
};

const promptIntern = () => {
    console.log('Add a new Intern');
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Name of intern',
            validate: internName => {
                if (internName) {
                    return true;
                } else {
                    console.log('Please enter name of intern.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter your ID number.',
            validate: employeeId => {
                if(employeeId) {
                    return true;
                } else {
                    console.log('Please enter your employee ID before you continue');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email',
            validate: email => {
                if(email) {
                    return true;
                } else {
                    console.log('Please enter your email before you continue');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter your school',
            validate: school => {
                if(school) {
                    return true;
                } else {
                    console.log('Please enter your school before you continue');
                    return false;
                }
            }
        },
    ]).then(answers => {
        console.log(answers);
        const intern = new Intern(answers.name, answers.email, answers.employeeId, answers.school);
        teamMembers.push(intern);
        promptMenu();
    })
};

const buildTeam = () => {
    console.log('buildTeam',teamMembers);
    if (!fs.existsSync(OUTPUT_DIR)) { //check if files exist
        fs.mkdirSync(OUTPUT_DIR) // if not make a new file
    }
    fs.writeFileSync(outputPath, site(teamMembers), "utf-8"); // makes the outpath 
}

promptManager();
