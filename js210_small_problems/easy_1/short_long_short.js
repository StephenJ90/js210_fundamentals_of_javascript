// JS210 - Small Problems > Easy 1

/*
Short Long Short
----------------

Write a function that takes two strings as arguments, determines the longer of the
two strings, and then returns the result of concatenating the shorter string, the 
longer string, and the shorter string once again. You may assume that the strings 
are of different lengths.

Examples:

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"

PEDAC
-----

Problem:
--------

Take 2 strings, and concatenate the shorter string, the longer string and
shorter string to form one long string.

Rules
  Explicit:
    - order of string is short, long, short
    - input strings will be different lengths
  Implicit:
    - if one string is empty, it's used as the short string

Algorithm:
----------

Determine which string is longer
- if first string length > second string length
  - longest string = first string
  - shortest string = second string
  - else longest string = second string
  - shortest string = first string
  - Use Ternary Operator?
- concat shortest + longest + shortest

*/

function shortLongShort(firstString, secondString) {
  let longString;
  let shortString;

  if (firstString.length > secondString.length) {
    longString = firstString;
    shortString = secondString;
  } else {
    longString = secondString
    shortString = firstString
  }

  let result = shortString + longString + shortString;
  return result;
}


shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"

// LS Soluton:

function shortLongShort(string1, string2) {
  if (string1.length > string2.length) {
    return string2 + string1 + string2;
  } else {
    return string1 + string2 + string1;
  }
}