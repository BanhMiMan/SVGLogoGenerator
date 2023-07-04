(async () => {
    const inquirer = await import('inquirer').then((module) => module.default);
const fs = require('fs');
const questions = require('./lib/questions.js');
const fileName = "./examples/logo.svg";
const setShape = require('./lib/setShape.js')



 //Function that generates the svg logo
 function createLogo(answers) {
  const svg = setShape(answers);
  fs.writeFile(fileName, svg, ()=> console.log('Generated logo.svg'));
}

 //Initializes the app 
 function init() {
  inquirer .prompt(questions).then((answers) => {
      createLogo(answers);
      })
  .catch(err => {
          console.log(err)
      });
}
 init();
})();

