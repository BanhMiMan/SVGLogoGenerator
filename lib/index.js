const inquirer = require('inquirer');
const fs = require('fs');

const Circle = require('./Circle.js');
const Square = require('./Square.js');
const Triangle = require('./Triangle.js');

function setShape(response) {

    if (response.shape === 'Circle') {
        let userShape = new Circle (response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }

    if (response.shape === 'Square') {
        let userShape = new Square (response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }

    if (response.shape === 'Triangle') {
        let userShape = new Triangle (response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }
};


const questions = [
    //Text Entry
    {
      name: 'text',
      type: 'input',
      message: 'Please enter 1-3 characters (3 character max)',
      //Makes sure only max of 3 characters
      validate: (answer) => {
        if (answer.length > 3) {
            return console.log("Text must be three characters or less! Please try again.");
        }
        return true;
      }
    },


    //Pick text color choice using keyword/hexadecimal
    {
      name: 'textColorChoice',
      type: 'list',
      message: 'What is the color of the text? Choose a color format: ',
      choices: ['color keyword', 'hexadecimal']
    },
      // Keyword for Text Color
      {
       name: "textColor",
       type: "input",
       message: "Enter the text color keyword",
       when: (answers) => {
           if(answers.textColorChoice === 'color keyword') {
               return true;
           }
           return false;
       },
       validate: (answer) => {
           let answerLowercase = answer.toLowerCase();
           for (var i = 0, len = colorKeywords.length; i < len; ++i) {
               if (answerLowercase.indexOf(colorKeywords[i]) != -1) {
               return true;
           }}
           return console.log("\n Please enter a valid color keyword")
       }
       },
      // Hexadecimal for Text Color
       {
       name: "textColor",
       type: "input",
       message: "Enter the text hexadecimal number (#CCCCCC)",
       when: (answers) => {
           if(answers.textColorChoice === 'hexadecimal') {
               return true;
           }
           return false;
       },
       validate: (answer) => {
           const hexRegEx = '^#[A-Fa-f0-9]{6}$'
           if (!answer.match(hexRegEx)) {
               return console.log("\n Please enter a valid hexadecimal")
           }
           return true;
       }
       },



    //Shape choice
    {
      name: 'logoShape',
      type: 'list',
      message: 'What is the shape of your logo?',
      choices: ['Circle', 'Square', 'Triangle'],
    },



    //Pick shape color choice using keyword/hexadecimal
    {
      name: 'shapeColorChoice',
      type: 'list',
      message: 'What is the color of the shape? Choose a color format: ',
      choices: ['color keyword', 'hexadecimal']
    },
      // Keyword for Shape Color
      {
       name: "shapeColor",
       type: "input",
       message: "Enter the shape color keyword",
       // Returns false if not color keyword true if answer is color keyword
       when: (answers) => {
          if(answers.shapeColorChoice === 'color keyword') {
              return true;
          }
          return false;
       },
       //Validates answer is a color keyword using indexOfcolorKeywords
       validate: (answer) => {
           let answerLowercase = answer.toLowerCase();
           for (var i = 0, len = colorKeywords.length; i < len; ++i) {
               if (answerLowercase.indexOf(colorKeywords[i]) != -1) {
               return true;
           }}
           return console.log("Please enter a valid color keyword")
       }
       },
       // Hexadecimal for Shape Color
       {
       name: "shapeColor",
       type: "input",
       message: "Enter the shape hexadecimal number (#CCCCCC)",
       // Returns false if not hexadecicmal true if answer is hexadecimal
       when: (answers) => {
           if(answers.shapeColorChoice === 'hexadecimal') {
               return true;
           }
           return false;
       },
       //Validates answer is a hexadecimal using hexRegEx
       validate: (answer) => {
           const hexRegEx = '^#[A-Fa-f0-9]{6}$'
           if (!answer.match(hexRegEx)) {
               return console.log("Please enter a valid hexadecimal")
           }
           return true;
        }
        },
  ]


 //Function that generates the svg logo
 function createLogo(response) {
  const svg = setShape(response);
  fs.writeFile(fileName, svg, ()=> console.log('Generated logo.svg'));
}

 // Initializes the app 
 function init() {
  inquirer 
  .prompt(questions)
  .then((response) => {
      createLogo(response);
      })
  .catch(err => {
          console.log(err)
      });
}


 init();