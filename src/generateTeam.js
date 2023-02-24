const generateLastProps = (employee) => {

    if(employee.getRole() == "Manager") {
        return `<h2>Office Number: ${employee.getOfficeNumber()}</h2>`
    }
    if(employee.getRole() == "Engineer") {
        return `Github: ${employee.getGithub()}`
    }
    if(employee.getRole() == "Intern") {
        return `School: ${employee.getSchool()}`
    }
}

const generateTeam = (teamArray) => {
     return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
        <link rel="stylesheet" type="text/css" href="style.css" /> 
    </head>
    <header>
        <h1>Team Profile Generator</h1>
    <body>
     ${teamArray.map((employee) => {
        return `
        <div class="container-fluid">
         <div class="row">
          <div class="col">
          <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${employee.getName()}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${employee.getRole()}</h6>
            <ul class="list-group list-group-flush">
             <li class="list-group-item">${employee.getId()}</li>
             <li class="list-group-item"><a href = "mailto: ${employee.getEmail()}">${employee.getEmail()}</a></li>
             <li class="list-group-item">${generateLastProps(employee)}</li>
            </ul>
          </div>
          </div>
          </div>
         </div>
       </div>`
          })
        }
    </body>
    </html>`
};

module.exports = generateTeam;
