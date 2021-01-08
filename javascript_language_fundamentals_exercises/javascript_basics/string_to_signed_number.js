// Convert a String to a Signed Number

/*
The previous exercise mimics the parseInt function to a lesser extent. In this exercise,
you're going to extend that function to work with signed numbers.

Write a function that takes a string of digits, and returns the appropriate number as an
integer. The string may have a leading + or - sign; if the first character is a +, your
function should return a positive number; if it is a -, your function should return a 
negative number. If there is no sign, return a positive number.

You may assume the string will always contain a valid number.

Examples:

stringToSignedInteger('4321');      // 4321
stringToSignedInteger('-570');      // -570
stringToSignedInteger('+100');      // 100

*/

// My Solution:
/*
PEDAC


PROBLEM:
input: string
output: integer

rules:
  Explicit Requirements:
    - return an integer
    - make sure that the integer returns positive if the string has a leading
    '+' or negative if the leading sign is '-', and return a postive number
    if the there is no leading sign.
    - the string will always be a valid number.

Examples/Test Cases:

stringToSignedInteger('4321');      // 4321
stringToSignedInteger('-570');      // -570
stringToSignedInteger('+100');      // 100

Data Structure:

*/

const NUMBERS_TABLE = {
  '0' : 0, '1' : 1, '2' : 2, '3' : 3, '4' : 4, 
  '5' : 5, '6' : 6, '7' : 7, '8' : 8, '9' : 9
};

function stringToSignedInteger(string) {
  let number = 0;
  let numberSign;

  for (let i = 0; i < string.length; i += 1) {
    if (string[i].match(/[^0-9]/)) {
      continue;
    }
    number = (number * 10 + NUMBERS_TABLE[string[i]]);
  }

  if (string[0] === '-') {
    console.log(number * -1);
  } else {
    console.log(number)
  }
  return number;
}

stringToSignedInteger('4321'); 
stringToSignedInteger('-570');
stringToSignedInteger('+100');

// LS Solution: Duh
// Requires function from previous exercise;

const DIGITS = {
  '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
  '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
};

function stringToInteger(string) {
  let value = 0;
  const numbers = stringToNumbers(string);

  for (let i = 0; i < numbers.length; i += 1) {
    value = 10 * value + numbers[i];
  }

  return value;
}

function stringToNumbers(string) {
  const result = [];

  for (let i = 0; i < string.length; i += 1) {
    result.push(DIGITS[string[i]]);
  }

  return result;
}

function stringToSignedInteger(string) {
  switch (string[0]) {
    case '-': return -stringToInteger(string.slice(1));
    case '+': return stringToInteger(string.slice(1));
    default:  return stringToInteger(string);
  }
}
