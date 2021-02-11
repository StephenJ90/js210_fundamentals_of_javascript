// JS210 - Small Problems > Easy 1

/*
ASCII String Value
------------------

Write a function that determines and returns the ASCII string value of a 
string passed in as an argument. The ASCII string value is the sum of the 
ASCII values of every character in the string. 
(You may use String.prototype.charCodeAt() to determine the ASCII value of a character.)

Examples:

asciiValue('Four score');         // 984
asciiValue('Launch School');      // 1251
asciiValue('a');                  // 97
asciiValue('');                   // 0

PEDAC
-----

Problem:
--------
take a string and calculate the total ascii value of the string by determining
each ascii value of each character.

Rules
  Explicit
    - calculate the value of EVERY character in string
    - use charCodeAt() to determine value of characters
  Implicit
    - empty strings are 0

Algorithm:
----------
- declare a sum variable to hold the ascii total
- iterate through the string
  - use charCodeAt() and the current index to determine that value of each character
  and add that value to the sum
- output the sum
*/

function asciiValue(string) {
  let asciiSum = 0;

  for (let index = 0; index < string.length; index += 1) {
    asciiSum += string.charCodeAt(index);
  }

  console.log(asciiSum);
  return asciiSum;
}

asciiValue('Four score');            // 984
asciiValue('Launch School');      // 1251
asciiValue('a');                  // 97
asciiValue('');                   // 0

// LS Solution:
// Same as mine.