// Q4. Array Performance Analyzer
// You need to analyze student performance using an array of scores.
// Requirements:
// ● Create an array of 8 random scores between 30 and 100.
// ● Calculate:
// ○ Highest and lowest score (Math.max(...arr), Math.min(...arr))
// ○ Average score
// ○ Number of students who passed (≥ 50)
// ● Use array methods like map(), filter(), and reduce().
// ● Display a full summary in a formatted output.


console.log("===== ARRAY PERFORMANCE ANALYZER =====\n");

let scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);

let highest = Math.max(...scores);
let lowest = Math.min(...scores);

let average = scores.reduce((a, b) => a + b, 0) / scores.length;

let passed = scores.filter(s => s >= 50).length;

console.log(`Scores: ${scores.join(", ")}`);
console.log("--------------------------------------");

console.log(`
Summary:
- Highest Score: ${highest}
- Lowest Score: ${lowest}
- Average Score: ${average.toFixed(2)}
- Students Passed: ${passed} out of ${scores.length}
`);

console.log("======================================");