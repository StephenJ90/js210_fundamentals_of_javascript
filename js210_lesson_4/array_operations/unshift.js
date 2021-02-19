// JS210 Fundamentals of JavaScript for Programmers > Arrays > Array Operations

/*
Write a function named unshift that accepts two arguments: an Array and a value. 
The function should insert the value at the beginning of the Array, and return the 
new length of the array. You will need a for loop for this problem.

let count = [1, 2, 3];
unshift(count, 0);      // 4
count;                  // [ 0, 1, 2, 3 ]


*/

let unshift = function(array, value) {
  for (let index = array.length; index > 0; index -= 1) {
    array[index] = array[index - 1];
  }

  array[0] = value;
  return array.length;
}

let count = [1, 2, 3];
console.log(unshift(count, 0));      // 4
console.log(count);                  // [ 0, 1, 2, 3 ]

// LS Solution is the same as mine

// 