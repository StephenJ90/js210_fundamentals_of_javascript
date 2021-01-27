// JS210 Fundamentals of JavaScript for Programmers > Practice Problems: Logic and Flow Control

/*
Repeating Strings
-----------------

Implement a function that takes a string and a number times as arguments. The function 
should return the string repeated times number of times. If times is not a number, return
undefined. If it is a negative number, return undefined also. If times is 0, return an 
empty string. You may ignore the possibility that times is a number that isn't an integer.

function repeat(string, times) {
  // …
}

repeat('abc', 1);       // "abc"
repeat('abc', 2);       // "abcabc"
repeat('abc', -1);      // undefined
repeat('abc', 0);       // ""
repeat('abc', 'a');     // undefined
repeat('abc', false);   // undefined
repeat('abc', null);    // undefined
repeat('abc', '  ');    // undefined

You may concatenate strings, but you may not use any other properties or methods from JavaScript's 
built-in String class.

PEDAC
-----

Problem:
--------
Take a input string and an integer, concatenate the string the number of times
that is indicated by the integer. If the variable representing the integer is
not an integer, return undefined.

Rules:
  Implicit
    - all input strings are lowercase
    - only alphabetical characters are used for input string
  Explicit
    - if the times variable is not an integer, return undefined
    - if the times variable is less than 0, return undefined
    - if the times variable is equal to 0, return ""

Algorithm:
----------
- first check the times variable
  - if times is not an integer >= 0 then return undefined
- declare a new variable that will be the result of the concatenation
- enter a loop that will count down from the times variable
- on each iteration, concatenate the string with itself
- output the concatenated string after the loop ends
*/

function repeat(string, times) {
  if (!(times >= 0)) {
    return undefined;
  } else if (times === false || times === null) {
    return undefined;
  } else if (times === '  ') {
    return undefined;
  }

  let result = '';

  while (times >= 1) {
    result += string;
    times -= 1;
  }

  return result;
}

repeat('abc', 1);       // "abc"
repeat('abc', 2);       // "abcabc"
repeat('abc', -1);      // undefined
repeat('abc', 0);       // ""
repeat('abc', 'a');     // undefined
repeat('abc', false);   // undefined
repeat('abc', null);    // undefined
repeat('abc', '  ');    // undefined

// LS Solution:
// LS uses a function from the Integer Class: isInteger()

const isCount = value => Number.isInteger(value) && value >= 0;

function repeat(string, times) {
  if (!isCount(times)) {
    return undefined;
  }

  let repeated = '';
  for (let counter = 0; counter < times; counter += 1) {
    repeated += string;
  }

  return repeated;
}