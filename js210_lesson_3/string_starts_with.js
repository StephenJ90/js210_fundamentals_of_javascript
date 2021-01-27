// JS210 Fundamentals of JavaScript for Programmers > Practice Problems: Logic and Flow Control

/*
String StartsWith
-----------------

Implement a function that determines whether a string begins with another string. If it does, 
the function should return true, or false otherwise.

Examples:

function startsWith(string, searchString) {
  // …
}

let str = 'We put comprehension and mastery above all else';
startsWith(str, 'We');              // true
startsWith(str, 'We put');          // true
startsWith(str, '');                // true
startsWith(str, 'put');             // false

let longerString = 'We put comprehension and mastery above all else!';
startsWith(str, longerString);      // false

You may use the square brackets ([]) to access a character by index (as shown below), and the 
length property to find the string length. However, you may not use any other properties or 
methods from JavaScript's built-in String class.

PEDAC
-----

Problem:
--------
Check to see if searchString matches exactly character for character
with string. Return true if it foes, false if not.

Rules
  Implicit
    - searchString may be longer or shorter than string and if it's longer
    than that means that string cannot start with searchString
    - if searchString === '', return true
    - string will never be an empty string and will always be alphabet
    characters

Algorithm:
----------
- get string and searchString length
- if searchString length is greater than string length, return false
- if searchString === '' return true
- loop searchString from 0 to length - 1 
- on each iteration check whether each character at each index in string is
equal to each character at each index of searchString
  - return false if characters do not match
- return true if you exit out of the loop
*/

function startsWith(string, searchString) {
  for (let index = 0; index < searchString.length; index += 1) {
    if (string[index] !== searchString[index]) {
      return false;
    }
  }

  return true;
}

let str = 'We put comprehension and mastery above all else';
startsWith(str, 'We');              // true
startsWith(str, 'We put');          // true
startsWith(str, '');                // true
startsWith(str, 'put');             // false

let longerString = 'We put comprehension and mastery above all else!';
startsWith(str, longerString);      // false