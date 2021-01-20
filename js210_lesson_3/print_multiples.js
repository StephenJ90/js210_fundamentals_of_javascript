// JS210 Fundamentals of JavaScript for Programmers > Practice Problems: Logic and Flow Control

/*
Print Multiples

Write a function logMultiples that takes one argument number. It should log all multiples of 
the argument between 0 and 100 (inclusive) that are also odd numbers. Log the values in descending order.

You may assume that number is an integer between 0 and 100.
*/


const logMultiples = function(number) {
  let numberArray = [];
  for (i = 1; i * number <= 100; i++) {
    if ((i * number) % 2 === 1) {
      numberArray.push(i * number);
    }
  }

  for (index = numberArray.length - 1; index >= 0; index--) {
    console.log(numberArray[index]);
  }
}

logMultiples(17);

// LS Solution:

function logMultiples(number) {
  for (let candidate = 100; candidate >= number; candidate -= 1) {
    if (candidate % 2 === 1 && candidate % number === 0) {
      console.log(candidate);
    }
  }
}

// Further Exploration

function logMultiples(number) {
  let candidate = Math.floor(100 / number) * number;

  for (;candidate >= number; candidate--) {
    if (candidate % 2 === 1 && candidate % number === 0) {
      console.log(candidate);
    }
  }
}

// LS Solution:

function logMultiples(number) {
  let multiple = Math.floor(100 / number) * number;

  while (multiple > 0) {
    if (multiple % 2 === 1) {
      console.log(multiple);
    }

    multiple -= number;
  }
}

// Or:

function logMultiples(number) {
  for (let multiple = Math.floor(100 / number) * number; multiple > 0; multiple -= number) {
    if (multiple % 2 === 1) {
      console.log(multiple);
    }
  }
}

