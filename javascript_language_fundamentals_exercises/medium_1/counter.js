// JS210 - JavaScript Language Fundamentals > Medium 1


// Counter
// -------

// What will the following code snippets log?

// Code Snippet 1

var counter = 5;
var rate = 3;
console.log('The total value is ' + String(counter * rate));

function counter(count) {
  // ...
}

// Hoisted Code:

function counter(count) {
  // ...
}

var rate;

counter = 5;
rate = 3;

console.log('The total value is ' + String(counter * rate));

// Solution 1:
/*
counter is initially defined as a function, but is reassigned by
counter = 5. counter now points the number 5. The console will log:

The total value is 15
*/


// Code Snippet 2

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

var counter = 5;
var rate = 3;

// Hoisted code:

function counter(count) {
  // ...
}

var rate;

console.log('The total value is ' + String(counter * rate));

counter = 5;
rate = 3;

// Solution 2
/*
Based on the hoisted code, the console should log:

The total value is NaN

This code: String(counter * rate) is the same as below:

String([Function: counter] * undefined) => 'NaN'
*/


// Code Snippet 3

var counter = 5;
var rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

// // Hoisted Code:

function counter(count) {
  // ...
}

var rate;

counter = 5;
rate = 3;

console.log('The total value is ' + String(counter * rate));


// Solution 3
/*
This should log 15 to the console.
*/


// Snippet 4

let counter = 5;
let rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));


// Solution 4
/*
Uncaught SyntaxError: Identifier 'counter' has already been declared

You can't declare a variable multiple times when one or more of those declarations use 
let or const. Since snippet 4 declares counter using let, it raises a SyntaxError. However, 
the error occurs on line 4 -- the function declaration -- from the original code. Since SyntaxErrors 
usually occur during the creation phase, hoisting has no direct effect on the behavior. Therefore, we 
have omitted the hoisted code snippet for snippet 4. The syntax error will occur before hoisting takes place.
/*

// LS Solution:

/*
The fundamental concepts exemplified in this exercise are hoisting, variable declarations, and function declarations.

The key thing to note about function declarations is that, like variable declarations, they result in the creation of 
a variable. A function declaration creates a variable with the same name as the function name.

Recall that hoisting works differently depending on the type of declaration. With function declarations, both the function 
name and body are hoisted, whereas, with variable declarations, only the variable name is hoisted but not the assignment.

Finally, although function and variable declarations are both hoisted, function declarations are hoisted first; any succeeding 
variable declarations with the same name (e.g., counter) are seen as duplicates. With var declarations these duplicates are 
ignored, but let declarations work a little differently (see below).
*/