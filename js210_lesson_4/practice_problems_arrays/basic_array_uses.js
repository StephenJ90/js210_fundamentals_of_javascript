// JS210 Fundamentals of JavaScript for Programmers > Arrays > Practice Problem: Basic Array Uses

/*
1. Write a function that returns the first element of an array passed in as an argument.

function firstElementOf(arr) {
  // …
}

firstElementOf(['U', 'S', 'A']);  // returns "U"
*/

function firstElementOf(arr) {
  return arr[0];
}

firstElementOf(['U', 'S', 'A']);


/*
2. Write a function that returns the last element of an array passed in as an argument.

function lastElementOf(arr) {
  // …
}

lastElementOf(['U', 'S', 'A']);  // returns "A"
*/

function lastElementOf(arr) {
  console.log(arr[arr.length - 1]);
  return arr[arr.length - 1];
}

lastElementOf(['U', 'S', 'A']);


/*
3. Write a function that accepts two arguments, an array and an integer index 
position, and returns the element at the given index. What happens if the 
index is greater than the length of the array? What happens if it is a negative 
integer?

function nthElementOf(arr, index) {
  // …
}

let digits = [4, 8, 15, 16, 23, 42];

nthElementOf(digits, 3);   // returns 16
nthElementOf(digits, 8);   // what does this return?
nthElementOf(digits, -1);  // what does this return?
*/

function nthElementOf(arr, index) {
  return arr[index];
}

let digits = [4, 8, 15, 16, 23, 42];

nthElementOf(digits, 3);   // returns 16
nthElementOf(digits, 8);   // returns undefined
nthElementOf(digits, -1);  // returns undefined


/*
4. Can we insert data into an array at a negative index? If so, why is this possible?

In node notice this behaviour:
> arr = [1,2,3,4]
[ 1, 2, 3, 4 ]
> arr[-3] = -16;
-16
> arr
[ 1, 2, 3, 4, '-3': -16 ]
> arr.length
4

Yes, we can do this since all arrays are objects in JavaScript. 
There is a slight nuance here: the added element becomes part of the "array object," 
but it isn't properly one of the array elements. The digits.length property, for instance, 
remains unchanged.
*/


/*
5. Write a function that accepts an array as the first argument and an integer 
value, count, as the second. It should return a new array that contains the first 
count elements of the array.

function firstNOf(arr, count) {
  // …
}

let digits = [4, 8, 15, 16, 23, 42];
firstNOf(digits, 3);    // returns [4, 8, 15]
*/

function firstNOf(arr, count) {
  let newArray = [];

  for (let index = 0; index < count; index += 1) {
    newArray.push(arr[index]);
  }
  console.log(newArray);
  return newArray;
}

let digits = [4, 8, 15, 16, 23, 42];
firstNOf(digits, 3);

// LS Solution:

function firstNOf(arr, count) {
  return arr.slice(0, count);
}


/*
6. Write a function like the previous one, except this time return the last 
count elements as a new array.

function lastNOf(arr, count) {
  // …
}

let digits = [4, 8, 15, 16, 23, 42];
lastNOf(digits, 3);    // returns [16, 23, 42]
*/

function lastNOf(arr, count) {
  return arr.slice(arr.length - count);
}

let digits = [4, 8, 15, 16, 23, 42];
lastNOf(digits, 3);


/*
7. Using the function from the previous problem, What happens if you pass a 
count greater than the length of the array? How can you fix the function so it 
returns a new instance of the entire array when count is greater than the array 
length?

When you pass a count greater than the array length, the arithmetic in the 
function becomes a negative value. slice interprets a negative value as a 
position relative to the end of the array. Thus, if we pass a count of 9 with 
our digits array, lastNOf calls slice with an argument of -3. slice thus returns 
the final three elements of digits.

To change this behavior, we can calculate the starting position, then adjust it to 
0 if it is negative. We can pass the resulting value to slice, which returns a new 
copy of the array when the value is 0.
*/

function lastNOf(arr, count) {
  let index = arr.length - count;

  if (index < 0) {
    index = 0;
  }

  return arr.slice(index);
}

let digits = [4, 8, 15, 16, 23, 42];
lastNOf(digits, 8);  // returns [4, 8, 15, 16, 23, 42]


/*
8 . Write a function that accepts two arrays as arguments and returns an 
array with the first element from the first array and the last element from 
the second array.

function endsOf(beginningArr, endingArr) {
  // …
}

endsOf([4, 8, 15], [16, 23, 42]);  // returns [4, 42]
*/

function endsOf(beginningArr, endingArr) {
  return [beginningArr[0], endingArr[endingArr.length - 1]];
}

endsOf([4, 8, 15], [16, 23, 42]);