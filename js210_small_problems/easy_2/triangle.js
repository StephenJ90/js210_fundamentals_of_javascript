// JS210 - Small Problems > Easy 2

/*
Right Triangles
---------------

Write a function that takes a positive integer, n, as an argument, and logs
a right triangle whose sides each have n stars. The hypotenuse of the triangle 
(the diagonal side in the images below) should have one end at the lower-left of 
the triangle, and the other end at the upper-right.

Examples:

triangle(5);

    *
   **
  ***
 ****
*****

triangle(9);

        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********

PEDAC
-----

Problem:
--------

Take the input number and output a right triangle start with n - 1 spaces
and one star. Continue this process until n stars have been output.

Rules:
  Explicit
    - integer argument will always be positive
    - hypotneuse should be from top right to bottom left

Algorithm:
----------

- declare a spaces variable to count how many spaces will go on each line
- declare a stars variable to count how many starts will go on each line
- iterate from n down to 0
  - on each iteration output n - 1 spaces and 1 + star

*/

function spacesOutput(numberOfSpaces) {
  let spaces = '';

  for (let index = 1; index <= numberOfSpaces; index += 1) {
    spaces += ' ';
  }
  return spaces;
}

function starsOutput(numberOfStars) {
  let stars = '';

  for (let index = 0; index < numberOfStars; index += 1) {
    stars += '*';
  }

  return stars;
}

function triangle(maxStars) {
  for (let index = 1; index <= maxStars; index += 1) {
    console.log(spacesOutput(maxStars - index) + starsOutput(index));
  }
}

triangle(5);
triangle(9);

// LS Solution:

function triangle(height) {
  let stars = 1;
  let spaces = height - 1;

  for (let i = 0; i < height; i += 1) {
    console.log(repeat(' ', spaces) + repeat('*', stars));
    stars += 1;
    spaces -= 1;
  }
}

function repeat(char, count) {
  let repeated = '';

  for (let i = 0; i < count; i += 1) {
    repeated += char;
  }

  return repeated;
}