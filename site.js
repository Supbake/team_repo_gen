const Manager = require('./lib/manager'); // class manager
const Engineer = require('./lib/engineer'); // class engineer
const Intern = require('./lib/intern'); // class intern

const generateTeam = (team) => {
    console.log("generateTeam", team);

    const html = [];

    const generateManager = manager => {
        console.log(manager);
        const managerHtml =
            `<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="https://picsum.photos/200" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Manager</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Name: ${manager.name}</li>
          <li class="list-group-item">ID: ${manager.id}</li>
          <li class="list-group-item">Email: ${manager.email}</li>
          <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
        </ul>
        </div>`;
        html.push(managerHtml);
    }

    const generateEngineer = engineer => {
        console.log(engineer);
        const engineerHtml =
            `<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="https://picsum.photos/200" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Engineer</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Name: ${engineer.name}</li>
          <li class="list-group-item">ID: ${engineer.id}</li>
          <li class="list-group-item">Email: ${engineer.email}</li>
          <li class="list-group-item">GiHub: ${engineer.githubUsername}</li>
        </ul>
        </div>`;
        html.push(engineerHtml);
    }

    const generateIntern = intern => {
        console.log(intern);
        const internHtml =
            `<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="https://picsum.photos/200" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Intern</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Name: ${intern.name}</li>
          <li class="list-group-item">ID: ${intern.id}</li>
          <li class="list-group-item">Email: ${intern.email}</li>
          <li class="list-group-item">School: ${intern.school}</li>
        </ul>
        </div>`;
        html.push(internHtml);
    }
    //loop for all employees
    for (let i = 0; i < team.length; i++) {
        console.log(team[i])
        if (team[i].getRole() === "Manager") {
            generateManager(team[i]);
        }
        if (team[i].getRole() === "Engineer") {
            generateEngineer(team[i]);
        }
        if (team[i].getRole() === "Intern") {
            generateIntern(team[i]);
        }
    }
    console.log('html', html)
    return html.join('');
}


//exports html page
module.exports = team => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" 
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <title>Team Generator</title>
    </head>
    
    <body>
        <header>
            <h1>Your Team</h1>
        </header>
    
        <Main>
            ${generateTeam(team)}
        </Main>

        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    </body>
    
    </html>`
}