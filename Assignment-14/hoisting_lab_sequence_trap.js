// Q5 – Hoisting Lab: The Sequence Trap
// Predict, then run:

// console.log(score);
// announce();
// var score = 50;
// function announce() { console.log("Game started"); }
// let status = "ready";
// startGame();
// function startGame() {
// console.log(status);
// }

// Tasks:
// 1. Explain each hoisted element’s memory state.
// 2. Fix the code to run properly.
// 3. Rewrite using arrow functions to compare hoisting differences.

"use strict";
console.log("Running problematic sequence to illustrate hoisting:");
try {
  console.log(score);
  announce();
  var score = 50;
  function announce() { console.log("Game started"); }
  let status = "ready";
  startGame();
  function startGame() {
    console.log(status);
  }
} catch (err) {
  console.log("Error observed:", err.name + " - " + err.message);
}

console.log("\nFixed sequence:");
var scoreFixed = 50;
function announceFixed() {
  console.log("Game started");
}
announceFixed();
let statusFixed = "ready";
function startGameFixed() {
  console.log(statusFixed);
}
startGameFixed();

console.log("\nArrow function version (hoisting differences):");
var scoreA = 100;
const announceA = () => { console.log("Game started arrow"); };
announceA();
let statusA = "readyA";
const startGameA = () => { console.log(statusA); };
startGameA();
debugger;