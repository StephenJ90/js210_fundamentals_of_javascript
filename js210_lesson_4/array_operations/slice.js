// JS210 Fundamentals of JavaScript for Programmers > Arrays > Array Operations

/*
Slice
-----

Write a function named slice that accepts three arguments: an Array, a start 
index, and an end index. The function should return a new Array that contains 
values from the original Array starting with the value at the starting index, 
and including all values up to but not including the end index. Do not modify 
the original Array.

You may use functions that were answers to previous practice problems to complete 
this problem, but do not use any built-in Array methods.

slice([1, 2, 3, 4, 5], 0, 2);                      // [ 1, 2 ]
slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3);  // [ 'b', 'c' ]

PEDAC
-----

Problem:
--------

return a new array from an input array that is the elements starting from
the start input index and ending up to but not including the end input index.

Rules:
  Explicit
    - Do not mutate the original array
    - include the element from the start index but do not include the element
    at the end index
    - you may use previously built functions but none of the standard built-in Array
    functions
*/

const push = (array, value) => {
  array[array.length] = value;
  return array.length;
};

function slice(array, startIndex, endIndex) {
  let result = [];

  for (let index = startIndex; index < endIndex; index += 1) {
    push(result, array[index]);
  }

  return result;
}


console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]