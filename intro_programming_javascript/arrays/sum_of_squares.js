// Use reduce to compute the sum of the squares of all of the numbers in an array:

function sumOfSquares(array) {
  return array.reduce((accumulator, element) => accumulator + (element * element), 0);
}

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83

// OR

function sumOfSquares(numbers) {
  return numbers.reduce((accumulator, number) => {
    return accumulator + number * number;
  }, 0);
}