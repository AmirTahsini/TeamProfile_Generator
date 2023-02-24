const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const generateTeam = require('./src/generateTeam')
const {writeFile} = require('fs').promises;
teamArray = [];

function createTeam() {
    inquirer.prompt ([
        {
            type: "list",
            name: "action",
            message: "What would you like to do?",
            choices: [
                "Add Engineer",
                "Add Intern",
                "Add Manager",
                "Finalize Team"
            ]
        }
    ])
    .then(answers => {
      if(answers.action === 'Add Engineer') {
        newEngineer();
      } 
      else if(answers.action === 'Add Intern') {
        newIntern();
      }
      else if(answers.action === 'Add Manager') {
        newManager();
      }
      else if(answers.action === 'Finalize Team') {
        writeFile('./dist/index.html', generateTeam(teamArray)).then(() => console.log('HTML file succesfully created'))
        .catch((err) => console.error(err));
      }
    })
}

function newManager() {
    inquirer.prompt ([
      
      {
        type: "input",
        name: "managerName",
        message: "What is the manager's name?"
      },
  
      {
        type: "input",
        name: "managerId",
        message: "What is the manager's employee ID?"
      },
  
      {
        type: "input",
        name: "managerEmail",
        message: "What is the manager's email address?"
      },
  
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the manager's office number?"
      }
  
    ]).then(answers => {
      const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
      teamArray.push(manager);
      createTeam();
    });
  
  }
  
  
  function newEngineer() {
      inquirer.prompt([
        
        {
          type: "input",
          name: "engineerName",
          message: "What is the engineer's name?"
        },
  
        {
          type: "input",
          name: "engineerId",
          message: "What is the engineer's employee ID?" 
        },
  
        {
          type: "input",
          name: "engineerEmail",
          message: "What is the engineer's email address?"
        },
  
        {
          type: "input",
          name: "engineerGithub",
          message: "What is the engineer's GitHub username?"
        }
  
      ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        teamArray.push(engineer);
        createTeam();
      });
  
    }
  
    function newIntern() {
      inquirer.prompt([
        
        {
          type: "input",
          name: "internName",
          message: "What is the intern's name?"
        },
  
        {
          type: "input",
          name: "internId",
          message: "What is the intern's employee ID?" 
        },
  
        {
          type: "input",
          name: "internEmail",
          message: "What is the intern's email address?"
        },
  
        {
          type: "input",
          name: "internSchool",
          message: "What school does the intern attend?"
        }
  
      ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        teamArray.push(intern);
        createTeam();
      });
  
    }

    createTeam();