// JS210 Fundamentals of JavaScript for Programmers > Practice Problems: Logic and Flow Control

/*
Splitting a String
------------------

Write a function that takes two arguments:

- a string to be split
- a delimiter character
The function logs the split strings to the console, as shown below:

function splitString(string, delimiter) {
  // …
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello


PEDAC:
------

Problem:
--------
Split an input string by the input delimiter and output each split string.
If no delimiter is given, return an error message stating so. 

Rules:
  implicit:
    - '' used as a delimiter means that each character will be output
    on its own.
    - if the input string does no include the delimiter, output the string as is
    - if there are characters before the delimiter, an empty line will be output
  Explicit
    - return an error message if no delimiter is given
    - 

Algorithm:
---------
- check to make the a delimiter was provided
- declare a variable to build each substring to be output to the console
- iterate through the input string one character at a time
  - add each character to the substring variable until the character is equal
  to the delimiter
    - output the current value of the substring
    - set the substring to empty value
    - repeat the process until all iterations have completed.
*/

function splitString(string, delimiter) {
  if (delimiter === '') {
  } else if (!delimiter) {
    console.log('ERROR: No delimiter');
    return;
  }

  let substring = ''

  for (let index = 0; index < string.length; index += 1) {
    if (delimiter === '') {
      console.log(string[index]);
    } else if (string[index] === delimiter) {
      console.log(substring);
      substring = '';
    } else {
      substring += string[index];
    }
  }
  if (substring) {
    console.log(substring);
  }

}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello

 
// LS Solution:

function splitString(string, delimiter) {
  if (delimiter === undefined) {
    console.log('ERROR: No delimiter');
    return;
  }

  let tempString = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === delimiter) {
      console.log(tempString);
      tempString = '';
    } else if (delimiter === '') {
      console.log(string[index]);
    } else {
      tempString += string[index];
    }
  }

  if (tempString) {
    console.log(tempString);
  }
}
