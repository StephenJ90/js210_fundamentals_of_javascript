// JS210 - JavaScript Language Fundamentals > Medium 1


// Product of Sums
// ---------------

/*
The productOfSums function shown below is expected to return the product of 
the sums of two arrays of numbers. Read through the following code. Will it 
produce the expected result? Why or why not?
*/

function productOfSums(array1, array2) {
  let result = total(array1) * total(array2);
  console.log(result);
  return result;
}

function total(numbers) {
  let sum;

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  sum;
}

productOfSums([1,2,3,4,5], [6,7,8,9]);

// Solution:
/*
Returns NaN

On the first line inside of the total function, let sum is declared, but not
initialized. So inside the for loop when sum += numbers[i], the addition raises
an error because sum does not have a value. Based on that, I don't think the code
will work. To fix it, rewrite to let sum = 0;

After testing the code, I realized that on the last line of the total function,
the code also needs a return call to it would read return sum;

LS Explantion:

This code has two issues. The first is that the total function does not have an 
explicit return statement, and thus returns undefined. Since total returns undefined, 
the expression total(array1) * total(array2) becomes undefined * undefined, which evaluates 
to NaN. The second issue is that in the total function, the sum variable is not explicitly 
assigned a value, which means that it has a value of undefined by default. Therefore, at the 
end of each iteration of the loop, sum is assigned a value of NaN because the expression 
undefined + numbers[i] evaluates to NaN.
*/