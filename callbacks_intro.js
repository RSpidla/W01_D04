// JavaScript Functions as Objects
/*
One of the distinctive things about JavaScript is that functions are first-class objects. This means two important things:

functions can be stored in variables and passed around
functions can do everything that other objects can do (like having attributes assigned to them).
*/

console.log("JavaScript Functions as Objects");

var myFn = function() {
    console.log("I am function.");
  }
  
  myFn.someAttribute = 42;
  console.log(myFn.someAttribute);
  
  function runner(f) {
    f();
  }
  
  runner(myFn);

  console.log("__________________");

// The second argument/parameter is expected to be a function

// Callback Functions
/*
The most notable usage of anonymous functions in JavaScript is a callback function.

A callback function:

- Is a function passed (by reference) into another function (let's call that one the "receiver" function)
- The receiver function is therefore accepting behavior to perform by calling the callback function that it now has access to
- The receiver function can decide to call the callback function at any time as many times as it wants
*/

console.log("Callback Functions");

function findWaldo(arr, found) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "Waldo") {
        found();   // execute callback
        }
    }
}

function actionWhenFound() {
console.log("Found him!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

console.log("__________________");

// Callback Functions Updated with forEach method

console.log("Callback Functions Updated with forEach method");

// function findWaldo(arr, found) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] === "Waldo") {
//             found();   // execute callback
//         }
//     }
// }

function findWaldo(list, found) {
    list.forEach(function(word, i) {
      if (word === "Waldo") {
        found(i);
      }
    })
  }

  function actionWhenFound(index) {
    console.log("Found Waldo at index " + index + "!");
  }

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

console.log("__________________");


