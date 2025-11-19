// Q10. Departmental Employee Evaluator
// You must evaluate employees from multiple departments based on performance points.
// Requirements:
// Create a nested array for departments:
// const departments = [
// ["HR", 72],
// ["Finance", 88],
// ["Tech", 95],
// ["Support", 63]
// ];
// ●
// ● Use loops and conditionals to print:
// ○ “Excellent” if score ≥ 90
// ○ “Good” if 75–89
// ○ “Average” if 60–74
// ○ “Needs Improvement” otherwise
// ● Use comparison operators and nested if-else conditions.

console.log("===== DEPARTMENTAL EMPLOYEE EVALUATOR =====\n");

const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63],
    ["QA", 80],
    ["AI", 90]
];

for (let i = 0; i < departments.length; i++) {
    let dept = departments[i][0];
    let score = departments[i][1];
    let rating = "";

    if (score >= 90) {
        rating = "Excellent";
    } else if (score >= 75) {
        rating = "Good";
    } else if (score >= 60) {
        rating = "Average";
    } else {
        rating = "Needs Improvement";
    }

    console.log(`${dept} Department -> Score: ${score} -> ${rating}`);
}

console.log("============================================");