// JS210 Fundamentals of JavaScript for Programmers > Practice Problems: Logic and Flow Control

/*
Guessing the Password
---------------------

Write a password guessing program that tracks how many times the user enters the wrong password.
If the user enters the password wrong three times, log 'You have been denied access.' and terminate
the program. If the password is correct, log 'You have successfully logged in.' and end the program.

Example:

// password = 'password'

// The program displays a dialog that asks the user to enter a password.
// If the user enters the wrong password, keep asking up to three times. After
// three failures, log the access denied.

What is the password: 123
What is the password: opensesame
What is the password: letmein

// message on the console
You have been denied access.

// If the user enters the right password, report login success.
What is the password: password

// message on the console
You have successfully logged in.
*/

let readlineSync = require('readline-sync');

let password = 'password';

function getPassword() {
  for (let i = 0; i < 3; i++) {
    let guess = readlineSync.question("What is the password: \n");
    return guess;
  }
}

for (let i = 0; i < 3; i++) {
  if (password === getPassword()) {
    console.log('You have successfully logged in.')
    return;
  }
}

console.log('You have been denied access.');

// LS Solution

const PASSWORD = 'password';
let failedAttempts = 0;

while (true) {
  let guess = prompt('What is the password:');

  if (guess === PASSWORD) {
    console.log('You have successfully logged in.');
    break;
  }

  failedAttempts += 1;

  if (failedAttempts === 3) {
    console.log('You have been denied access.');
    break;
  }
}

// Or

const PASSWORD = 'password';
let failedAttempts = 0;

do {
  let guess = prompt('What is the password:');

  if (guess === password) {
    break;
  }

  failedAttempts += 1;
} while (failedAttempts < 3);

if (failedAttempts === 3) {
  console.log('You have been denied access.');
} else {
  console.log('You have successfully logged in.');
}