// JS210 Fundamentals of JavaScript for Programmers > Objects > Practice Problem

// Welcome Stranger
// ----------------

/*
Write a function that takes two arguments, an array and an object. The array will 
contain two or more elements that, when combined with spaces, produce a person's 
full name. The object will contain two keys, title and occupation, and suitable 
values for both items. Your function should log a greeting to the console that uses 
the person's full name, and mentions the person's title and occupation.

Example:

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

// console output
Hello, John Q Doe! Nice to have a Master Plumber around.
*/

function greetings(array, object) {
  let name = '';

  for (let i = 0; i < array.length; i += 1) {
    name += array[i];
    if (i < array.length - 1) {
      name += ' ';
    }
  }

  [title, occupation] = Object.values(object);

  console.log(`Hello, ${name}! Nice to have a ${title} ${occupation} around.`);
}

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

// LS Solution:

function greetings(name, status) {
  let nameGreet = 'Hello, ' + name.join(' ') + '!';
  let statusGreet = 'Nice to have a ' + status.title + ' ' + status.occupation + ' around.';

  console.log(nameGreet + ' ' + statusGreet);
}