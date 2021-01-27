// JS210 Fundamentals of JavaScript for Programmers > Practice Problems: Logic and Flow Control

/*
Index of Substring
------------------

Write two functions that each take two strings as arguments. Their expected behaviors are as follows:

The indexOf function searches for the first instance of a substring in firstString that matches the 
string secondString, and returns the index of the character where that substring begins.

The lastIndexOf function searches for the last instance of a substring in firstString that matches
the string secondString, and returns the index of the character where that substring begins.

Both functions return -1 if firstString does not contain the substring specified by secondString.

Examples:

indexOf('Some strings', 's');                      // 5
indexOf('Blue Whale', 'Whale');                    // 5
indexOf('Blue Whale', 'Blute');                    // -1
indexOf('Blue Whale', 'leB');                      // -1

lastIndexOf('Some strings', 's');                  // 11
lastIndexOf('Blue Whale, Killer Whale', 'Whale');  // 19
lastIndexOf('Blue Whale, Killer Whale', 'all');    // -1
*/

function indexOf(firstString, secondString) {
  let secondStringLength = secondString.length;
  let firstStringLength = firstString.length;

  for (let outerIndex = 0; outerIndex <= firstStringLength - secondStringLength; outerIndex++) {
    let substring = '';

    for (let innerIndex = 0; innerIndex < secondStringLength; innerIndex++) {
      substring += firstString[outerIndex + innerIndex];
    }

    if (substring === secondString) {
      console.log(outerIndex);
      return outerIndex;
    }
  }

  console.log(-1);
  return -1;
}

function lastIndexOf(firstString, secondString) {
  let secondStringLength = secondString.length;
  let firstStringLength = firstString.length;
  let stringIndex;

  for (let outerIndex = 0; outerIndex <= firstStringLength - secondStringLength; outerIndex++) {
    let substring = '';

    for (let innerIndex = 0; innerIndex < secondStringLength; innerIndex++) {
      substring += firstString[outerIndex + innerIndex];
    }

    if (substring === secondString) {
      stringIndex = outerIndex;
    }
  }

  if (stringIndex) {
    console.log(stringIndex);
    return stringIndex;
  } else {
    console.log(-1);
    return -1;
  }
}

indexOf('Some strings', 's');   
indexOf('Blue Whale', 'Whale');
indexOf('Blue Whale', 'Blute');
indexOf('Blue Whale', 'leB');

lastIndexOf('Some strings', 's');                  // 11
lastIndexOf('Blue Whale, Killer Whale', 'Whale');  // 19
lastIndexOf('Blue Whale, Killer Whale', 'all');    // -1


// LS Solution:
// Very Similar solution except that I compare strings while LS uses matchCount
// to compare to the length of the secondString.

function indexOf(firstString, secondString) {
  let limit = firstString.length - secondString.length;

  for (let indexFirst = 0; indexFirst <= limit; indexFirst += 1) {
    let matchCount = 0;

    for (let indexSecond = 0; indexSecond < secondString.length; indexSecond += 1) {
      if (firstString[indexFirst + indexSecond] === secondString[indexSecond]) {
        matchCount += 1;
      } else {
        break;
      }
    }

    if (matchCount === secondString.length) {
      return indexFirst;
    }
  }

  return -1;
}

function lastIndexOf(firstString, secondString) {
  let limit = firstString.length - secondString.length;

  for (let indexFirst = limit; indexFirst >= 0; indexFirst -= 1) {
    let matchCount = 0;

    for (let indexSecond = 0; indexSecond < secondString.length; indexSecond += 1) {
      if (firstString[indexFirst + indexSecond] === secondString[indexSecond]) {
        matchCount += 1;
      } else {
        break;
      }
    }

    if (matchCount === secondString.length) {
      return indexFirst;
    }
  }

  return -1;
}