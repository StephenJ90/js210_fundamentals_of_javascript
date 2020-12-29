/*

Use map and filter to first determine the lengths of all the elements in an 
array of string values, then discard the even values (keep the odd values).

*/

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(array) {
  let newArray;
  newArray = array.map(function(string) {
    return string.length;
  })

  return newArray.filter(function(length) {
    if (length % 2 === 1) {
      return length;
    }
  })
};

console.log(oddLengths(arr)); // => [1, 5, 3]


// OR

function oddLengths(strings) {
  let lengths = arr.map((letters) => letters.length);
  let oddLengths = lengths.filter((number) => number % 2 === 1);
  return oddLengths;
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));