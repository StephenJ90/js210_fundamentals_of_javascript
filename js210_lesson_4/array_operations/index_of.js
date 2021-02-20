// JS210 Fundamentals of JavaScript for Programmers > Arrays > Array Operations

/*
Write a function indexOf that accepts two arguments: an array and a value. 
The function returns the first index at which the value can be found, or -1 
if the value is not present.

indexOf([1, 2, 3, 3], 3);         // 2
indexOf([1, 2, 3], 4);            // -1
*/

const indexOf = (array, value) => {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === value) {
      return index;
    }
  }

  return -1;
}

console.log(indexOf([1, 2, 3, 3], 3));         // 2
console.log(indexOf([1, 2, 3], 4));            // -1