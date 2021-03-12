// JS210 - Small Problems > Easy 3

// Searching 101
// -------------

/*
Write a program that solicits six numbers from the user, then logs a message 
that describes whether or not the sixth number appears amongst the first five 
numbers.

Examples:

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in [25, 15, 20, 17, 23].

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in [25, 15, 20, 17, 23].
*/

function addSuffix(counter) {
  let suffix = 'th';

  if (counter === 1) {
    suffix = 'st';
  } else if (counter === 2) {
    suffix = 'nd';
  } else if (counter === 3) {
    suffix = 'rd';
  }

  return suffix;
}

let readlineSync = require('readline-sync');
let counter = 1;
let array = [];

while (counter <= 5) {
  currentNumber = counter + addSuffix(counter);
  let userInput = readlineSync.question(`Enter the ${currentNumber} number: `);
  array.push(userInput);
  counter += 1;
}

userInput = readlineSync.question(`Enter the last number: `);

if (array.includes(userInput)) {
  console.log(`The number ${userInput} appears in [${array.join(', ')}].`);
} else {
  console.log(`The number ${userInput} does not appear in [${array.join(', ')}].`)
}


// LS Solution:

const numbers = [];

numbers.push(prompt('Enter the 1st number:'));
numbers.push(prompt('Enter the 2nd number:'));
numbers.push(prompt('Enter the 3rd number:'));
numbers.push(prompt('Enter the 4th number:'));
numbers.push(prompt('Enter the 5th number:'));

let lastNumber = prompt('Enter the last number:');

if (numbers.includes(lastNumber)) {
  console.log(`The number ${lastNumber} appears in [${numbers.join(', ')}].`);
} else {
  console.log(`The number ${lastNumber} does not appear in [${numbers.join(', ')}].`);
}


// Further Exploration:
/*
What if the problem was looking for a number that satisfies some condition (e.g., a number 
greater than 25), instead of a specific number? Would the current solution still work? Why 
or why not? Think about this first before scrolling down.

Possible Solution:
*/

function isIncluded(arr, val) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > val) {
      return true;
    }
  }

  return false;
}

// Explore the Array.prototype.some method and see if you can alter the above
// solution.

function isIncluded(arr, val) {
  return arr.some(element => element > val);
}