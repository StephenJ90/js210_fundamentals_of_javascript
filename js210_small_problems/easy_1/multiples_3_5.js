// JS210 - Small Problems > Easy 1

/*
Multiples of 3 and 5
--------------------

Write a function that computes the sum of all numbers between 1 and some other number,
inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20, 
the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

You may assume that the number passed in is an integer greater than 1.

Examples:

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168

PEDAC
-----

Problem:
--------
Take all the intgers from 1 up to the input integer and calculate the sum of
all the numbers in that range that are multiples of either 3 and 5 and
output the sum.

Algorithm:
----------
- declare a variable that will hold the sum of the integers
- iterate from 1 up to the input integer
  - if index % 3 === 0 or index % 5 === 0 add that number to the variable
- output the sum after all iterations
*/

function multisum(number) {
  let sum = 0;

  for (let index = 1; index <= number; index += 1) {
    if (index % 3 === 0 || index % 5 === 0) {
      sum += index;
    }
  }

  return sum;
 }

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168

// LS Solutions:

function isMultiple(number, divisor) {
  return number % divisor === 0;
}

function multisum(maxValue) {
  let sum = 0;

  for (let number = 1; number <= maxValue; number += 1) {
    if (isMultiple(number, 3) || isMultiple(number, 5)) {
      sum += number;
    }
  }

  return sum;
}