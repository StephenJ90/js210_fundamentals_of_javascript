// JS210 Fundamentals of JavaScript for Programmers > Practice Problems: Logic and Flow Control

// Greatest Common Divisor
// -----------------------

// Create a function that computes the Greatest Common Divisor
// of two positive integers.

/*
gcd(12, 4);   // 4
gcd(15, 10);  // 5
gcd(9, 2);    // 1

PEDAC

Problem:
Find the largest number of each given value that can both be divided by evenly

Algorithm:
- find the divisors of each number
- iterate through the divisors of the smaller number starting with
  the largest divisor
  - see if this number matches a number in the list of divisors
  of the larger number
  - if it does, return this number
  - if it does not, iterate through the next biggest divisor from the smaller
  number.
  - repeat until matching divisor is found
*/

function gcd(number1, number2) {
  let i = number1 > number2 ? number2 : number1
  for (; i > 0; i--) {
    if (number1 % i === 0 && number2 % i === 0) {
      return i;
    }
  }
}

gcd(12, 4);   // 4
gcd(15, 10);  // 5
gcd(9, 2);    // 1
gcd(4, 12);   // 4
gcd(10, 15);  // 5

// LS Solution:

function gcd(num1, num2) {
  var temp;

  while (num2 !== 0) {
    temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }

  console.log(num1);
  return num1;
}


gcd(12, 4);
gcd(15, 10);
gcd(4, 12);
gcd(10, 15);

// Further Exploration
// The examples all put the larger number first. Do you think the program will still 
// work if you reverse the order and place the smaller number first?

// The program still works which is not what I expected. Let's explore
// how the LS program works:

/*
gcd(4, 12);

- On the first line of code we declare the variable `temp`
- when then enter a while loop that iterates until the second number
input into the function is equal to zero
- inside the while loop, the `temp` variable is assigned the value num2
is 4. `temp` now has a value of 4.
- num2 is reassigned to the value of this expression: num1 % num2
  - which is 4 % 12 and evaluates to 4, so now num2 = 4
- on the next line. num1 is reassigned to the value of temp which is 12
- Now it's almost as if we called the function like this: gcd(12, 4);
- temp is reassigned to 4
- num2 is reassigned to 0
- num1 is reassigned to temp which is 4
- the condition for the while loop fails because num2 === 0
*/