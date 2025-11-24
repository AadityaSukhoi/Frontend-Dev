// Q4 – Debugging Mystery
// Start with:
// "use strict";
// function showMessage() {
// greeting = "Welcome"; // undeclared
// console.log(greeting);
// }
// showMessage();

// Tasks:
// 1. Identify why this throws an error under strict mode.
// 2. Fix it and explain how scope declaration rules changed behavior.
// 3. Add a watch variable and observe the call stack in VS Code’s debugger.

"use strict";
function showMessageThrows() {
  try {
    greeting = "Welcome";
    console.log("greeting assigned:", greeting);
  } catch (err) {
    console.log("Caught error (expected under strict mode):", err.name + " - " + err.message);
  }
}
showMessageThrows();

function showMessageFixed() {
  let greeting = "Welcome";
  console.log("Fixed version greeting:", greeting);
}
showMessageFixed();
debugger;