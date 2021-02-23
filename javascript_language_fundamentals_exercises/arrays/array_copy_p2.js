// JS210 - JavaScript Language Fundamentals > Arrays

/*
Array Copy Part 2
-----------------

In the previous exercise, the value of the reference gets copied. For this exercise, 
only the values of the array should be copied, but not the reference. Implement two 
alternative ways of doing this.

Here is the code from the previous exercise:

let myArray = [1, 2, 3, 4];
const myOtherArray = myArray;

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);
*/

// Alternative 1

let myArray = [1, 2, 3, 4];
const myOtherArray = myArray.map(el => el);

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);

// Alternative 2

let myArray = [1, 2, 3, 4];
const myOtherArray = myArray.filter(el => el);

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);

// LS Solution:

// Alternative 1:

const myArray = [1, 2, 3, 4];
const myOtherArray = [];

for (let i = 0; i < myArray.length; i += 1) {
  myOtherArray.push(myArray[i]);
}

myArray.pop();
console.log(myArray);               // [1, 2, 3]
console.log(myOtherArray);          // [1, 2, 3, 4]

// Alternative 2;

const myArray = [1, 2, 3, 4];
const myOtherArray = myArray.slice();

myArray.pop();
console.log(myArray);               // [1, 2, 3]
console.log(myOtherArray);          // [1, 2, 3, 4]

// Student Solutions:

const myOtherArray = [...myArray];

const myOtherArray = Array.from(myArray);

var myOtherArray = [].concat(myArray);

var myOtherArray = myArray.concat();