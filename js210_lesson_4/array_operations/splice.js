// JS210 Fundamentals of JavaScript for Programmers > Arrays > Array Operations

/*
Splice
------

Write a function named splice that accepts three arguments: an Array, 
a start index, and the number of values to remove. The function should 
remove values from the original Array, starting with the first index and 
removing the specified number of values. The function should return the 
removed values in a new Array.

You may use functions that were answers to previous practice problems to 
complete this problem, but do not use any built-in Array methods.

let count = [1, 2, 3, 4, 5, 6, 7, 8];
splice(count, 2, 5);                   // [ 3, 4, 5, 6, 7 ]
count;                                 // [ 1, 2, 8 ]
*/

const push = (array, value) => {
  array[array.length] = value;
  return array.length;
};

function splice(array, begin, number) {
  let removedValues = [];
  for (let index = begin; index < array.length; index += 1) {
    if (index < begin + number) {
      push(removedValues, array[index]);
    }

    array[index] = array[index + number];
  }
  console.log(array);
  array.length = array.length - removedValues.length;
  return removedValues;
}

let count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
console.log(count);                                 // [ 1, 2, 8 ]