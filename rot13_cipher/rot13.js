// JS210 Fundamentals of JavaScript for Programmers > Practice Problems: Logic and Flow Control


/*
Code Review: Rot13 Cipher
-------------------------

Rot13 ("rotate by 13 places") is a letter-substitution cipher that translates a String into a new String:

For each character in the original String:

- If the character is a letter in the modern English alphabet, change it to the character 13 positions 
later in the alphabet. Thus, a becomes n. If you reach the end of the alphabet, return to the beginning. 
Thus, o becomes b.
- Letter transformations preserve case. A becomes N while a becomes n.
- Don't modify characters that are not letters.

Write a Function, rot13, that takes a String and returns that String transformed by the rot13 cipher.

Example:

console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// logs:
Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

It's worth noting that rot13 applied twice results in the original string:

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

// logs:
Teachers open the door, but you must enter by yourself.

PEDAC
-----

Problem:

Iterate through a string and 'rotate' each character 13 places to the right
based on a 26 character alphabet.

Rules:
  Explicit
    - Only rotate characters that are in the modern English Alphabet ie. A-Z
    - preserve case; A => N, a => n
    - Performing the function twice on the string should return the original string
    
Examples: Shown above

Data Structures:

- String
- Number

Algorithm:
- declare a variable that will hold our new string
- iterate through the string character by character
- if the character is an uppercase character
  - retrieve its character code and add 13 to it
  - if the character code is above 90, substract 26 from the above value.
  - add the the character that is represented by new character code to the 
  new string
- if the character is an lowercase string, repeat the steps above except use
122 as the conditional value in which to subtract 26.
- if the character is neither upper or lower case, concat the current character
to the new string.
*/


function rot13(string) {
  let rotString = ''

  for (let index = 0; index < string.length; index += 1) {
    let currentCharCode = string.charCodeAt(index);

    if (currentCharCode >= 65 && currentCharCode <= 90) {
      currentCharCode += 13;

      if (currentCharCode > 90) {
        currentCharCode -= 26;
      }

      rotString += String.fromCharCode(currentCharCode);

    } else if (currentCharCode >= 97 && currentCharCode <= 122) {
      currentCharCode += 13;

      if (currentCharCode > 122) {
        currentCharCode -= 26;
      }

      rotString += String.fromCharCode(currentCharCode);

    } else {
      rotString += string[index];
    }
  }

  return rotString;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'))

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));