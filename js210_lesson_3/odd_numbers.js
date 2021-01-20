function logOddNumbers(number) {
  for (let i = 1; i <= number; i += 2) {
    console.log(i);
  }
}

logOddNumbers(19);

// LS Solution

function logOddNumbers(number) {
  for (let currentNumber = 1; currentNumber <= number; currentNumber += 1) {
    if (currentNumber % 2 === 1) {
      console.log(currentNumber);
    }
  }
}

// Further Exploration
/*
- You can remove the conditional inside the loop and increment currentNumber by 2 with each step,
instead of 1. How would you write code to do that?

- Instead of a conditional that checks for odd numbers, you can write a conditional that checks for
even numbers, but skips them with the continue statement. How would you write your code?
*/

// I implemented the first one in my original solution
// Here is my solution for the second exploration:

function logOddNumbers(number) {
  for (let currentNumber = 1; currentNumber <= number; currentNumber += 1) {
    if (currentNumber % 2 === 0) {
      continue;
    }

    console.log(currentNumber);
  }
}