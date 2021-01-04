// 1. The result of the following calculation is a string. Using type coercion, 
// correct the calculation to produce the numeric result instead.

let x = '13';
let y = 9;

console.log(x + y);

// Response:

console.log(Number(x) + y);

// LS solution:

console.log(parseInt(x, 10) + y);



// 2. Using the same block of JavaScript, change the addition operator to a multiplication 
// operator and leave x as a string. Will the result be a string or a number?

let x = '13';
let y = 9;

console.log(x * y);

// Response:
// The result will be a number. In Javascript, the other aritmetic operators
// (not +) are only defined for numbers, so Javascript converts both operands
// to numbers.

// LS solution:
// Unlike the addition symbol, which both adds numbers and concatenates strings, the other 
// mathematical symbols all try to convert any strings to numbers before performing the 
// calculation. If any string cannot be converted to a number, the calculation will result in NaN.



// 3. Convert the three parts of this telephone number to strings to produce a valid phone number.

let npa = 212;
let nxx = 555;
let num = 1212;

console.log(npa + nxx + num);

// Response:

console.log(String(npa) + '-' + String(nxx) + '-' + String(num));

// LS Solution:

npa = '' + npa;
nxx = nxx + '';
num += '';

console.log(npa + nxx + num);  // 2125551212

// Recall, that this approach to converting a number to a string is not the recommended since the intent is not clear. 
// Take this as input for when you read code in the wild.



// 4. You can also use the String constructor to create Strings from numbers. This is a function that takes an argument 
// and converts it to a string. Try it using the previous block of code; wrap each number in a call to String.

// Response is same as Q3:

console.log(String(npa) + '-' + String(nxx) + '-' + String(num));

// LS Solution:

console.log(String(npa) + String(nxx) + String(num));



// 5. The toString method is yet another way to convert values to strings. Try using toString to convert a 
// boolean and an array to a String. Did you get the result you expected?

let bool = true;
let arr = [1, 2, 3];

// Response:

bool = bool.toString();
console.log(bool);
arr = arr.toString();
console.log(arr);

// LS Solution:

console.log(bool.toString());  // "true"
console.log(arr.toString());   // "1,2,3"