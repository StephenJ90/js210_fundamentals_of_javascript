// A do/while loop differs visibly from a while loop, 
// but its behavior is almost identical. The crucial difference is that 
// do/while always executes the code in the block at least once. 
// A while loop can't make that guarantee since the initial condition may 
// be falsy; if it is, the loop body doesn't run. In a do/while loop, the 
// conditional check occurs at the end of the loop instead of the beginning 
// which allows it to run the code at least once, even if the condition 
// is falsy when the loop begins.

let answer;
do {
  answer = prompt("Do you want to do that again?");
} while (answer === 'y');