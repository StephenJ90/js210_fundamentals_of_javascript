// JS210 - Small Problems > Easy 1

/*
Sum or Product of Consecutive Integers
--------------------------------------

Write a program that asks the user to enter an integer greater than 0,
then asks if the user wants to determine the sum or the product of all
numbers between 1 and the entered integer, inclusive.

Examples:

Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.

Please enter an integer greater than 0: 6
Enter "s" to compute the sum, or "p" to compute the product. p

The product of the integers between 1 and 6 is 720.

PEDAC
-----

Problem:
--------
Take an input integer and compute the sum or product of every integer from
0 up to the input integer.

Rules:
  Explicit: input must be > 0

Algorithm:
----------
- prompt the user for an integer > 0
- prompt the user if they'd like to compute the sum or product
- if sum, iterate from 0 up to the input integer
  - starting at 0, add each index to the total sum
  - upon completion of iteration output the sum
- if product, complete the same steps for sum except use multiplication
*/

let readlineSync = require('readline-sync');

let numberInput = parseFloat(readlineSync.question('Please enter an integer greater than 5: '));

if (numberInput < 1) {
  console.log('Error: Number must be greater than 0!');
  return;
}

let operation = readlineSync.question('Enter "s" to compute the sum, or "p" to compute the product: ')
let computeSum = operation === 's' ? true : false;
operation = operation === 's' ? 'sum' : 'product'; // used to for string interpolation in final output

let sum = 0;
let product = 1;


for (let index = 1; index <= numberInput; index += 1) {
  if (computeSum) {
    sum += index;
  } else {
    product *= index;
  }
}

outputTotal = sum ? sum : product; // used to determine what variable will be used in output to console

console.log(`The ${operation} of the integers between 1 and ${numberInput} is ${outputTotal}.`);

// LS Solution:

function computeSum(number) {
  let total = 0;

  for (let i = 1; i <= number; i += 1) {
    total += i;
  }

  return total;
}

function computeProduct(number) {
  let total = 1;

  for (let i = 1; i <= number; i += 1) {
    total *= i;
  }

  return total;
}

const number = parseInt(prompt('Please enter an integer greater than 0'), 10);
const operation = prompt('Enter "s" to compute the sum, or "p" to compute the product.');

if (operation === 's') {
  let sum = String(computeSum(number));
  console.log(`The sum of the integers between 1 and ${String(number)} is ${sum}.`);
} else if (operation === 'p') {
  let product = String(computeProduct(number));
  console.log(`The product of the integers between 1 and ${String(number)} is ${product}.`);
} else {
  console.log('Oops. Unknown operation.');
}
