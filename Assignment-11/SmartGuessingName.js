// Q7. Smart Guessing Game (Number Range)
// Enhance the guessing game by allowing range checking.
// Requirements:
// ● Generate a random secret number between 1–50 using Math.floor(Math.random()
// * 50) + 1.
// ● Let userGuess be a variable with a test value.
// ● Print:
// ○ “Correct guess!” if equal
// ○ “Very close!” if within ± 3 of secret
// ○ “Too high” or “Too low” otherwise
// ● Use nested if conditions and logical operators.

const secretNumber = Math.floor(Math.random() * 50) + 1;
const userGuess = 27;

console.log("===== SMART GUESSING GAME =====\n");

console.log(`Secret Number (for testing): ${secretNumber}`);
console.log(`Your Guess: ${userGuess}`);
console.log("--------------------------------");

let result;

if (userGuess === secretNumber) {
    result = "Correct guess!";
} else {
    if (userGuess >= secretNumber - 3 && userGuess <= secretNumber + 3) {
        result = "Very close!";
    } else {
        if (userGuess > secretNumber) {
            result = "Too high";
        } else {
            result = "Too low";
        }
    }
}

console.log(`Result: ${result}`);
console.log("================================");