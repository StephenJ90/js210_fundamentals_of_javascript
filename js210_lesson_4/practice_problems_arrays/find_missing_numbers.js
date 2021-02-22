// JS210 Fundamentals of JavaScript for Programmers > Arrays > Practice Problem: Find Missing Numbers

/*
Write a function that takes a sorted array of integers as an argument, and returns an 
array that includes all the missing integers (in order) between the first and last 
elements of the argument.

missing([-3, -2, 1, 5]);                  // [-1, 0, 2, 3, 4]
missing([1, 2, 3, 4]);                    // []
missing([1, 5]);                          // [2, 3, 4]
missing([6]);                             // []
*/

function missing(arr) {
  let startIndex = arr[0] + 1;
  let endIndex = arr[arr.length - 1];
  let newArray = [];

  for (; startIndex < endIndex; startIndex += 1) {
    if (!arr.includes(startIndex)) {
      newArray.push(startIndex);
    }
  }

  return newArray;
}

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []

// LS Solution:

function missing(array) {
  let result = [];
  let start = array[0] + 1;
  let end = array[array.length - 1];

  for (let integer = start; integer < end; integer += 1) {
    if (array.indexOf(integer) === -1) {
      result.push(integer);
    }
  }

  return result;
}