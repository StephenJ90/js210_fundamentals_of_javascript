// String Assignment

// Take a look at the following code:

let name = 'Bob';
const saveName = name;
name = 'Alice';
console.log(name, saveName);

// What does this code log to the console? Think about it for a moment before continuing.

// If you said that this code logged:
// > Alice Bob
// you would be 100% correct, and the answer should come as no surprise. 
// Now let's look at something slightly different:

const name = 'Bob';
const saveName = name;
name.toUpperCase();
console.log(name, saveName);

// What does this code log? Can you explain these results?

// Response:
// I don't believe you can mutate constants so it should log:
// > Bob Bob

// LS Solution:
// If you were thinking that at least one or both of the names should be in uppercase, then you 
// would be wrong. Don't worry though, you're not alone—especially if you come from other 
// programming languages in which strings are mutable. In JavaScript however, primitive 
// strings—such as the ones shown above—are immutable.

/*
Further Exploration
If you take another look at the code, you'll notice that on line 3, the string referenced by the 
name variable calls the String.prototype.toUpperCase method. How is it possible that even though 
this string is a primitive, it's still able to call a method?

Student Solutions:

From the MDN documentation:

JavaScript automatically converts primitives to String objects, so that it's possible to use 
String object methods for primitive strings. In contexts where a method is to be invoked on a 
primitive string or a property lookup occurs, JavaScript will automatically wrap the string 
primitive and call the method or perform the property lookup.

So this:
*/

console.log('Bob'.toUpperCase()); // BOB

// is equivalent to this:

console.log(String('Bob').toUpperCase()); // BOB

/*

