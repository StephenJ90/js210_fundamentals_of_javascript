// JS210 - Small Problems > Easy 1

/*
Tip Calculator
--------------

Create a simple tip calculator. The program should prompt for a bill amount and
a tip rate. The program must compute the tip, and then log both the tip and the
total amount of the bill to the console. You can ignore input validation and assume 
that the user will put in numbers.

Example:

What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00

PEDAC
-----

Problem:
--------

Prompt the user for a bill amount and tip rate and then output the tip amount
and total amount to the console.

Algorithm:
----------
user input will be initially stored as a string, convert input to number
- prompt user for bill amount and assign amount to variable
- prompt user for tip percentage assign percentage to variable
- calculate tip amount based on percentage and bill amount
- output tip amount
- output bill amount + tip
*/

let readlineSync = require('readline-sync');

console.log('What is the bill?');
let billAmount = Number(readlineSync.prompt());

console.log('What is the tip percentage?');
let tipPercentage = Number(readlineSync.prompt()) / 100;

let tipAmount = (billAmount * tipPercentage);
let totalBillAmount = (billAmount + tipAmount);

console.log(`The tip is $${tipAmount.toFixed(2)}`);
console.log(`The total is $${totalBillAmount.toFixed(2)}`);

// LS Solution:
// This will only work in a browser. prompt() requires readline-sync.

const bill = parseFloat(prompt('What is the bill?'));
const percentage = parseFloat(prompt('What is the percentage?'));

const tip = bill * (percentage / 100);
const total = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);
