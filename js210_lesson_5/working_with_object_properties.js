// JS210 Fundamentals of JavaScript for Programmers > Objects > Practice Problems: Working with Object Properties

// Practice Problems: Working with Object Properties
// -------------------------------------------------

/*
1. Write a function named objectHasProperty that takes two arguments: an Object 
and a String. The function should return true if the Object contains a property 
with the name given by the String, false otherwise.
*/

function objectHasProperty(object, string) {
  for (let obj in object) {
    if (obj === string) {
      return true;
    }
  }

  return false;
}

let pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

objectHasProperty(pets, 'dog');       // true
objectHasProperty(pets, 'lizard');    // false
objectHasProperty(pets, 'mice');      // true

// LS Solution:

function objectHasProperty(object, propertyName) {
  let keys = Object.keys(object);
  return keys.indexOf(propertyName) !== -1;
}


/*
2. Write a function named incrementProperty that takes two arguments: an 
Object and a String. If the Object contains a property with the specified 
name, the function should increment the value of that property. If the property 
does not exist, the function should add a new property with a value of 1. The 
function should return the new value of the property.
*/

function incrementProperty(object, propertyName) {
  let keys = Object.keys(object);

  if (keys.indexOf(propertyName) !== -1) {
    object[propertyName] += 1;
  } else {
    object[propertyName] = 1;
  }

  return object[propertyName];
}

let wins = {
  steve: 3,
  susie: 4,
};

incrementProperty(wins, 'susie');   // 5
wins;                               // { steve: 3, susie: 5 }
incrementProperty(wins, 'lucy');    // 1
wins;                               // { steve: 3, susie: 5, lucy: 1 }

// LS Solution:
/*
If you try to access a property that doesn't exist in an object, JavaScript returns undefined.
Since undefined is falsy and any non-zero Number is truthy, we can use this in the if statement's 
condition to learn whether the property exists.
This works well provided falsy (i.e. null and undefined) values aren't present in the object. 
Otherwise, we need to check Object.keys to see whether the property exists.
*/

function incrementProperty(object, propertyName) {
  if (object[propertyName]) {
    object[propertyName] += 1;
  } else {
    object[propertyName] = 1;
  }

  return object[propertyName];
}



/*
Write a function named copyProperties that takes two Objects as arguments. The function should copy all 
properties from the first object to the second. The function should return the number of properties copied.
*/

function copyProperties(source, destination) {
  let count = 0;
  for (let property in source) {
    destination[property] = source[property];
    count += 1;
  }

  return count;
}

let hal = {
  model: 9000,
  enabled: true,
};

let sal = {};
copyProperties(hal, sal);  // 2
console.log(sal);                       // { model: 9000, enabled: true }



/*
4. Write a function named wordCount that takes a single String as an argument. 
The function should return an Object that contains the counts of each word that 
appears in the provided String. In the returned Object, you should use the words 
as keys, and the counts as values.
*/

function wordCount(words) {
  let wordsArray = words.split(' ');
  let count = new Object();

  for (let i = 0; i < wordsArray.length; i += 1) {
    if (count[wordsArray[i]]) {
      count[wordsArray[i]] += 1;
    } else {
      count[wordsArray[i]] = 1;
    }
  }

  return count;
}

wordCount('box car cat bag box');  // { box: 2, car: 1, cat: 1, bag: 1 }

// LS Solution:

function wordCount(text) {
  let count = {};
  let words = text.split(' ');

  for (let index = 0; index < words.length; index += 1) {
    let word = words[index];
    if (!count[word]) {
      count[word] = 0;
    }

    count[word] += 1;
  }

  return count;
}