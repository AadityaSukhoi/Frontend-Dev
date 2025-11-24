// Q6 – Pyramid Pattern Generator
// Generate:
// *
// * *
// * * *
// * * * *

// Then:
// 1. Replace let with var and observe changes in output.
// 2. Debug step-by-step to track variable re-use.
// 3. Add an outer loop limit controlled by user input (default = 5).
// 4. Use "use strict" to catch undeclared loop variables.

"use strict";
const userLimit = Number(process.argv[2]) || 5;
console.log("Generating pyramid with limit =", userLimit);
for (let i = 1; i <= userLimit; i++) {
  let row = "";
  for (let j = 0; j < i; j++) {
    row += "* ";
  }
  console.log(row.trim());
}
console.log("\nNow replacing let with var simulation to observe behavior:");
for (var i = 1; i <= 4; i++) {
  var row = "";
  for (var j = 0; j < i; j++) {
    row += "* ";
  }
  console.log(row.trim());
}
debugger;