// JS210 - JavaScript Language Fundamentals > Medium 1


// Selected Columns

/*
The getSelectedColumns function selects and extracts specific columns to a 
new array. Currently, the function is not producing the expected result. Go 
over the function and the sample runs shown below. What do you think the problem is?
*/

function getSelectedColumns(numbers, cols) {
  var result = [];

  for (var i = 0, length = numbers.length; i < length; i += 1) {
    for (var j = 0, length = cols.length; j < length; j += 1) {
      if (!result[j]) {
        result[j] = [];
      }

      result[j][i] = numbers[i][cols[j]];
    }
  }

  console.log(result);
  return result;
}

// given the following arrays of number arrays
const array1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const array2 = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];

// `array1` in row/column format
// [[1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]]

getSelectedColumns(array1, [0]);     // [[1]];            expected: [[1, 4, 7]]
getSelectedColumns(array1, [0, 2]);  // [[1, 4], [3, 6]]; expected: [[1, 4, 7], [3, 6, 9]]
getSelectedColumns(array2, [1, 2]);  // [[2, 2], [3, 3]]; expected: [[2, 2, 2], [3, 3, 3]]

// Solution:
/*
The problem is that the variable length is assigned to numbers.length, and then
reassigned on the lext line to cols.length. We are declaring length with the var 
keyword, which gives it function scope. We can declare the variables using let. Variables declared 
with let have block scope, so the length variable in the inner loop is different 
from the length variable in the outer loop. We could also rename each length variable
to something unique, like numbersLength and colsLength.
*/