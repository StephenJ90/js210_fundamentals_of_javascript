// JS210 - Small Problems > Easy 2

/*
Stringy Strings
---------------

Write a function that takes one argument, a positive integer, and returns a string
of alternating '1's and '0's, always starting with a '1'. The length of the string 
should match the given integer.

Examples:

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"

PEDAC
-----

Problem:
--------

Take an integer and output as many 1's and 0's as are equal to the input
integer always starting with 1 as the first character in the output. 

Algorithm:
----------

- declare a variable that will hold the string output
- create a for loop from 1 up to the integer
  - on each iteration determine if the current number is odd or even
  - if it is odd add a '1' to the output string
  - if it is even add a '0' to the output string
- log the string to the console.
*/

let stringy = function(number) {
  let stringyNumbers = '';

  for (let currentNumber = 1; currentNumber <= number; currentNumber += 1) {
    if (currentNumber % 2 === 1) {
      stringyNumbers += '1';
    } else {
      stringyNumbers += '0';
    }
  }

  console.log(stringyNumbers);
  return stringyNumbers;
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"

// LS Solution:

function stringy(size) {
  let result = '';

  for (let i = 0; i < size; i += 1) {
    if (i % 2 === 0) {
      result += '1';
    } else {
      result += '0';
    }
  }

  return result;
}