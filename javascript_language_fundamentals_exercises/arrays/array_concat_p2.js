

/*
Array Concat Part 2
-------------------

The concat function from the previous exercise could only concatenate a 
maximum of two arrays. For this exercise, you are going to extend that 
functionality. Refactor the concat function to allow for the concatenation 
of two or more arrays or values.

Examples:

concat([1, 2, 3], [4, 5, 6], [7, 8, 9]);    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
concat([1, 2], 'a', ['one', 'two']);        // [1, 2, "a", "one", "two"]
concat([1, 2], ['three'], 4);               // [1, 2, "three", 4]
*/

function concat(...args) {
  const newArray = [];
  
  for (let argIndex = 0; argIndex < args.length; argIndex += 1) {
    let currentArg = args[argIndex];
    if (Array.isArray(currentArg)) {
      for (let arrayIndex = 0; arrayIndex < currentArg.length; arrayIndex += 1) {
        newArray.push(currentArg[arrayIndex]);
      }
    } else {
      newArray.push(currentArg);
    }
  }

  return newArray;
}

concat([1, 2, 3], [4, 5, 6], [7, 8, 9]);    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
concat([1, 2], 'a', ['one', 'two']);        // [1, 2, "a", "one", "two"]
concat([1, 2], ['three'], 4);               // [1, 2, "three", 4]

// Student Solution:

function concat(...args) {
  return Array.from(args).flat();
}