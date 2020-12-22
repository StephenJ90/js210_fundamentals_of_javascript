function getName(prompt) {
  let readlineSync = require('readline-sync');
  let name = readlineSync.question(prompt);
  return name;
}

let first_name = getName("What's your first name?\n");
let last_name = getName("What's your last name?\n");
console.log(`Hello, ${first_name} ${last_name}!`);