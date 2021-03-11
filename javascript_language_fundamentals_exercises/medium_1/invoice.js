// JS210 - JavaScript Language Fundamentals > Medium 1

// Invoice
// -------

/*
The invoiceTotal function in the code below computes the total amount for 
an invoice containing four "line items". How can you refactor the function 
so that it will work with invoices containing any number of line items?
*/

function invoiceTotal(amount1, amount2, amount3, amount4) {
  return amount1 + amount2 + amount3 + amount4;
}

invoiceTotal(20, 30, 40, 50);          // works as expected
invoiceTotal(20, 30, 40, 50, 40, 40);  // does not work; how can you make it work?

// Solution:

function invoiceTotal(...amounts) {
  return amounts.reduce(function(accumulator, currentValue, currentIndex, array) {
    return accumulator + currentValue;
  })
}

console.log(invoiceTotal(20, 30, 40, 50));          // works as expected
console.log(invoiceTotal(20, 30, 40, 50, 40, 40)); 

// OR

function invoiceTotal(...args) {
  let total = 0;

  for (let i = 0; i < args.length; i += 1) {
    total += args[i];
  }

  return total;
}