// JS210 - Small Problems > Easy 1

/*
Ddaaiillyy ddoouubbllee
-----------------------

Write a function that takes a string argument, and returns a new string 
that contains the value of the original string with all consecutive duplicate
characters collapsed into a single character.

Examples:

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""
*/

// function crunch(string) {
//   let newString = string[0] ? string[0] : '';

//   for (let index = 1; index < string.length; index += 1) {
//     if (string[index] !== string[index - 1]) {
//       newString += string[index];
//     }
//   }

//   return newString;
// }

// crunch('ddaaiillyy ddoouubbllee');    // "daily double"
// crunch('4444abcabccba');              // "4abcabcba"
// crunch('ggggggggggggggg');            // "g"
// crunch('a');                          // "a"
// crunch('');                           // ""

// LS Solutions:

function crunch(text) {
  let index = 0;
  let crunchText = '';

  while (index <= text.length - 1) {
    if (text[index] !== text[index + 1]) {
      crunchText += text[index];
    }

    index += 1;
  }
  console.log(crunchText);
  return crunchText;
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');

// Further Exploration
/*
It's also possible to solve this using regular expressions. For a nice challenge,
give this a try with regular expressions. Can you think of any other solutions that
don't use regular expressions?
*/

function crunch2(string) {
  return string.replace(/(.)\1/g, '');
}

