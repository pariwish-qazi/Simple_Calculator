import inquirer from "inquirer";
import Chalk from "chalk";
const answer = await inquirer.prompt([
    { message: "Enter First Number:",
        type: "number",
        name: "firstNumber" },
    { message: "Enter Second Number:",
        type: "number",
        name: "secondNumber"
    },
    { message: "Select one of the Operator to perform Operation:",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Exponentiation"] }
]);
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else if (answer.operator === "Exponentiation") {
    console.log(answer.firstNumber ** answer.secondNumber);
}
else {
    console.log(Chalk.red("Invalid Operator!"));
}
