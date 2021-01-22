// JS210 Fundamentals of JavaScript for Programmers > Practice Problems: Logic and Flow Control

/*
Goldbach Numbers
----------------
Write a function named checkGoldbach that uses Goldbach's Conjecture to log every pair of
primes that sum to the number supplied as an argument. The conjecture states that "you can
express every even integer greater than 2 as the sum of two primes". The function takes as
its only parameter, an integer expectedSum, and logs all combinations of two prime numbers 
whose sum is expectedSum. Log the prime pairs with the smaller number first. If expectedSum 
is odd or less than 4, your function should log null.

Your checkGoldbach function may call the isPrime function you wrote for a previous practice problem.

Example:

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53

- use a while loop that counts down from expectedSum and checks at each
iteration if a number is a prime using isPrime function
- if the number is a prime, add that number to an array. 
- set currentNumber to the first element of the array
- iterate through the array and check the if currentNumber + the number at 
each iteration is equal to expectedSum
- if it is add those 2 numbers as an array to another array.
- set currentNumber to the next number in the array and repeat the process
*/

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let currentNumber = 2; currentNumber < number; currentNumber += 1) {
    if (number % currentNumber === 0) {
      return false;
    }
  }

  return true;
}

function getPrimes(number) {
  let counter = 2;
  let primes = [];
  while (counter < number) {
    if (isPrime(counter)) {
      primes.push(counter);
    }
    counter++;
  }
  return primes
}

function checkGoldbach(expectedSum) {
  if (expectedSum < 4 || expectedSum % 2 === 1) {
    console.log(null);
    return;
  }

  let primes = getPrimes(expectedSum);
  let outerIndex = 0;
  let goldbachNumbers = [];
  for (; outerIndex < primes.length; outerIndex++) {
    for (let innerIndex = outerIndex; innerIndex < primes.length; innerIndex++) {
      if ((primes[outerIndex] + primes[innerIndex]) === expectedSum) {
        goldbachNumbers.push(primes[outerIndex], primes[innerIndex]);
      }
    }
  }

  for (let i = 0; i < goldbachNumbers.length; i += 2) {
    if (goldbachNumbers[i + 1] === undefined) {
      continue;
    } else {
      console.log(goldbachNumbers[i], goldbachNumbers[i + 1]);
    }
  }
}

checkGoldbach(4);
checkGoldbach(12);
checkGoldbach(100);


// LS Solution

let isPrime = function(number) {
  if (number < 2) {
    return false;
  }

  for (let firstNumber = 2; firstNumber < number; firstNumber += 1) {
    if (number % firstNumber === 0) {
      return false;
    }
  }

  return true;
};

let checkGoldbach = function(expectedSum) {
  if (expectedSum < 4 || expectedSum % 2 === 1) {
    console.log(null);
    return;
  }

  let num1 = 1;
  let num2;

  do {
    num1 += 1;
    num2 = expectedSum - num1;
    if (isPrime(num1) && isPrime(num2)) {
      console.log(num1, num2);
    }

  } while (num1 !== num2);
};