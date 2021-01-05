// Counting the Number of Characters

/*
In this exercise, you will write a program that asks the user for a phrase, then outputs 
the number of characters in that phrase. Go over the documentation for String to find 
an appropriate method to use.
*/

/*
Please enter a phrase: walk
// console output
There are 4 characters in "walk".

Please enter a phrase: walk, don't run
// console output
There are 15 characters in "walk, don't run".
*/

// Response:

const readlineSync = require("readline-sync");

console.log('Please enter a phrase:')
let phrase = readlineSync.prompt();
let phraseCharacterCount = phrase.length;

console.log(`There are ${phraseCharacterCount} characters in "${phrase}"`);

// LS Solution: This solution does not work in node.js, needs readline-sync.
// It works in the browser console.

const input = prompt('Please enter a phrase:');
const numberOfCharacters = String(input.length);

console.log(`There are ${numberOfCharacters} characters in '${input}'.`);

// Further Exploration:

/*
The solution counts all the characters in the phrase, including spaces. Refactor it so 
that it ignores spaces.

Since the refactored program shouldn't count spaces, you can use the String.prototype.replace 
method to return a new string with all spaces removed from it. Go over the documentation to 
see how you can do this. The thing to note here is that the first argument passed to replace 
can be a regular expression pattern.

As an added challenge, further refactor the solution so that it only counts alphabetic characters.
*/

let readlineSync = require('readline-sync');
let input = readlineSync.question('Please enter a phrase:\n')

inputModified = input.replace(/[^a-z]/gi, '');

console.log(`There are ${inputModified.length} alpha characters in "${input}".`);







