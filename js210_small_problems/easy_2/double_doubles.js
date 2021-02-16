// JS210 - Small Problems > Easy 2

/*
Double Doubles
--------------

A double number is an even-length number whose left-side digits are exactly 
the same as its right-side digits. For example, 44, 3333, 103103, and 7676 
are all double numbers, whereas 444, 334433, and 107 are not.

Write a function that returns the number provided as an argument multiplied 
by two, unless the argument is a double number; return double numbers as-is.

Examples:

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676

PEDAC
-----

Problem:
--------

If the argument has an odd number of digits, or if the argument has an even
number but the left digits are not an exact match of the right digits, return the
number doubled. If the left digits are an exact match, return the argument as is.

Rules:
  Explicit
    - if the number is not a double number, return the number doubled
    - if the number is a double number, return the number as is
    - return the number doubled if it has an odd number of digits

Algorithm:
----------

- convert the number to a string
- determine the length of the string
- return the number doubled if it has an odd number of digits
- if the number has an even number of digits, find the index of the last
digit of the left digits
- iterate through the string of digits
- add each digit to leftDigits if the current digit at the current
index is less than index of the last digit of the left digits
- add each digit to rightDigits if the index of the current digit is greater
than the index of the last digit of the left digits
- compare leftDigits with rightDigits
  - if they are equal return the number as is,
    - else return the number doubled.
*/

function doubled(number) {
  return number * 2;
}

function twice(number) {
  let numberLength = String(number).length;
    
  if (numberLength % 2 === 1) return console.log(doubled(number));

  let middleIndex = numberLength / 2;
  let leftDigits = '';
  let rightDigits = '';

  for (let index = 0; index < numberLength; index += 1) {
    if (index < middleIndex) {
      leftDigits += String(number)[index];
    } else {
      rightDigits += String(number)[index];
    }
  }

  if (leftDigits === rightDigits) {
    console.log(number);
    return;
  }

  console.log(doubled(number));
}

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676

// LS Solution:

function twice(number) {
  if (isDoubleNumber(number)) {
    return number;
  } else {
    return number * 2;
  }
}

function isDoubleNumber(number) {
  const stringNumber = String(number);
  const center = stringNumber.length / 2;
  const leftNumber = stringNumber.substring(0, center);
  const rightNumber = stringNumber.substring(center);

  return leftNumber === rightNumber;
}