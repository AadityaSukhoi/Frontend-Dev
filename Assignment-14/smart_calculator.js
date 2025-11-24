// Q7 – Smart Calculator
// const operations = ["add", "divide", "power", "root", "subtract"];
// const num1 = 25, num2 = 0;

// Tasks:
// 1. Use a switch to handle each operation.
// 2. Add custom error handling for divide by 0 and root of negative number.
// 3. If operation not recognized, throw InvalidOperationError.
// 4. Wrap in try...catch and print results in a formatted summary.

"use strict";
const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

class CalculatorError extends Error {
  constructor(message) {
    super(message);
    this.name = "CalculatorError";
  }
}

function calculate(op, a, b) {
  switch (op) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "divide":
      if (b === 0) throw new CalculatorError("Divide by zero");
      return a / b;
    case "power":
      return Math.pow(a, b);
    case "root":
      if (a < 0) throw new CalculatorError("Root of negative number");
      return Math.pow(a, 1 / b);
    default:
      throw new CalculatorError("InvalidOperationError: " + op);
  }
}

for (let op of operations.concat("unknown")) {
  try {
    const result = calculate(op, num1, num2);
    console.log(`Operation=${op} | Result=${result}`);
  } catch (err) {
    console.log(`Operation=${op} | Error=${err.name} - ${err.message}`);
  }
}
debugger;