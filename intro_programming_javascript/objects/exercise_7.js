// 7. Add a qux property with value 3 to the myObj object we created in the 
// previous exercise. Now, examine the following code snippets:

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

myObj.qux = 3;


//snippet 1

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

// Snippet 1 iterates solely over myObj's "own" properties - that is, 
// those defined directly on the object, not its prototype. Thus, it logs:

// > qux

// snippet 2

for (let key in myObj) {
  console.log(key);
}

// Both snippets iterate over the keys of myObj. However, for..in iterates 
// over all of the object's keys, including those in the prototype object, 
// myProtoObj. Thus, snippet 2 logs:

// > qux
// > foo
// > bar