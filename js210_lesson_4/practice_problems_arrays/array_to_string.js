// JS210 Fundamentals of JavaScript for Programmers > Arrays

/*
4.

Write a function that returns a string of all the values in an array with no 
intervening content. For example, your function should return '1a4' if the 
argument is [1, 'a', 4]. Use a for loop to process the array elements in 
sequence, and coerce each value in the array to a String before concatenating 
it to the result string.
*/

const ARRAY = [1, 'a', 4];

function arrayToString(arr) {
  let string = '';

  for (let i = 0; i < arr.length; i += 1) {
    string += arr[i];
  }

  return string;
}

console.log(arrayToString(ARRAY));

// LS does this:

// string += String(arr[index]);

// to be more explicit, but because of implicit conversions in javascript
// my solution works. I should use String to be more explicit with what i'm 
// doing though. 