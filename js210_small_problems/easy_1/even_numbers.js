// JS210 - Small Problems > Easy 1

/*
Even Numbers
------------

Log all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line.
*/

for (let i = 2; i < 100; i += 2) {
  console.log(i);
}

// LS Solution:
// Technically I did not iterate over all the numbers specified since my code
// starts from 2.

for (let i = 1; i < 100; i += 1) {
  if (i % 2 === 1) {
    continue;
  }

  console.log(i);
}