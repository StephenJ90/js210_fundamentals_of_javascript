// JS210 Fundamentals of JavaScript for Programmers > Arrays > Array Operations

/*
Concat
------

Write a function named concat that accepts two Array arguments. The function 
should return a new Array that contains the values from each of the original 
Arrays.

You may use functions that were answers to previous practice problems to 
complete this problem, but do not use any built-in Array methods.

concat([1, 2, 3], [4, 5, 6]);       // [ 1, 2, 3, 4, 5, 6 ]
*/

const push = (array, value) => {
  array[array.length] = value;
  return array.length;
};

function concat(array1, array2) {
  let newArray = [];
  for (let index = 0; index < array1.length; index += 1) {
    push(newArray, array1[index]);
  }

  for (let index = 0; index < array2.length; index += 1) {
    push(newArray, array2[index])
  }

  return newArray;
}

console.log(concat([1, 2, 3], [4, 5, 6]));