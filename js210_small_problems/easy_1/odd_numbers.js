// JS210 - Small Problems > Easy 1

/*
Odd Numbers
-----------

Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.
*/

for (let i = 1; i <= 99; i += 2) {
  console.log(i);
}

// Further Exploration
// Repeat this exercise with a technique different from the one that you used, and different from 
// the one provided. Also consider adding a way for the user to specify the limits of the odd numbers 
// logged to the console.

function oddNumbers(start = 1, end = 99) {
  if (start % 2 === 0) {
    console.log('Error. Start index must be an odd number.');  // Alternatively could have incremented start by 1 to make it odd
    return;
  }

  for (i = start; i <= end; i += 2) {
    console.log(i);
  }
}

oddNumbers();         // logs all odd numbers 1-99
oddNumbers(11, 64);   // logs all odd numbers 11-63
oddNumbers(91);       // logs all odd numbers 91-99
oddNumbers(6, 65);    // logs error message
