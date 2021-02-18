// JS210 Fundamentals of JavaScript for Programmers > Arrays

/*
3.

Create a function that returns the contents of the array it receives as an 
argument, but with the values in reversed order. Your function should use a 
for loop that iterates over the elements in the array from the end of the array 
to the beginning, and pushes each element's value to a new result array. Be sure 
to start your loop with the element whose index is one less than the input array's 
length.
*/

const ANIMALS = ['pigs', 'goats', 'sheep', 'chickens'];

function reverseArray(array) {
  let reversedArray = [];

  for (let index = array.length - 1; index >= 0; index -= 1) {
    reversedArray.push(array[index]);
  }

  return reversedArray;
}

console.log(reverseArray(ANIMALS));