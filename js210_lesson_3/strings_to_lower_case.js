// JS210 Fundamentals of JavaScript for Programmers > Practice Problems: Logic and Flow Control

/*
Converting Strings to Lower Case
--------------------------------

Write a function that returns a string converted to lowercase.

To convert a single uppercase character to a lowercase character, get its ASCII numeric representation 
from the ASCII table, add 32 to that number, then convert the number back to a character using the 
same ASCII table. You can use the String.fromCharCode and the String.charCodeAt methods for these operations.

For example:

let string = 'A';
let asciiNumeric = string.charCodeAt(0);         // 65
let asciiNumeric += 32;
string = String.fromCharCode(asciiNumeric);  // "a", converted to lowercase

Examples:

function toLowerCase(string) {
  // …
}

toLowerCase('ALPHABET');    // "alphabet"
toLowerCase('123');         // "123"
toLowerCase('abcDEF');      // "abcdef"

You may use the square brackets ([]) to access a character by index (as shown below), and the length property 
to find the string length. However, you may not use any other properties or methods from JavaScript's built-in String class.

PEDAC
-----

Problem:
--------
Convert each string to lower case.

Rules:
  Implicit
    - if the character is already lower case, it should stay that way
    - if the string is made up integers, the same value should be returned
    - the string will either be all alphabet characters or numbers
  Explicit
    - Use the given methods to determine whether a character is lower or upper case

Algorithm:
----------
- check if the first character is an alphabetic character or number
by checking its character code is betweem 65('A') and 122('z').
  - if it's not, return the input string
- declare a variable that will be used to hold the new lower case string
- create a loop to iterate through the input string
  - if a character has a character code between 65 and 90 inclusive,
  get that character code and add 32 to it and use fromCharCode to get the lower
  case character and concat it to the new string.
  - if the character is not between those numbers, concat it to the new string
  as it is already lower case

*/

function toLowerCase(string) {
  let asciiNumeric = string.charCodeAt(0);

  if (asciiNumeric < 65 && asciiNumeric > 122) {
    console.log(string);
    return string;
  }

  let lowerString = '';

  for (let index = 0; index < string.length; index += 1) {
    asciiNumeric = string.charCodeAt(index)
    if (asciiNumeric > 64 && asciiNumeric < 91) {
      asciiNumeric += 32;
      lowerString += String.fromCharCode(asciiNumeric);
    } else {
      lowerString += string[index];
    }
  }

  console.log(lowerString);
}

toLowerCase('ALPHABET');    // "alphabet"
toLowerCase('123');         // "123"
toLowerCase('abcDEF');      // "abcdef"

// LS Solution:

function toLowerCase(string) {
  const CONVERSION_OFFSET = 32;
  let newString = '';

  for (let index = 0; index < string.length; index += 1) {
    let charCode = string.charCodeAt(index);

    if (string[index] >= 'A' && string[index] <= 'Z') {
      charCode += CONVERSION_OFFSET;
    }

    newString += String.fromCharCode(charCode);
  }

  return newString;
}