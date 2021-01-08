// Convert a Number to a String

/*
In the previous two exercises, you developed functions that convert simple numeric 
strings to signed integers. In this exercise and the next, you're going to reverse 
those functions.

You will learn more about converting strings to numbers by writing a function that 
takes a positive integer or zero, and converts it to a string representation.

You may not use any of the standard conversion functions available in JavaScript, 
such as String(), Number.prototype.toString, or an expression such as '' + number. 
Your function should do this the old-fashioned way and construct the string by 
analyzing and manipulating the number.

Examples:

integerToString(4321);      // "4321"
integerToString(0);         // "0"
integerToString(5000);      // "5000"
*/

// My Solution:
/*
PEDAC

PROBLEM:
input: integer
output: string

rules:
  Explicit Requirements:
    - convert a positive integer or 0 to a string representation
    - cannot use any standard conversion functions

  Implicit Requirements:
    - Integers will be positive
    - integer of 0 will be returned as '0'

Data Structures:
  - Object

Algorithm:
  - create a const DIGITS object to match an integer with its string representation
  - find the remainder of the whole number divided by 10
  - subtract the remainder from the whole number
  - look up the remainder in DIGITS to get the string representation
  - add this string to a variable
  - set the whole number to a new value of the whole number divided by 10
  - repeat process until 
*/

// const DIGITS = {
//   0: '0', 1: '1', 2: '2', 3: '3', 4: '4',
//   5: '5', 6: '6', 7: '7', 8: '8', 9: '9',
// };

// function integerToString(integer) {
//   let stringArray = [];
//   let remainder;
//   let number = integer;

//   if (integer === 0) {
//     return '0';
//   }

//   while (number > 0) {
//     remainder = number % 10;
//     stringArray.push(DIGITS[remainder]);
//     number -= remainder;
//     number /= 10;
//   }
//   let string = stringArray.reverse().join('');
//   console.log(string);
//   return string
// }

// integerToString(-4321); 
// integerToString(0); 
// integerToString(5000);
// integerToString(478032); 

// LS Solution:

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(number) {
  let result = '';

  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);
    console.log(remainder);
    console.log(number);

    result = DIGITS[remainder] + result;
  } while (number > 0);
  console.log(result)
  return result;
}

integerToString(-4321); 
// integerToString(0); 
// integerToString(5000);
// integerToString(478032); 
