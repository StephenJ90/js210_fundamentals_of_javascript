// JS210 Fundamentals of JavaScript for Programmers > Objects > Practice Problem

// Repeated Characters
// -------------------

/*
Implement a function that takes a String as an argument and returns an object 
that contains a count of the repeated characters.

repeatedCharacters('Programming');    // { r: 2, g: 2, m: 2 }
repeatedCharacters('Combination');    // { o: 2, i: 2, n: 2 }
repeatedCharacters('Pet');            // {}
repeatedCharacters('Paper');          // { p: 2 }
repeatedCharacters('Baseless');       // { s: 3, e: 2 }

Note that repeatedCharacters does a bit more than simply count the frequency 
of each character: it determines the counts, but only returns counts for characters 
that have a count of 2 or more. It also ignores the case.

PEDAC
-----

Problem:
--------

Take a string and return an object that has the letters of the string as keys,
and the number of times that letter appears in the string as the value, but only
if that letter appears 2 or more times.

Rules:
  Explicit
    - only include letters that appear 2 or more times
    - use letters as the keys and counts as the value
    - ignore case. P and p are the same letter.
  Implicit
    - if the string does not have any repeating characters return an empty
    object

Algorithm:
----------

- initialize a variable and set it to a new object
- iterate through the string
  - if the object does not contain that character set that characters
  value to 0
  - add 1 to the characters value
We now have an object with all of the characters from string as keys, and the
counts as values
- retrieve the keys from the object
- iterate through the keys
  - if key has a value of less than 2, delete that key/value pair
- return the object
*/

function repeatedCharacters(text) {
  text = text.toLowerCase();
  let characterCounts = {};

  for (let i = 0; i < text.length; i += 1) {
    let currentChar = text[i];
    if (!characterCounts[currentChar]) {
      characterCounts[currentChar] = 0;
    }

    characterCounts[currentChar] += 1;
  }

  let characterKeys = Object.keys(characterCounts);

  for (let i = 0; i < characterKeys.length; i += 1) {
    let currentKey = characterKeys[i];
    if (characterCounts[currentKey] < 2) {
      delete characterCounts[currentKey];
    }
  }

  return characterCounts;
}

repeatedCharacters('Programming');    // { r: 2, g: 2, m: 2 }
repeatedCharacters('Combination');    // { o: 2, i: 2, n: 2 }
repeatedCharacters('Pet');            // {}
repeatedCharacters('Paper');          // { p: 2 }
repeatedCharacters('Baseless');       // { s: 3, e: 2 }

// LS Solution:

function repeatedCharacters(string) {
  let result = {};
  let lowerCaseString = string.toLowerCase();

  for (let index = 0; index < lowerCaseString.length; index += 1) {
    if (result[lowerCaseString[index]] !== undefined) {
      result[lowerCaseString[index]] += 1;
    } else {
      result[lowerCaseString[index]] = 1;
    }
  }

  for (let key in result) {
    if (result[key] === 1) {
      delete result[key];
    }
  }

  return result;
}