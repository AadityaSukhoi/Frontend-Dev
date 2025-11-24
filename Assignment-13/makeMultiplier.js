// Q 7 . Write a function makeMultiplier(multiplier) that returns another function to
// multiply any number by that multiplier.

// Example:
// const triple = makeMultiplier(3);
// console.log(triple(5)); // 15
// Explain how closure works in this example.

function makeMultiplier(multiplier) {
    return function (num) {
        return num * multiplier;
    };
}

const triple = makeMultiplier(3);
console.log(triple(5)); // 15