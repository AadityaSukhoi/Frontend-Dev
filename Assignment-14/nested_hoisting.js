// Q10 – Nested Hoisting and Closures
// function outer() {
// console.log(count);
// var count = 5;
// function inner() {
// console.log(count);
// var count = 10;
// }
// inner();
// }
// outer();

// Tasks:

// 1. Predict and explain output.
// 2. Show how hoisting creates separate memory contexts.
// 3. Convert the inner function to an arrow and note behavior changes.
// 4. Add a debug session and explain the call stack flow.

function outer() {
  console.log(count);
  var count = 5;
  function inner() {
    console.log(count);
    var count = 10;
  }
  inner();
}
outer();