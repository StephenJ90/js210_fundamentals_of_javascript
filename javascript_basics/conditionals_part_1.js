// Conditionals Part 1

// Go over the following program. What does it log to the console at lines 7, 11, 15, and 19?
// Is it what you expected? Why or why not?

const myBoolean = true;
const myString = 'hello';
const myArray = [];
const myOtherString = '';

if (myBoolean) {
  console.log('Hello');
}

if (!myString) {
  console.log('World');
}

if (!!myArray) {
  console.log('World');
}

if (myOtherString || myArray) {
  console.log('!');
}

// Response:
// The first conditional will log 'Hello' because myBoolean is true.
// The second conditional will not log anything because there is a ! before
// the variable myString. myString has a String value which would evaluate
// truthy, but the ! returns the opposite value, false.
// The third conditional will log 'World'. Arrays evaluate truthy. The double !!
// turns a non-boolean type into its boolean equivalent.
// The fourth conditional will return '!'. The OR operator (||) is used here,
// and myOtherString evaluates falsy, and myArray evaluates to truthy meaning
// the whole condition will evaluate truthy.
// Reminder in Javascript that there are only 6 values that evaluate to false:
// false, Nan, undefined, null, 0, and ''



