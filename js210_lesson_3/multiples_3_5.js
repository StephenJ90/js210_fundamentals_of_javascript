// JS210 Fundamentals of JavaScript for Programmers > Practice Problems: Logic and Flow Control

/*
Multiples of 3 and 5

Write a function that logs the integers from 1 to 100 (inclusive) that are multiples of
either 3 or 5. If the number is divisible by both 3 and 5, append an "!" to the number.
*/

function multiplesOfThreeAndFive() {
  for (let number = 1; number <= 100; number++) {
    if (number % 3 === 0 && number % 5 === 0) {
      console.log(String(number) + '!');
    } else if (number % 3 === 0) {
      console.log(String(number));
    } else if (number % 5 === 0) {
      console.log(String(number));
    } else {
      continue;
    }
  }
}

multiplesOfThreeAndFive();

// LS Solution

const multiplesOfThreeAndFive = function() {
  for (let number = 1; number <= 100; number += 1) {
    if (number % 3 === 0 && number % 5 === 0) {
      console.log(String(number) + '!');
    } else if (number % 3 === 0 || number % 5 === 0) {
      console.log(String(number));
    }
  }
}

/*

*/