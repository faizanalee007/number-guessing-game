#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
let answer = await inquirer.prompt({
    message: "Guess the Number between 1 to 10: ",
    name: "userInput",
    type: "number",
});
if (answer.userInput === randomNumber) {
    console.log("\nCongratulations, You guessed the correct number!\n");
}
else {
    console.log("\nSorry, You guessed the wrong number.\nTRY AGAIN!\n");
}
