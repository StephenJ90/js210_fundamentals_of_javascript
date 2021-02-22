// JS210 Fundamentals of JavaScript for Programmers > Arrays > Practice Problem: Intermediate Array Uses

/*
1. Write a function that creates and returns a new array from its array argument. 
The new array should contain all values from the argument array whose positions 
have an odd index.

function oddElementsOf(arr) {
  // …
}

let digits = [4, 8, 15, 16, 23, 42];

oddElementsOf(digits);    // returns [8, 16, 42]
*/

function oddElementsOf(arr) {
  let newArray = [];

  for (let index = 0; index < arr.length; index += 1) {
    if (index % 2 === 1) {
      newArray.push(arr[index]);
    }
  }

  return newArray;
}

let digits = [4, 8, 15, 16, 23, 42];

console.log(oddElementsOf(digits));    // returns [8, 16, 42]

// LS Solution:
// Only iterates through odd indices; avoids conditional

function oddElementsOf(arr) {
  let oddElements = [];
  let length = arr.length;

  for (let index = 1; index < length; index += 2) {
    oddElements.push(arr[index]);
  }

  return oddElements;
}


/*
2. Write a function that takes an array argument and returns a new array that 
contains all the argument's elements in their original order followed by all 
the argument's elements in reverse order.
*/

function orderReverseOrder(arr) {
  let newArray = [];

  for (let index = 0; index < arr.length; index += 1) {
    newArray.push(arr[index]);
  }

  for (let index = arr.length - 1; index >= 0; index -= 1) {
    newArray.push(arr[index]);
  }

  return newArray;
}

let digits = [1, 2, 3, 4, 5];

console.log(orderReverseOrder(digits));
console.log(digits);

// LS Solution:

function mirroredArray(arr) {
  return arr.concat(arr.slice().reverse());
}

let digits = [4, 8, 15, 16, 23, 42];
mirroredArray(digits);  // returns [4, 8, 15, 16, 23, 42, 42, 23, 16, 15, 8, 4]


/*
3. Use the array sort method to create a function that takes an array of numbers and 
returns a new array of the numbers sorted in descending order. Do not alter the original 
array.

function sortDescending(arr) {
  // …
}

let array = [23, 4, 16, 42, 8, 15];
let result = sortDescending(array);  // returns [42, 23, 16, 15, 8, 4]
console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
console.log(array);                  // logs    [23, 4, 16, 42, 8, 15]
*/

function sortDescending(arr) {
  arrCopy = arr.slice()
  return arrCopy.sort((a, b) => b - a);
}

let array = [23, 4, 16, 42, 8, 15];
let result = sortDescending(array);  // returns [42, 23, 16, 15, 8, 4]
console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
console.log(array);                  // logs    [23, 4, 16, 42, 8, 15]


/*
4. Write a function that takes an array of arrays as an argument, and returns a new array that 
contains the sums of each of the sub-arrays.

function matrixSums(arr) {
  // …
}

matrixSums([[2, 8, 5], [12, 48, 0], [12]]);  // returns [15, 60, 12]
*/

const reducer = (accumlator, currentValue) => accumlator + currentValue;

function matrixSums(arr) {
  let newArray = arr.map(function(subArray) {
    return subArray.reduce(reducer)
  });

  return newArray;
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]

// LS Solution:

function matrixSums(arr) {
  let sums = [];
  let outerLen = arr.length;

  for (let mainIndex = 0; mainIndex < outerLen; mainIndex += 1) {
    let currentSum = 0;
    let innerLen = arr[mainIndex].length;
    for (let subIndex = 0; subIndex < innerLen; subIndex += 1) {
      currentSum += arr[mainIndex][subIndex];
    }

    sums.push(currentSum);
  }

  return sums;
}

matrixSums([[2, 8, 5], [12, 48, 0], [12]]);  // returns [15, 60, 12]


/*
5. Write a function that takes an array, and returns a new array with duplicate elements removed.

function uniqueElements(arr) {
  // …
}

uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]);  // returns [1, 2, 4, 3, 5]

algorithm:

take an array and return a new array with no duplicate values.
  - create a new arr
  - push the first value of the input array into the new array
  - iterate through the input array starting at the 2nd value
    - if the new array does not contain the current element
    push that value to the new arr
    - otherwise go to next iteration (value) 
*/

function uniqueElements(arr) {
  let uniqueValues = [];
  uniqueValues.push(arr[0]);

  for (let index = 1; index < arr.length; index += 1) {
    if (!uniqueValues.includes(arr[index])) {
      uniqueValues.push(arr[index]);
    }
  }

  return uniqueValues;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));  // returns [1, 2, 4, 3, 5]

// LS Solution:
// indexOf returns -1 if an element is not found in the array

function uniqueElements(arr) {
  let uniques = [];
  let len = arr.length;

  for (let index = 0; index < len; index += 1) {
    if (uniques.indexOf(arr[index]) === -1) {
      uniques.push(arr[index]);
    }
  }

  return uniques;
}

uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]);  // returns [1, 2, 4, 3, 5]