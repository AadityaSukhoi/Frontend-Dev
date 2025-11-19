// Q4. Academic Performance Evaluator
// Check whether a student is promoted or not based on multiple subjects.
// Requirements:
// ● Input marks of 5 subjects (use an array).
// ● Calculate average and overall percentage.
// ● Use logical operators to print:
// ○ “Promoted with Distinction” if ≥ 85%
// ○ “Promoted” if between 50%–84%
// ○ “Detained” if < 50%

// ● Add validation: if any subject < 35 → automatically “Detained”.

const marks = [88, 92, 79, 85, 91];

console.log("===== ACADEMIC PERFORMANCE EVALUATOR =====\n");

console.log("Subject-wise Marks:");
console.log(`Subject 1: ${marks[0]}`);
console.log(`Subject 2: ${marks[1]}`);
console.log(`Subject 3: ${marks[2]}`);
console.log(`Subject 4: ${marks[3]}`);
console.log(`Subject 5: ${marks[4]}`);
console.log("------------------------------------------");

let total = 0;
for (let m of marks) total += m;

const average = total / marks.length;
const percentage = average;

console.log(`Total Marks: ${total}`);
console.log(`Average Marks: ${average.toFixed(2)}`);
console.log(`Overall Percentage: ${percentage.toFixed(2)}%`);
console.log("------------------------------------------");

let result;

if (marks.some(m => m < 35)) {
    result = "Detained";
} else if (percentage >= 85) {
    result = "Promoted with Distinction";
} else if (percentage >= 50) {
    result = "Promoted";
} else {
    result = "Detained";
}

console.log(`Final Result: ${result}`);
console.log("==========================================");