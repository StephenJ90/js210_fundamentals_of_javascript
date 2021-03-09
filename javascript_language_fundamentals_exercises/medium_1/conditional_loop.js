// JS210 - JavaScript Language Fundamentals > Medium 1


// Conditional Loop

/*
The following program is expected to log each number between 0 and 9 (inclusive) 
that is a multiple of 3. Read through the code shown below. Will it produce the 
expected result? Why or why not?
*/

let i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  } else {
    i += 1;
  }
}

/*
The code will not produce the expected result because the first part
of the conditional if statement when i % 3 === 0 will always be true and since
the variable i does not get incremented within that conditional, the code will
be stuck in a continuous loop, logging the value 0 to console for eternity.

The code could be fixed with the following:
*/

// solution 1
let i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  }

  i += 1;
}


// solution 2
for (let i = 0; i < 10; i += 1) {
  if (i % 3 === 0) {
    console.log(i);
  }
}