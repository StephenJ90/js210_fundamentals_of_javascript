// JS210 - Small Problems > Easy 3


// When Will I Retire?
// -------------------
/*
Build a program that logs when the user will retire and how many more 
years the user has to work until retirement.

Example:

What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!
*/

let rlSync = require('readline-sync');

let age = Number(rlSync.question('What is your age? '));
let retirementAge = Number(rlSync.question('At what age would you like to retire? '));

let today = new Date();
let currentYear = today.getFullYear();
let workingYearsLeft = retirementAge - age;
let retirementYear = currentYear + workingYearsLeft;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}.`)
console.log(`You only have ${workingYearsLeft} years of work to go!`);