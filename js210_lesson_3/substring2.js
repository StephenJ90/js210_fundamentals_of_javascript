// JS210 Fundamentals of JavaScript for Programmers > Practice Problems: Logic and Flow Control

/*
Substring (2)
-------------
This practice problem is similar to the previous one. This time though, both arguments are indices 
of the provided string. The following rules apply:

- If both start and end are positive integers, start is less than end, and both are within the boundary 
of the string, return the substring from the start index (inclusive), to the end index (NOT inclusive).
- If the value of start is greater than end, swap the values of the two, then return the substring as 
described above.
- If start is equal to end, return an empty string.
- If end is omitted, the end variable inside the function isundefined. Return the substring starting at 
position start up through (and including) the end of the string.
- If either start or end is less than 0 or NaN, treat it as 0.
- If either start or end is greater than the length of the string, treat it as equal to the string length.

Examples:

function substring(string, start, end) {
  // …
}

let string = 'hello world';

substring(string, 2, 4);    // "ll"
substring(string, 4, 2);    // "ll"
substring(string, 0, -1);   // ""
substring(string, 2);       // "llo world"
substring(string, 'a');     // "hello world"
substring(string, 8, 20);   // "rld"

PEDAC
-----

Problem:

Return a substring of string that begins from the start index in the string to
end index in the string.

Rules:
  Explicit
    - if an input integer is < 0 or NAN, treat it as 0
    - if both integer inputs are positive, make sure start < end
    - if they equal to each other, return en empty string
    - if end is undefined, return the substring from start to end of string
    - if either start or end is > string length, assign it === to string length

Algorithm:
I need to have a few conditionals to determine the values of start and end
and if they need reassignment. Let's take care of the first case first where
conditions are ideal and go from there.

substring(string, 2, 4)
- declare a variable to hold the substring
- loop through the input string beginning at 'start' index
- concatenate each character to the substring
- break out of the loop when the counter is one less than the 'end' value
- log the substring

We need to update the function to account for if start > end
substring(string, 4, 2);
- add a conditional before the loop
- if start if > end
  - declare a variable to hold the start value
  - put start = end
  - end = that is holds start value

Next step is to consider if end < 0 and in which we return an empty
string.
substring(string, 0, -1);
- set a conditional that if end < 0 an empty string is logged.

Consider if no argument is provided for the end parameter.
substring(string, 2);
- if end === undefined set end to equal the string length

Consider if start is NAN
substring(string, 'a');
- if string[start] === undefined
  - start = 0

Consider if end > string length
substring(string, 8, 20);
- if end > string.length
  - end = string.length
*/

function substring(string, start, end) {
  let substring = ''

  if (string[start] === undefined || start < 0) {
    start = 0;
  }

  if (end === undefined || end > string.length) {
    end = string.length
  }

  if (end < 0) {
    return '';
  }

  if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  }

  for (let index = start; index < end; index += 1) {
    substring += string[index];
  }

  return substring;
}

let string = 'hello world';

substring(string, 2, 4);    // "ll"
substring(string, 4, 2);    // "ll"
substring(string, 0, -1);   // ""
substring(string, 2);       // "llo world"
substring(string, 'a');     // "hello world"
substring(string, 8, 20);   // "rld"

// LS Solution:
// My solution only accounts for the examples shown. LS also accounts for
// examples that could occur but examples are not provided

function substring(string, start, end) {
  if (end === undefined) {
    end = string.length;
  }

  if (start < 0 || Number.isNaN(start)) {
    start = 0;
  }

  if (end < 0 || Number.isNaN(end)) {
    end = 0;
  }

  if (start > end) {
    [start, end] = [end, start];
  }

  if (start > string.length) {
    start = string.length;
  }

  if (end > string.length) {
    end = string.length;
  }

  let newString = '';
  for (let index = start; index < end; index += 1) {
    newString += string[index];
  }

  return newString;
}