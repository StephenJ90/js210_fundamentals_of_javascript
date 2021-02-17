// JS210 - Small Problems > Easy 2

/*
Clean Up the Words
------------------
Given a string that consists of some words and an assortment of non-alphabetic 
characters, write a function that returns that string with all of the non-alphabetic 
characters replaced by spaces. If one or more non-alphabetic characters occur in a row, 
you should only have one space in the result (i.e., the result string should never have 
consecutive spaces).

Example:

cleanUp("---what's my +*& line?");    // " what s my line "

PEDAC
-----

Problem:
--------

Take a String argument and remove all non-alphabetic characters and replace with
space characters. If there are consecutive non-alpha characters, there should also 
be only one space character to replace them. 

Algorithm:
----------

Remove all non-alpha characters from the string and repalce them with space
characters. Then go through the string again and remove consecutive space
characters. 

- create a for loop to iterate through each character of the string
- if a character is alphabetic, add that character to the new string
- if the character is non-alphabetic, add a space character to the string
unless the last character in the new string is a space character
- 

*/

function isAlphabetic(char) {
  const Alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  return Alphabet.includes(char);
}

function cleanUp(text) {
  const Regex = / {2,}/g;
  let cleanString = '';

  for (let index = 0; index < text.length; index += 1) {
    let currentChar = text[index];

    if (isAlphabetic(currentChar)) {
      cleanString += currentChar;
    } else {
      cleanString += ' ';
    }
  }

  return cleanString.replace(Regex, ' ');
}

cleanUp("---what's my +*& line?");    // " what s my line "

// LS Solution:

function cleanUp(text) {
  let cleanText = '';

  for (let i = 0; i < text.length; i += 1) {
    if (isLowerCaseLetter(text[i]) || isUpperCaseLetter(text[i])) {
      cleanText += text[i];
    } else if (cleanText[cleanText.length - 1] !== ' ') {
      cleanText += ' ';
    }
  }

  return cleanText;
}

const isLowerCaseLetter = (char) => char >= 'a' && char <= 'z';

const isUpperCaseLetter = (char) => char >= 'A' && char <= 'Z';