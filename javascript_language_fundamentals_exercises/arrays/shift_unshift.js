// JS210 - JavaScript Language Fundamentals > Arrays

/*
Array Shift and Unshift
-----------------------

In this exercise, you will implement your own versions of the Array.prototype.shift 
and Array.prototype.unshift methods. These methods manipulate the contents of an array 
starting from the first index.

The shift method removes the first element from an array and returns that element; if 
the array is empty, shift returns undefined. The unshift method adds one or more elements 
to the start of an array and returns the new length of the array. Both methods mutate the 
original array.

Examples:

shift([1, 2, 3]);                // 1
shift([]);                       // undefined
shift([[1, 2, 3], 4, 5]);        // [1, 2, 3]

unshift([1, 2, 3], 5, 6);        // 5
unshift([1, 2, 3]);              // 3
unshift([4, 5], [1, 2, 3]);      // 3

const testArray = [1, 2, 3];
shift(testArray);                // 1
testArray;                       // [2, 3]
unshift(testArray, 5);           // 3
testArray;                       // [5, 2, 3]
*/

function shift(array) {
  const shiftedElement = array[0];
  array.splice(0, 1);
  return shiftedElement;
}

function unshift(array, ...args) {
  for (let i = 0; i < args.length; i += 1) {
    array.splice(i, 0, args[i]);
  }

  return array.length;
}

shift([1, 2, 3]);                // 1
shift([]);                       // undefined
shift([[1, 2, 3], 4, 5]);        // [1, 2, 3]

unshift([1, 2, 3], 5, 6);        // 5
unshift([1, 2, 3]);              // 3
unshift([4, 5], [1, 2, 3]);      // 3

const testArray = [1, 2, 3];
shift(testArray);                // 1
console.log(testArray);          // [2, 3]
unshift(testArray, 5);           // 3
console.log(testArray);          // [5, 2, 3]

// LS Solution:
// unshift() function was the same

function shift(array) {
  let result;

  if (array.length !== 0) {
    result = array.splice(0, 1).pop();
  }

  return result;
}


// Further Exploration
/*
If you haven't yet done so, reimplement the shift and unshift methods without 
using the splice method.
*/

function shift(array) {
  array.reverse();
  let shiftedElement = array.pop();
  array.reverse();
  return shiftedElement;
}

function unshift(array, ...args) {
  const arrayCopy = Array.from(array);

  for (let i = 0; i < args.length; i += 1) {
    array[i] = args[i];                       // overwrite the original array with values from arguments
  }

  for (let i = 0; i < arrayCopy.length; i += 1) { // starting from index where argument values end,
    array[args.length + i] = arrayCopy[i];                                // add the values back from the copy array back to the original array
  }

  return array.length;
}

// Student Solution:

function shift(array) {
  if (array.length === 0) return undefined;

  const shiftValue = array[0];

  for (let index = 0; index < array.length - 1; index++) {
    array[index] = array[index + 1];
  }
  console.log(array);
  array.length = array.length - 1

  return shiftValue;
}