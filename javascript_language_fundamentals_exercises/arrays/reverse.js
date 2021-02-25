// JS210 - JavaScript Language Fundamentals > Arrays

/*
Array and String Reverse
------------------------

In this exercise, you will implement your own version of the Array.prototype.reverse 
method. Your implementation should differ from the built-in method in the following 
two ways:

- It should accept either a string or an array as an argument.
- It should return a new string or array.

Examples:

function reverse(inputForReversal) {
  // ...
}

reverse('Hello');           // "olleH"
reverse('a');               // "a"
reverse([1, 2, 3, 4]);      // [4, 3, 2, 1]
reverse([]);                // []

const array = [1, 2, 3];
reverse(array);             // [3, 2, 1]
array;                      // [1, 2, 3]

PEDAC
-----

Problem:
--------

Take string or array input and return a new string or array with the
characters or elements in reverse order.

Algorithm:
----------

Because we accept a string or an array, we will have to handle each
case separately.
- if the argument is a string we can iterate through the string and
concat each character to a new string
- if the argument is an array, iterate through the array and push each element
to a new array

*/

function reverse(element) {
  if (Array.isArray(element)) {
    console.log(arrayReversed(element));
    return arrayReversed(element);
  } else {
    console.log(stringReversed(element));
    return stringReversed(element);
  }
}

function arrayReversed(array) {
  let newArray = [];

  for (let index = array.length - 1; index >= 0; index -= 1) {
    newArray.push(array[index]);
  }

  return newArray;
}

function stringReversed(string) {
  let newString = '';
  for (let index = string.length - 1; index >= 0; index -= 1) {
    newString += string[index];
  }

  return newString;
}

reverse('Hello');           // "olleH"
reverse('a');               // "a"
reverse([1, 2, 3, 4]);      // [4, 3, 2, 1]
reverse([]);                // []

const array = [1, 2, 3];
reverse(array);             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]

// LS Solution:
// Repetition of for loop extracted by using split() and join()
// on string

function reverse(inputForReversal) {
  if (Array.isArray(inputForReversal)) {
    return reverseArray(inputForReversal);
  } else {
    return reverseString(inputForReversal);
  }
}

function reverseArray(inputForReversal) {
  const reversed = [];
  const length = inputForReversal.length;

  for (let i = 0; i < length; i += 1) {
    reversed[length - 1 - i] = inputForReversal[i];
  }

  return reversed;
}

function reverseString(inputForReversal) {
  const stringArray = inputForReversal.split('');
  return reverseArray(stringArray).join('');
}