// JS210 Fundamentals of JavaScript for Programmers > Practice Problems: Logic and Flow Control

/*
Substring (1)
-------------

Write a function that returns a substring of a string based on a starting index and length.

Examples:

function substr(string, start, length) {
  // …
}

let string = 'hello world';

substr(string, 2, 4);      // "llo "
substr(string, -3, 2);     // "rl"
substr(string, 8, 20);     // "rld"
substr(string, 0, -20);    // ""
substr(string, 0, 0);      // ""

- The start argument is the starting index. If negative, treat it as strLength + start where 
strLength is the length of the string. For example, if start is -3, treat it as strLength - 3.
- The length argument is the maximum length of the desired substring. If length exceeds the number
of characters available, just use the available characters.

You may use the square brackets ([]) to access a character by index (as shown below), and the length 
property to find the string length. However, you may not use any other properties or methods from 
JavaScript's built-in String class.

PEDAC
-----
Problem:
--------
Find the string that begins at start index of the string and ends at length
indices from the start index

Rules:
  Explicit
    - if start argument < 0, treat start as the length of the input string
    minus the start argument value
    - if the length argument is more than the available number of characters
    available, use the max length of characters available for length value
  Implicit
    - if length argument is <= 0, return ''

Algorithm:
----------
- check to see if length is less <= 0
  - return '' if it is
- declare new variable to hold new substring
- iterate through input string characters starting start index and break
when counter = start + length - 1
- add the current character at each index to the substring for each iteration
*/

function substr(string, start, length) {
  if (start < 0) {
    start = string.length + start;
  }

  if (length <= 0) {
    return '';
  } else if (length > string.length) {
    length = string.length - start;
  }

  let substring = '';
  for (let index = start; index < start + length; index += 1) {
    substring += string[index];
  }

  return substring;
}

let string = 'hello world';

substr(string, 2, 4);      // "llo "
substr(string, -3, 2);     // "rl"
substr(string, 8, 20);     // "rld"
substr(string, 0, -20);    // ""
substr(string, 0, 0);      // ""

// LS Solution:

function substr(string, start, length) {
  if (start < 0) {
    start = string.length + start;
  }

  let newString = '';
  for (let counter = 0; counter < length; counter += 1) {
    let index = start + counter;

    if (string[index] === undefined) {
      break;
    }

    newString += string[index];
  }

  return newString;
}