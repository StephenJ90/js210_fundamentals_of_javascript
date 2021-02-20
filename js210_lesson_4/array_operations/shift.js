// JS210 Fundamentals of JavaScript for Programmers > Arrays > Array Operations

/*
Write a function named shift that accepts one argument: an Array. The function should 
remove the first value from the beginning of the Array and return it.

let count = [1, 2, 3];
shift(count);           // 1
count;                  // [ 2, 3 ]
*/

let shift = function(array) {
  let first = array[0];

  if (array.length === 0) {
    return undefined;
  }

  for (let index = 0; index < array.length - 1; index += 1) {
    array[index] = array[index + 1];
  }

  array.length = array.length - 1;
  return first;
}

let count = [1, 2, 3];
console.log(shift(count));           // 1
console.log(count);                  // [ 2, 3 ]