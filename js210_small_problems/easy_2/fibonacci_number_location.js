// JS210 - Small Problems > Easy 2

/*
Fibonacci Number Location by Length
-----------------------------------

The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...) 
such that the first two numbers are 1 by definition, and each subsequent number 
is the sum of the two previous numbers. This series appears throughout the natural world.

Computationally, the Fibonacci series is a simple series, but the results grow at an incredibly 
rapid rate. For example, the 100th Fibonacci number is 354,224,848,179,261,915,075—that's enormous, 
especially considering that it takes six iterations just to find the first 2-digit Fibonacci number.

Write a function that calculates and returns the index of the first Fibonacci number that has the 
number of digits specified by the argument. (The first Fibonacci number has an index of 1.)

You may assume that the argument is always an integer greater than or equal to 2.

Examples:

findFibonacciIndexByLength(2);       // 7
findFibonacciIndexByLength(10);      // 45
findFibonacciIndexByLength(16);      // 74

PEDAC
-----

Problem:
--------

Compute the fibonacci sequence and find the index of the first number from the sequence that has
the number of digits specified by the argument.

Rules:
  Explicit
    - the argument will always be greater than or equal to 2
    - return the first digit that has the specified number of digits
  Implicit
    - Return the index as a Number

Algorithm:
----------
calculate the fibonacci sequence and for each number in the sequence, check 
if that number has the number of digits specified by the argument. if it does
return that current index of that number.
- Create fibonacci sequence function that will return each number in the sequence
- in the main function, iterate until the current number in the sequence is equal
to the argument specified.

Main function
- declare a variable to represent the currentIndex
- use an do..while loop
  - iterate by 1 until the return value of the fibonacci sequence has the same
  number as the as the given argument
  - return the current index

Fibonacci Sequence
- let the firstNumber = 1
- let the secondNumber = 1
- let the nextNumber = firstNumber + secondNumber

*/

function findFibonacciIndexByLength(size) {
  let currentIndex = 2;
  let firstNumber = 1;
  let secondNumber = 1;
  let fibonacci;

  do {
    currentIndex += 1;
    fibonacci = firstNumber + secondNumber;
    firstNumber = secondNumber;
    secondNumber = fibonacci;
  } while (String(fibonacci).length !== size);

  return currentIndex;
}

findFibonacciIndexByLength(2);       // 7
findFibonacciIndexByLength(10);      // 45
findFibonacciIndexByLength(16);      // 74

// LS Solution:

function findFibonacciIndexByLength(length) {
  let first = 1;
  let second = 1;
  let index = 2;
  let fibonacci;

  do {
    fibonacci = first + second;
    index += 1;
    first = second;
    second = fibonacci;
  } while (String(fibonacci).length < length);

  return index;
}