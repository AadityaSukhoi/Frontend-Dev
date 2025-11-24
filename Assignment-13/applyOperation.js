// Q 2 . Create a function applyOperation(numbers, operation) that takes an array and a
// callback function.
// Use it to:
// ● Double each number in [1,2,3,4]
// ● Square each number in [1,2,3,4]

function applyOperation(numbers, operation) {
    const result = [];
    for (let num of numbers) {
        result.push(operation(num));
    }
    return result;
}

const double = (n) => n * 2;
const square = (n) => n * 2; 
const properSquare = (n) => n * n;

const nums = [1, 2, 3, 4];

console.log("Doubled:", applyOperation(nums, double));
console.log("Squared:", applyOperation(nums, properSquare));