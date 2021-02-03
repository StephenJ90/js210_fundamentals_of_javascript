// JS210 - Small Problems > Easy 1

/*
How Big is the Room
-------------------

Build a program that asks the user to enter the length and width of a room in meters, 
and then logs the area of the room to the console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. Use the readlineSync.prompt method 
to collect user input.

Example:
--------

Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet).
*/

let readlineSync = require('readline-sync');

const SQMETERS_TO_SQFEET = 10.7639;

let length = readlineSync.question('Enter the length of the room in meters: ');
let width = readlineSync.question('Enter the width of the room in meters: ');

let areaInMeters = length * width;
let areaInFeet = areaInMeters * SQMETERS_TO_SQFEET
console.log(`The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet)`);

// LS Solution:

let readlineSync = require("readline-sync");

const SQMETERS_TO_SQFEET = 10.7639;

console.log("Enter the length of the room in meters:");
let length = readlineSync.prompt();
length = parseInt(length, 10);

console.log("Enter the width of the room in meters:");
let width = readlineSync.prompt();
width = parseInt(width, 10);

let areaInMeters = (length * width);
let areaInFeet = (areaInMeters * SQMETERS_TO_SQFEET);

console.log(
  `The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet).`
);

// Further Exploration:
// Modify the program so that it asks the user for the input type (meters or feet). Compute for 
// the area accordingly, and log it and its conversion in parentheses.
// I'll modify LS's Solution:

let readlineSync = require("readline-sync");

const SQMETERS_TO_SQFEET = 10.7639;
const SQFEET_TO_SQMETERS = 0.092903;

console.log('Enter Unit of Measurement (meters or feet):')
let unitType = readlineSync.prompt();

if (unitType !== 'meters' && unitType !== 'feet') {
  console.log('Error: Invalid Unit Type');
  return;
}

console.log(`Enter the length of the room in ${unitType}: `);
let length = readlineSync.prompt();
length = parseInt(length, 10);

console.log(`Enter the width of the room in ${unitType}: `);
let width = readlineSync.prompt();
width = parseInt(width, 10);

let area = (length * width);
let areaInFeet = area * SQMETERS_TO_SQFEET
let areaInMeters = area * SQFEET_TO_SQMETERS

if (unitType === 'meters') {
  console.log(
  `The area of the room is ${area.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet).`
  );
} else {
  console.log(
  `The area of the room is ${area.toFixed(2)} square feet (${areaInMeters.toFixed(2)} square meters).`
  );
}