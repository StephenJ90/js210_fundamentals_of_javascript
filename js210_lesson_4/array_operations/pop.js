// JS210 Fundamentals of JavaScript for Programmers > Arrays > Array Operations

/*
2. Write a function named pop that accepts one argument: an Array. The function 
should remove the last element from the array and return it.

let count = [1, 2, 3];
pop(count);             // 3
count;                  // [ 1, 2 ]
*/

const pop = (array) => {
  let lastElement = array[array.length - 1];
  array.length = array.length - 1;
  return lastElement;
}

let count = [1, 2, 3];
console.log(pop(count));             // 3
console.log(count);                  // [ 1, 2 ]

// LS Solution:

const pop = array => {
  if (array.length === 0) {
    return undefined;
  }

  let newLength = array.length - 1;
  let value = array[newLength];
  array.length = newLength;
  return value;
};

// The pop() method mutates the array.

// 