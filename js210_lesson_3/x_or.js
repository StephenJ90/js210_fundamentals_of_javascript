// JS210 Fundamentals of JavaScript for Programmers > Practice Problems: Logic and Flow Control

/*
XOR
For boolean values, the || operator returns true if either or both of its operands
are true, false if both operands are false. The && operator, on the other hand, 
returns true if both of its operands are true, and false if either operand is false.
This works great until you need only one of two conditions to be true, the so-called 
"exclusive or", or XOR.

Write a function named isXor that takes two arguments, and returns true if exactly one 
argument is truthy, false otherwise. Your function should work with the boolean values 
of true and false, but also any JavaScript values based on their "truthiness".

isXor(false, true);     // true
isXor(true, false);     // true
isXor(false, false);    // false
isXor(true, true);      // false


isXor(false, 3);        // true
isXor('a', undefined);  // true
isXor(null, '');        // false
isXor('2', 23);         // false
*/

function isXor(value1, value2) {
  if ((!!value1 === true && !!value2 === false) || (!!value1 === false && !!value2 === true)) {
    return true;
  } else {
    return false;
  }
}

isXor(false, true);     // true
isXor(true, false);     // true
isXor(false, false);    // false
isXor(true, true);      // false
isXor(false, 3);        // true
isXor('a', undefined);  // true
isXor(null, '');        // false
isXor('2', 23);         // false

// LS Solution:

function isXor(value1, value2) {
  if (value1 && !value2) {
    return true;
  } else if (!value1 && value2) {
    return true;
  } else {
    return false;
  }
}