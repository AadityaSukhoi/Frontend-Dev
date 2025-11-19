// Q9. Odd–Even Number Analyzer
// You are designing a tool that classifies numbers in a range based on multiple conditions.
// Requirements:
// ● Accept numbers 1–30 in an array using a loop.
// ● For each number:
// ○ If divisible by 3 and 5 → print “FizzBuzz”
// ○ Else if even → print “Even”
// ○ Else → print “Odd”
// ● Store results in a new array and display it.

// ● Use %, push(), and conditionals.

console.log("===== ODD–EVEN NUMBER ANALYZER =====\n");

let numbers = [];
let results = [];

for (let i = 1; i <= 30; i++) {
    numbers.push(i);
}

numbers.forEach(num => {
    if (num % 3 === 0 && num % 5 === 0) {
        results.push("FizzBuzz");
    } else if (num % 2 === 0) {
        results.push("Even");
    } else {
        results.push("Odd");
    }
});

console.log("Numbers:", numbers.join(", "));
console.log("Results:", results.join(", "));
console.log("=====================================");