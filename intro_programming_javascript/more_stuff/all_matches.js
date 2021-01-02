/*

6. Write a function that searches an array of strings for every element that 
matches the regular expression given by its argument. The function should 
return all matching elements in an array.

*/


let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches(array, pattern) {
  return array.filter(function(element) {
    if (element.match(pattern)) {
      return element;
    }
  })
}

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']

// OR

function allMatches(words, pattern) {
  return words.filter((word) => pattern.test(word));
}

// OR

function allMatches(words, pattern) {
  let matches = [];
  for (let index = 0; index < words.length; index += 1) {
    if (pattern.test(words[index])) {
      matches.push(words[index]);
    }
  }

  return matches;
}
