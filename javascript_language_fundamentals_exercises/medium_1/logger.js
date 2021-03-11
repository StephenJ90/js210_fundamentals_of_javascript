// JS210 - JavaScript Language Fundamentals > Medium 1


// Logger
// ------

// Read through the following code. Why will it log 'debugging'?

function debugIt() {
  const status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();

// Solution:
/*
On line 4, the status variable has a value of 'debugging' because of 
JavaScript's lexical scoping rules.

The debugIt function defines a local variable named status and a function 
named logger. logger is an inner (nested) function, so it has access to 
any variables declared in the scope of its outer (parent) function, debugIt, 
due to lexical scoping rules.
*/