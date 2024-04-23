#! /usr/bin/env node

import inquirer from "inquirer";


// 1) Computer will generate a number 

// 2) User input for guessing number 

// 3) Compare user input with computer generated number and show results 

const randomNumber = Math.floor(Math.random()*1 +1);

const answers = await inquirer.prompt([
     {
       name: "userGuessedNumber",
       type: "number", 
       message: "Please Guess a Number",   
     },
]);

if (answers.userGuessedNumber === randomNumber ){
    console.log("CONGRATULATION !!! You Guessed Right Number.");
} else {
    console.log("Oooppss You Guessed Wrong Number !!!.");
}

console.log(" GAME OVER ..")