// JS210 - Small Problems > Easy 3


// Palindromic Number
// ------------------
/*
Write a function that returns true if its integer argument is palindromic, 
or false otherwise. A palindromic number reads the same forwards and backwards.

Examples:

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true
*/

function isPalindrome(text) {
  return text === text.split('').reverse().join('');
}

function isPalindromicNumber(number) {
  return isPalindrome(String(number));
}

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true