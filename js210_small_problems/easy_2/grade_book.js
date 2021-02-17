// JS210 - Small Problems > Easy 2

/*
Grade Book
----------

Write a function that determines the mean (average) of the three scores passed 
to it, and returns the letter associated with that grade.

Numerical score letter grade list:

90 <= score <= 100: 'A'
80 <= score < 90: 'B'
70 <= score < 80: 'C'
60 <= score < 70: 'D'
0 <= score < 60: 'F'
Tested values are all between 0 and 100. There is no need to check for negative 
values or values greater than 100.

Examples:

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"

PEDAC
-----

Problem:
--------

Calculate the average of 3 Number arguments and then output the String character
that corresponds with the range that the calculated average falls within.

Rules:
  Explicit
    - Arguments are all between 0 and 100
  Implicit
    - There are 5 possible String character outputs

Algorithm:
----------

- calculate the average of the arguments
- use a switch statement to determine what letter grade should be returned
- if the average is > 89 return 'A'
- average > 79 return 'B'
- average > 69 return 'C'
- average > 59 return 'D'
- else return 'F'
*/

function getGrade(grade1, grade2, grade3) {
  const average = ((grade1 + grade2 + grade3) / 3).toFixed(0);
  
  if (average >= 90) {
      return 'A';
    } else if (average >= 80) {
      return 'B';
    } else if (average >= 70) {
      return 'C';
    } else if (average >= 60) {
      return 'D';
    } else {
      return 'F';
    }
}

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"

// LS Solution:

function getGrade(grade1, grade2, grade3) {
  const average = (grade1 + grade2 + grade3) / 3;

  if (average >= 90 && average <= 100) {
    return 'A';
  } else if (average >= 80 && average < 90) {
    return 'B';
  } else if (average >= 70 && average < 80) {
    return 'C';
  } else if (average >= 60 && average < 70) {
    return 'D';
  } else {
    return 'F';
  }
}