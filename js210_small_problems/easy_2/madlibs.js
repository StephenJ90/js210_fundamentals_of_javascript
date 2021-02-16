// JS210 - Small Problems > Easy 2

/*
Madlibs
-------

Madlibs is a simple game where you create a story template with "blanks" for 
words. You, or another player, then construct a list of words and place them 
into the story, creating an often silly or funny story as a result.

Create a simple madlib program that prompts for a noun, a verb, an adverb, and 
an adjective, and injects them into a story that you create.

Example:

Enter a noun: dog
Enter a verb: walk
Enter an adjective: blue
Enter an adverb: quickly

// console output
Do you walk your blue dog quickly? That's hilarious!

PEDAC
-----

Problem:
--------

Prompt a user for multiple inputs, take those inputs and output them as part
as a longer string.

Rules:
  Explicit
    - prompt the user for 4 inputs (noun, verb, adjective, adverb)

Algorithm:
----------

- prompt a user for:
  - noun
  - verb
  - adjective
  - adverb
- take those inputs and use string interpolation in the output
*/

let readlineSync = require('readline-sync');

const Noun = readlineSync.question('Enter a noun: ');
const Verb = readlineSync.question('Enter a verb: ');
const Adjective = readlineSync.question('Enter an adjective: ');
const Adverb = readlineSync.question('Enter an adverb: ');

const Text = `Do you ${Verb} your ${Adjective} ${Noun} ${Adverb}? That's hilarious!`;

console.log(Text);

// LS Solution:

const noun = prompt('Enter a noun:');
const verb = prompt('Enter a verb:');
const adjective = prompt('Enter an adjective:');
const adverb = prompt('Enter an adverb:');

const sentence1 = `Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`;
const sentence2 = `The ${adjective} ${noun} ${verb}s ${adverb} over the lazy dog.`;
const sentence3 = `The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`;

console.log(sentence1);
console.log(sentence2);
console.log(sentence3);