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

what are the conditions that i need to check?
- if the character is uppercase
- if the character is uppercase and greater than N
- if the character is lowercase
- if the character is lowercase and greater than n
- if the character is a non-alpha character

*/

// Solution 1 Revised

const UPPERCASE_A_CHAR_CODE = 65;
const UPPERCASE_Z_CHAR_CODE = 90;
const LOWERCASE_A_CHAR_CODE = 97;
const LOWERCASE_Z_CHAR_CODE = 122;
const ROTATE_CHARACTER = 13;


function rot13(string) {
  let rotString = '';

  for (let index = 0; index < string.length; index += 1) {
    let currentCharCode = string.charCodeAt(index);

    if (currentCharCode >= UPPERCASE_A_CHAR_CODE && currentCharCode <= UPPERCASE_Z_CHAR_CODE) {
      currentCharCode += ROTATE_CHARACTER;

      if (currentCharCode > UPPERCASE_Z_CHAR_CODE) {
        currentCharCode -= 26;
      }

      rotString += String.fromCharCode(currentCharCode);

    } else if (currentCharCode >= LOWERCASE_A_CHAR_CODE && currentCharCode <= LOWERCASE_Z_CHAR_CODE) {
      currentCharCode += ROTATE_CHARACTER;

      if (currentCharCode > LOWERCASE_Z_CHAR_CODE) {
        currentCharCode -= 26;
      }

      rotString += String.fromCharCode(currentCharCode);

    } else {
      rotString += string[index];
    }
  }

  return rotString;
}

// Solution 2

const UPPER_A_CHAR_CODE = 'A'.charCodeAt();
const UPPER_Z_CHAR_CODE = 'Z'.charCodeAt();
const UPPER_N_CHAR_CODE = 'N'.charCodeAt();
const LOWER_A_CHAR_CODE = 'a'.charCodeAt();
const LOWER_Z_CHAR_CODE = 'z'.charCodeAt();
const LOWER_N_CHAR_CODE = 'n'.charCodeAt();
const ROTATIONS = 13;
const CHAR_CODE_OFFSET = 26;

function isUpperCase(charCode) {
  return (charCode >= UPPER_A_CHAR_CODE && charCode <= UPPER_Z_CHAR_CODE);
}

function isLowerCase(charCode) {
  return (charCode >= LOWER_A_CHAR_CODE && charCode <= LOWER_Z_CHAR_CODE);
}

function rotateCharCode(charCode) {
  if ((isUpperCase(charCode) && charCode >= UPPER_N_CHAR_CODE) ||
    (isLowerCase(charCode) && charCode >= LOWER_N_CHAR_CODE)) {
      return charCode + ROTATIONS - CHAR_CODE_OFFSET;
    } else if (isUpperCase(charCode) || isLowerCase(charCode)) {
      return charCode + ROTATIONS;
    } else {
      return charCode;
    }
}

function rot13(string) {
  let rotString = '';

  for (let index = 0; index < string.length; index += 1) {
    let currentCharCode = string.charCodeAt(index);

    let newCharCode = rotateCharCode(currentCharCode)
    rotString += String.fromCharCode(newCharCode);
  }

  return rotString;
}

// Solution 3:
/*
instead of working with character codes, work with the actual characters instead.
Only convert to and from the character codes when you actually need to rotate a character.

*/

const Alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const Rotate = 13;
const Alphabet_Size = 26; 

// HOW DO I GET RID OF REPETITION?!?!?!

function rotateChar(char) {  
  if (Alphabet.includes(char)) {
    return Alphabet[(Alphabet.indexOf(char) + Rotate) % Alphabet_Size];
  } else if (Alphabet.includes(char.toUpperCase())) {
    return Alphabet[(Alphabet.indexOf(char.toUpperCase()) + Rotate) % Alphabet_Size].toLowerCase();
  } else {
    return char;
  }
}

function rot13(string) {
  let rotString = '';

  for (let index = 0; index < string.length; index += 1) {
    rotString += rotateChar(string[index]);
  }

  return rotString;
}

// Solution 4:

const Alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const Rotate = 13;
const Alphabet_Size = 26; 

function newUpcaseChar(char) {
  let charCode = (Alphabet.indexOf(char) + Rotate) % Alphabet_Size;
  return Alphabet[charCode];
}

function newDowncaseChar(char) {
  let charCode = (Alphabet.indexOf(char.toUpperCase()) + Rotate) % Alphabet_Size;
  return Alphabet[charCode].toLowerCase();
}

function rotateChar(char) {
  if (char >= 'A' && char <= 'Z') {
    return newUpcaseChar(char);
  } else if (char >= 'a' && char <= 'z') {
    return newDowncaseChar(char);
  } else {
    return char;
  }
}

function rot13(string) {
  let rotString = '';

  for (let index = 0; index < string.length; index += 1) {
    rotString += rotateChar(string[index]);
  }

  return rotString;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

// LS TA Solution to end my misery

const Alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const Rotate = 13;

function rotateCharInAlphabet(char, alphabet) {
  let charIndex = alphabet.indexOf(char);
  if (charIndex === -1) {
    return char;
  } else {
    return alphabet[(charIndex + Rotate) % alphabet.length];
  }
}

function rotateChar(char) {
  let rotatedChar = rotateCharInAlphabet(char, Alphabet);
  if (rotatedChar === char) {
    let lowerChar = char.toLowerCase();
    let lowerAlphabet = Alphabet.toLowerCase();
    rotatedChar = rotateCharInAlphabet(lowerChar, lowerAlphabet);
  }

  return rotatedChar;
}

function rot13(string) {
  let rotString = '';

  for (let index = 0; index < string.length; index += 1) {
    rotString += rotateChar(string[index]);
  }

  return rotString;
}