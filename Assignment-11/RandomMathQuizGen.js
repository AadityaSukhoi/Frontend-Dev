// Q9. Random Math Quiz Generator
// Generate random arithmetic challenges and evaluate user answers automatically.
// Requirements:
// ● Use Math.random() to generate two numbers (1–20) and a random operator from
// ['+', '-', '*', '/'].
// ● Calculate the correct answer using switch statement.
// ● Display question and correct answer in the console.
// ● Ensure division is rounded to two decimals with toFixed(2).

// Q9. Random Math Quiz Generator

const num1 = Math.floor(Math.random() * 20) + 1;
const num2 = Math.floor(Math.random() * 20) + 1;

const operators = ["+", "-", "*", "/"];
const operator = operators[Math.floor(Math.random() * operators.length)];

console.log("===== RANDOM MATH QUIZ =====\n");
console.log(`Numbers: ${num1} and ${num2}`);
console.log(`Operator: ${operator}`);
console.log("--------------------------------");

let correctAnswer;

switch (operator) {
    case "+":
        correctAnswer = num1 + num2;
        break;
    case "-":
        correctAnswer = num1 - num2;
        break;
    case "*":
        correctAnswer = num1 * num2;
        break;
    case "/":
        correctAnswer = (num1 / num2).toFixed(2);
        break;
}

console.log(`Question: ${num1} ${operator} ${num2}`);
console.log(`Correct Answer: ${correctAnswer}`);
console.log("================================");