#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "Enter your first number",
        type: "number",
        name: "first_Number",
    },
    {
        message: "Enter your second number",
        type: "number",
        name: "second_Number"
    },
    {
        message: "Select one of the operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    }
]);
if (answer.operator === "Addition") {
    console.log(answer.first_Number + answer.second_Number);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.first_Number - answer.second_Number);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.first_Number * answer.second_Number);
}
else if (answer.operator === "Division") {
    console.log(answer.first_Number / answer.second_Number);
}
else {
    console.log("Please select a valid operator");
}
