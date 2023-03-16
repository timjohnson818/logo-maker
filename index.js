const {Circle,Square,Triangle} = require('./lib/shapes.js');
const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'list',
            name: 'shape',
            message: "Choose a shape:",
            choices: ['Square', 'Circle', 'Triangle'],
        },

        {
            type: 'input',
            name: 'text',
            message: 'What would you like it to say?',
        },

        {
            type: 'input',
            name: 'color',
            message: 'What color would you like your logo to be?',
        },
    ])
    .then((data) => {
        
        switch(data.shape){
            case 'Circle':
                let circ = new Circle;
                circ.setColor(data.color);
                circ.setText(data.text);
                return fs.writeFile('logo.svg',circ.render(),(err) => err ? console.error(err) : console.log('Success!'));
                break;
            
            case 'Triangle':
                let tri = new Triangle;
                tri.setColor(data.color);
                tri.setText(data.text);
                return fs.writeFile('logo.svg',tri.render(),(err) => err ? console.error(err) : console.log('Success!'));
                break;

            case 'Square':
                let square = new Square;
                square.setColor(data.color);
                square.setText(data.text);
                return fs.writeFile('logo.svg',square.render(),(err) => err ? console.error(err) : console.log('Success!')); 
                break;        
        }

        
      });

    