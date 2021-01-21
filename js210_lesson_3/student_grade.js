// JS210 Fundamentals of JavaScript for Programmers > Practice Problems: Logic and Flow Control

/*
Student Grade
-------------

Write a program to determine a student’s grade based on the average of three scores you get from the user. Use these rules to compute the grade:

If the average score is greater than or equal to 90 then the grade is 'A'
If the average score is greater than or equal to 70 and less than 90 then the grade is 'B'
If the average score is greater than or equal to 50 and less than 70 then the grade is 'C'
If the average score is less than 50 then the grade is 'F'
You may assume that all input values are valid positive integers.

Example:

// prompts to get the 3 scores
Enter score 1: 90
Enter score 2: 50
Enter score 3: 78

// log to the console
Based on the average of your 3 scores your letter grade is "B".
*/

let readlineSync = require('readline-sync');

function calculateGrade(score) {
  let message = 'Based on the average of your 3 scores your letter grade is ';
  if (score > 89) {
    console.log(message + "'A'");
  } else if (score > 69) {
    console.log(message + "'B'");
  } else if (score > 49) {
    console.log(message + "'C'");
  } else {
    console.log(message + "'F'");
  }
}

let score1 = readlineSync.question('Enter score 1: \n');
let score2 = readlineSync.question('Enter score 2: \n');
let score3 = readlineSync.question('Enter score 3: \n');

let average = (Number(score1) + Number(score2) + Number(score3)) / 3;
calculateGrade(average);


// LS Solution:

let score1 = Number(prompt('Enter score 1:'));
let score2 = Number(prompt('Enter score 2:'));
let score3 = Number(prompt('Enter score 3:'));
let total = score1 + score2 + score3;
let average = total / 3;

let grade = 'F';
if (average >= 90) {
  grade = 'A';
} else if (average >= 70) {
  grade = 'B';
} else if (average >= 50) {
  grade = 'C';
}

console.log('Based on the average of your 3 scores your letter grade is "' +
            grade + '".');


// Further Exploration:

function calculateGrade(allScores) {
  let reducer = (accumulator, currentValue) => accumulator + currentValue;
  let totalScore = allScores.reduce(reducer);
  let average = totalScore / allScores.length;

  let grade = 'F';
  if (average >= 90) {
    grade = 'A';
  } else if (average >= 70) {
    grade = 'B';
  } else if (average >= 50) {
    grade = 'C';
  }

  return grade;
}

let readlineSync = require('readline-sync');
let scores = [];

let answer;

do {
  let score = readlineSync.question('Enter score: \n');
  scores.push(Number(score));
  console.log(scores);

  answer = readlineSync.question('Would you like to enter another score? (y/n)\n');
  console.log(answer);
} while (answer === 'y');

let numberOfScores = scores.length;
console.log('Based on the average of your ' + numberOfScores + ' scores your letter grade is "' +
            calculateGrade(scores) + '".')