// Write a function similar to the oddLengths function from Exercise 6,
// but don't use map or filter. Instead, try to use the reduce method.

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

function oddLengths(array) {
  return array.reduce((accumulator, element) => {
    if (element.length % 2 === 1) {
      accumulator.push(element.length);
    }
    return accumulator;
  }, []);
}

// OR

function oddLengths(strings) {
  return strings.reduce((filteredNumbersArray, letters) => {
    let length = letters.length;
    if (length % 2 === 1) {
      filteredNumbersArray.push(length);
    }

    return filteredNumbersArray;
  }, []);
}