// JS210 Fundamentals of JavaScript for Programmers > Arrays > Array Operations

/*
Join
----

Write a function named join that accepts two arguments: an Array and a String. 
The function should coerce each value in the Array to a String, and then join 
those values together using the second argument as a separator. You may assume 
that a separator will always be passed.

You can call the String function on any JavaScript value to get its String 
representation.

join(['bri', 'tru', 'wha'], 'ck ');       // 'brick truck wha'
join([1, 2, 3], ' and ');                 // '1 and 2 and 3'
*/

function join(array, string) {
  let joinedString = '';

  for (let index = 0; index < array.length; index += 1) {
    joinedString += String(array[index])
    if (index === array.length - 1) {
      break;
    }
    
    joinedString += string;
  }

  return joinedString;
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'

// LS Solution:

function join(array, separator) {
  let result = '';

  for (let index = 0; index < array.length; index += 1) {
    result += String(array[index]);

    if (index < array.length - 1) {
      result += separator;
    }
  }

  return result;
}