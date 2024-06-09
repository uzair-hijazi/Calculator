#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Pehla hindsa darj kijiye: ", type: "number", name: "firstNumber" },
  { message: "Dusra hindsa darj kijiye: ", type: "number", name: "secondNumber" },
  {
    message: "Baraye meherbani Operator ka intekhab kijiye",
    type: "list",
    name: "Operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);
if (answer.Operator === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.Operator === "Subtraction") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.Operator === "Multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.Operator === "Division") {
  console.log(answer.firstNumber / answer.secondNumber);
} else {
  console.log("Baraye meherbani durust Operator ka intekhab kijiye");
  }
