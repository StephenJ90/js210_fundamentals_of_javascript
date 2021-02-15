// JS210 - Small Problems > Easy 1

/*
Bannerizer
Write a function that will take a short line of text, and write it to
the console log within a box.

Examples:

logInBox('To boldly go where no one has gone before.');

will log on the console:

+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

logInBox('');
+--+
|  |
|  |
|  |
+--+

You may assume that the output will always fit in your browser window.

PEDAC
-----

Problem:
--------

Take the input string and log it to the console within a box of characters

Rules:
  Explicit
    - the output will always fit in your browser window
  Implicit
    - an empty string still results in a a box being output
    - the length of the box will be the length of the string plus
    2 character lengths on either side of the text.

Algorithm:
----------
- find the length of the string and add 4 to it, this will be the length of the box
- create a function that will output the top and bottom of the box
  - it will output '+' plus the length of the string plus 2 of '-' and '+'
- create a function that will output a blank line
  - '|' plus string length plus 2 of empty spaces ' ' and '|'
- create a function that will output the string line
  - '| ' plus the string  and  ' |'
*/

function topAndBottomLine(width) {
  let output = '+';

  for (let i = 0; i < width; i += 1) {
    output += '-'
  }

  output += '+';
  return output;
}

function blankLine(width) {
  let output = '|';

  for (let i = 0; i < width; i += 1) {
    output += ' '
  }

  output += '|';
  return output;
}

function logInBox(text) {
  let boxWidth = text.length + 2;

  console.log(topAndBottomLine(boxWidth));
  console.log(blankLine(boxWidth));
  console.log(`| ${text} |`);
  console.log(blankLine(boxWidth));
  console.log(topAndBottomLine(boxWidth));
}

logInBox('To boldly go where no one has gone before.');
logInBox('');

// LS Solution:
// The repeatChar function replaces my two functions and rids the code of
// repetitive 'for' loops.

function logInBox(message) {
  const horizontalRule = `+${repeatChar('-', message.length + 2)}+`;
  const emptyLine = `|${repeatChar(' ', message.length + 2)}|`;

  console.log(horizontalRule);
  console.log(emptyLine);
  console.log(`| ${message} |`);
  console.log(emptyLine);
  console.log(horizontalRule);
}

function repeatChar(char, times) {
  let repeated = '';
  while (repeated.length < times) {
    repeated += char;
  }

  return repeated;
}

// Further Exploration:
/*
Modify this function so that it truncates the message if it doesn't fit inside a
maximum width provided as a second argument (the width is the width of the box itself).
You may assume no maximum if the second argument is omitted. For a real challenge, try 
word wrapping messages that are too long to fit, so that they appear on multiple lines 
but are still contained within the box.
*/



