// Arithmetic Integer

/*
Write a program that prompts the user for two positive integers, and then prints the 
results of the following operations on those two numbers: addition, subtraction, 
product, quotient, remainder, and power. Do not worry about validating the input.
*/

// ==> Enter the first number:
// 23
// ==> Enter the second number:
// 17
// ==> 23 + 17 = 40
// ==> 23 - 17 = 6
// ==> 23 * 17 = 391
// ==> 23 / 17 = 1
// ==> 23 % 17 = 6
// ==> 23 ** 17 = 1.4105003956066297e+23

// Response: Works in Browser console

let firstNumber = Number(prompt('Enter the first number:'));
let secondNumber = Number(prompt('Enter the second number:'));

console.log(firstNumber + secondNumber);
console.log(firstNumber - secondNumber);
console.log(firstNumber * secondNumber);
console.log(firstNumber / secondNumber);
console.log(firstNumber % secondNumber);
console.log(firstNumber ** secondNumber);

// LS Response: Works in node

const readlineSync = require("readline-sync");

console.log("Enter the first number:");
let firstNumber = Number(readlineSync.prompt());
console.log("Enter the second number:");
let secondNumber = Number(readlineSync.prompt());

console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
console.log(`${firstNumber} / ${secondNumber} = ${Math.floor(firstNumber / secondNumber)}`);
console.log(`${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
console.log(
  `${firstNumber} ** ${secondNumber} = ${Math.pow(firstNumber, secondNumber)}`
);