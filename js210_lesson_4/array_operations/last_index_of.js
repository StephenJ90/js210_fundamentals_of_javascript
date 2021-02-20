// JS210 Fundamentals of JavaScript for Programmers > Arrays > Array Operations

/*
Last Index Of
-------------

Write a function lastIndexOf that accepts two arguments: an array and a 
value. The function returns the last index at which the value can be found 
in the array, or -1 if the value is not present.

lastIndexOf([1, 2, 3, 3], 3);     // 3
lastIndexOf([1, 2, 3], 4);        // -1
*/

function lastIndexOf(array, value) {
  for (let index = array.length - 1; index >= 0; index -= 1) {
    if (array[index] === value) {
      return index;
    }
  }

  return -1;
}

console.log(lastIndexOf([1, 2, 3, 3], 3));     // 3
console.log(lastIndexOf([1, 2, 3], 4));        // -1