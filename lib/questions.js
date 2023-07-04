const colorKeywords = require('./colorKeywords.js')


const questions = [
    //Text Entry
    {
        name: 'text',
        message: 'What is the text? (three character maximum)',
        type: 'input',
        validate: (answer) => {
            if (answer.length > 3) {
                return console.log("\n Text must be three characters or less! Please try again");
            }
            return true;
        }
    },


    //Pick text color choice using keyword/hexadecimal
    {
        name: 'textColorChoice',
        message: 'What is the color of the text? Choose a color format: ',
        type: 'list',
        choices: ['color keyword', 'hexadecimal']
    },
      // Keyword for Text Color
      {
        type: "input",
        name: "textColor",
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
        type: "input",
        name: "textColor",
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
        name: 'shape',
        message: 'What is the shape of your logo?',
        type: 'list',
        choices: ['Circle', 'Square', 'Triangle'],
    },




    //Pick shape color choice using keyword/hexadecimal
    {
        name: 'shapeColorChoice',
        message: 'What is the color of the shape? Choose a color format: ',
        type: 'list',
        choices: ['color keyword', 'hexadecimal']
    },
      // Keyword for Shape Color
      {
        type: "input",
        name: "shapeColor",
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
        return console.log("\n Please enter a valid color keyword")
    }
},
       // Hexadecimal for Shape Color
       {
        type: "input",
        name: "shapeColor",
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
            return console.log("\n Please enter a valid hexadecimal")
        }
        return true;
    }
},
  ];

  module.exports = questions;