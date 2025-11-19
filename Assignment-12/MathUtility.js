// Q3. Math Utility Dashboard
// You’re creating a math dashboard for a scientific calculator.
// Requirements:
// ● Take a number x = 16.75.
// ● Display:
// ○ Rounded value (Math.round)
// ○ Square root (Math.sqrt)
// ○ Power (Math.pow(x, 3))
// ○ Random number between 10–50 (Math.floor(Math.random() * 41) +
// 10)

// ● Use template literals to show a formatted result summary.

console.log("===== MATH UTILITY DASHBOARD =====\n");

let x = 16.75;

let rounded = Math.round(x);
let root = Math.sqrt(x);
let power = Math.pow(x, 3);
let randomNum = Math.floor(Math.random() * 41) + 10;

console.log(`Original Number: ${x}`);
console.log("----------------------------------");

console.log(`
Summary:
- Rounded Value: ${rounded}
- Square Root: ${root}
- x³ (Power): ${power}
- Random Number (10–50): ${randomNum}
`);

console.log("==================================");