#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1, //Base currency
    PKR: 278.10,
    INR: 83.44,
    SAR: 3.75,
    TL: 32.26,
    EUR: 0.92
};
let userAnswer = await inquirer.prompt([
    {
        name: "From",
        message: "Enter Currency From",
        type: "list",
        choices: ["USD", "PKR", "INR", "SAR", "TL", "EUR"]
    },
    {
        name: "To",
        message: "Enter Currency To",
        type: "list",
        choices: ["USD", "PKR", "INR", "SAR", "TL", "EUR"]
    },
    {
        name: "Amount",
        message: "Enter Your Amount",
        type: "number"
    }
]);
let fromAmount = currency[userAnswer.From];
let toAmount = currency[userAnswer.To];
let amount = userAnswer.Amount;
let baseAmount = amount / fromAmount;
let convertedAmount = toAmount * baseAmount;
console.log(convertedAmount.toFixed(2));
