// JS210 Fundamentals of JavaScript for Programmers > Arrays > Array Operations

/*
1. Write a function named push that accepts two arguments: an Array and any 
other value. The function should append the second argument to the end of 
the Array, and return the new length of the Array.

let count = [0, 1, 2];
push(count, 3);         // 4
count;                  // [ 0, 1, 2, 3 ]
*/

function push(array, element) {
  array[array.length] = element;
  return array.length;
}

let count = [0, 1, 2];
console.log(push(count, 3));         // 4
console.log(count);                  // [ 0, 1, 2, 3 ]

// LS Solution:

const push = (array, value) => {
  array[array.length] = value;
  return array.length;
};

// The push() method adds one or more elements to the end of an array and returns 
// the new length of the array. This method mutates the calling object (array).

// The push method relies on a length property to determine where to start inserting 
// the given values. If the length property cannot be converted into a number, the index 
// used is 0. This includes the possibility of length being nonexistent, in which case 
// length will also be created.