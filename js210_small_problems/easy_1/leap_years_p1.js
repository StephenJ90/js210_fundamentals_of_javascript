// JS210 - Small Problems > Easy 1

/*
Leap Years Part 1
-----------------
In the modern era under the Gregorian Calendar, leap years occur in every year that
is evenly divisible by 4, unless the year is also divisible by 100. If the year is 
evenly divisible by 100, then it is not a leap year, unless the year is also evenly 
divisible by 400.

Assume this rule is valid for any year greater than year 0. Write a function that takes
any year greater than 0 as input, and returns true if the year is a leap year, or false if 
it is not a leap year.

Examples:

isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true

PEDAC
-----

Problem:
--------

Take an input greater than 0 and determine if it is a leap year. Return true
if it is, false if not.

Rules
  Explicit:
    for year to be leap year:
      - year must be evenly divisible by 4 or by 400 but is not if it is evenly divisible by 100
      - 

Algorithm:
----------
- if year is evenly divisible by 100
  - if year is evenly divisible by 400
    - return true
  - return false
- if year is evenly divisible by 4 or 400
  - return true


Solution refactored from first algorithm*
*/

const Divisor_400 = 400;
const Divisor_100 = 100;
const Divisor_4 = 4;

function yearEvenlyDivisible(year, divisor) {
  return year % divisor === 0;
}

function isLeapYear(year) {
  if (yearEvenlyDivisible(year, Divisor_4)) {
    if (yearEvenlyDivisible(year, Divisor_400)) {
      return true;
    } else if (yearEvenlyDivisible(year, Divisor_100)) {
      return false;
    }
    return true;
  }
  return false;
}

isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true

// LS Solution:

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
}

// OR a Shorter Solution:

const isLeapYear = (year) => (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);