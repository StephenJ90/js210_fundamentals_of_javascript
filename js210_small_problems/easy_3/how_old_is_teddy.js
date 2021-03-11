// JS210 - Small Problems > Easy 3

// How Old is Teddy?
// -----------------

/*
Build a program that randomly generates Teddy's age, and logs it to the console. 
Have the age be a random number between 20 and 200 (inclusive).

Example Output:

Teddy is 69 years old!
*/

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let age = 0;
const maxAge = 200;

while (age <= 20) {
  age = getRandomInt(maxAge);
}

console.log(`Teddy is ${age} years old!`);

// LS Solution

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const age = randomBetween(200, 20);
console.log(`Teddy is ${age} years old!`);

// Futher Exploration

function randomBetween(min, max) {
  if (min > max) {
    [max, min] = [min, max];
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}