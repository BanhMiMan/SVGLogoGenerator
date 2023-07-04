const Circle = require('./Circle.js');
const Square = require('./Square.js');
const Triangle = require('./Triangle.js');

function setShape(response) {
    // If choice is Circle sets shape as circle
    if (response.shape === 'Circle') {
        let userShape = new Circle (response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }
    // If choice is Square sets shape as square
    if (response.shape === 'Square') {
        let userShape = new Square (response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }
    // If choice is Triangle sets shape as triangle
    if (response.shape === 'Triangle') {
        let userShape = new Triangle (response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }
};

module.exports = setShape;