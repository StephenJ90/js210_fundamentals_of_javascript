// JS210 - JavaScript Language Fundamentals > Arrays

/*
Array Copy Part 1
-----------------

Read through the code shown below. What does it log to the console at lines 6 and 10?
*/

let myArray = [1, 2, 3, 4];
const myOtherArray = myArray;

myArray.pop();
console.log(myArray);
console.log(myOtherArray); // Line 6

myArray = [1, 2];
console.log(myArray);
console.log(myOtherArray);  // Line 10

/*
Answer:
Line 6 will output [1, 2, 3]
Line 10 will output [1, 2, 3]

On line 2, we assign myOtherArray to myArray which means that both variables 
are pointing to the same Array object in memory.
On line 4, we use the pop() method. This method is mutating. Since both variables
point to the same object, the mutation will be reflected by both variables resulting
in arrays that now look like [1, 2, 3].
On line 6 the output will be [1, 2, 3].
On line 8, myArray is reassigned to point at a completely
different object; [1, 2]. myArray now points to [1, 2] while myOtherArray is
still pointing to the original mutated object [1, 2, 3] and therefor the output on line
10 is [1, 2, 3].

LS Solution:

Logged at line 5:  [1, 2, 3]
Logged at line 6:  [1, 2, 3]

Logged at line 9:  [1, 2]
Logged at line 10: [1, 2, 3]
*/