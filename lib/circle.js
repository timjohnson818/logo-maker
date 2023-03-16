const Shape = require('./shapes.js');

class Circle extends Shape{
    constructor(text, color) {
        super(text, color);  
    }
    render(){
        const svgString = '<svg version = "1.1" width = "300" height = "200" xmls = "http://www.w3.org/2000/svg"> <circle cx = "150" cy = "100" r = "80" fill = "' + this.color + '" />'+
        '<text x="150" y="125" front-size="60" text-anchor="middle" fill = "white">'+text+'</text>' 
    }

}

module.exports = Circle;