const Shapes = require('./lib/shapes.js');
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
        console.log(data);
      });