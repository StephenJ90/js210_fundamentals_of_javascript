// JS210 Fundamentals of JavaScript for Programmers > Practice Problems: Logic and Flow Control

/*
Trimming Spaces
---------------

Write a function that takes a string as an argument, and returns the string stripped of 
spaces from both ends. Do not remove or alter internal spaces.

You may use the square brackets ([]) to access a character by index (as shown below), 
and the length property to find the string length. However, you may not use any other 
properties or methods from JavaScript's built-in String class.

Example:

trim('  abc  ');  // "abc"
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
trim('      ');   // ""
trim('');         // ""

PEDAC:
------

Problem:
--------
Take an input string and trim spaces off of the beginning and end of string
but leave spaces in between characters in place.

Algorithm:
----------
Try and find the start index of the string, and the end index of the string
and then iterate through those indices and return those characters.
- if the first character is a space
  - set the startIndex to the current index of space in the string
  - continue this until the character is not a space and break out out
  of the loop
- if the first character is a letter break out of the loop
*/

function trim(string) {
  let startIndex = 0;
  let endIndex = string.length - 1;
  let limit = string.length - 1;

  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === ' ') {
      startIndex = index + 1;
    } else {
      break;
    }
  }

  for (let index = limit; index >= 0; index -= 1) {
    if (string[index] === ' ') {
      endIndex = index - 1;
    } else {
      break;
    }
  }

  let trimmedString = '';
  for (let index = startIndex; index <= endIndex; index += 1) {
    trimmedString += string[index];
  }
  console.log(trimmedString);
  return trimmedString;
}

trim('  abc  ');  // "abc"
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
trim('      ');   // ""
trim('');         // ""

// LS Solution:
// Similar algorithm but LS implemented separate functions for trimming
// left and right spaces. 

function trim(string) {
  let trimmed = trimLeft(string);
  trimmed = trimRight(trimmed);

  return trimmed;
}

function trimLeft(string) {
  let newString = '';
  let copyMode = false;

  for (let index = 0; index < string.length; index += 1) {
    if (string[index] !== ' ') {
      copyMode = true;
    }

    if (copyMode) {
      newString += string[index];
    }
  }

  return newString;
}

function trimRight(string) {
  let newString = '';
  let copyMode = false;

  for (let index = string.length - 1; index >= 0; index -= 1) {
    if (string[index] !== ' ') {
      copyMode = true;
    }

    if (copyMode) {
      newString = string[index] + newString;
    }
  }

  return newString;
}
