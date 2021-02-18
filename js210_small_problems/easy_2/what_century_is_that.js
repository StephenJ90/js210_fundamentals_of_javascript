// JS210 - Small Problems > Easy 2

/*
What Century is That
--------------------

Write a function that takes a year as input and returns the century. 
The return value should be a string that begins with the century number, 
and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

New centuries begin in years that end with 01. So, the years 1901 - 2000 
comprise the 20th century.

Examples:

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"

PEDAC
-----

Problem:
--------

Determine the current century of the argument and then append the appropriate
characters to the century and return the century and characters as a string.

Rules:
  Explicit
    - The return value is a string
    - centuries begin in years that end with 01
  Implicit
    - centuries that end in 11, 12, or 13 use the 'th' ending

Algorithm:
----------

First determine the century
- divide the argument by 100 and round up to the nearest whole number and convert
to string
  - this accounts for 2001 being in the 21st century and 2000 being in the 20th
- to account for 11, 12 and 13 ending in 'th':
  - if the last 2 characters in the string number are equal to 11, 12, or 13
    - return the string with 'th'
- if the string ends with 1, return string with 'st'
- if the string ends with 2, return string with 'nd'
- if the string ends with 3, return string with 'rd'
- else return string with 'th'
*/

function century(year) {
  const CENTURY = String(Math.ceil(year / 100));
  const LAST_TWO_DIGITS = CENTURY.slice(-2);

  if (LAST_TWO_DIGITS === '11' || LAST_TWO_DIGITS === '12' || LAST_TWO_DIGITS === '13') {
    return CENTURY + 'th';
  }

  const LAST_DIGIT = LAST_TWO_DIGITS.slice(-1);
  
  if (LAST_DIGIT === '1') {
    return CENTURY + 'st';
  } else if (LAST_DIGIT === '2') {
    return CENTURY + 'nd'; 
  } else if (LAST_DIGIT === '3') {
    return CENTURY + 'rd';
  } else {
    return CENTURY + 'th';
  }
}

century(2000)         // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"

// LS Solution:

function century(year) {
  let centuryNumber = Math.floor(year / 100) + 1;

  if (year % 100 === 0) {
    centuryNumber -= 1;
  }

  return String(centuryNumber) + centurySuffix(centuryNumber);
}

function centurySuffix(centuryNumber) {
  if (catchWithTh(centuryNumber % 100)) {
    return 'th';
  }

  let lastDigit = centuryNumber % 10;
  switch (lastDigit) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

function catchWithTh(lastTwo) {
  return lastTwo === 11 || lastTwo === 12 || lastTwo === 13;
}