// JS210 Fundamentals of JavaScript for Programmers > Arrays

/*
2. 

Create a function named rollCall that takes an array of first names as an 
argument and logs all the names to the console, one name per line. You should 
log the names in the same sequence that they appear in the array. Use a for 
loop to process the array.
*/

function rollCall(names) {
  for (let i = 0; i < names.length; i += 1) {
    console.log(names[i]);
  }
}

rollCall(['Stephen', 'Johnny', 'Bob', 'Harold']);

// LS Solution:

const NAMES = ['Steve', 'Martha', 'Pat'];

function rollCall(arr) {
  for (let index = 0; index < arr.length; index += 1) {
    console.log(arr[index]);
  }
}

rollCall(NAMES);