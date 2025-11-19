// Q10. Citizen Eligibility Validator
// Evaluate if a person can vote, drive, and apply for a passport based on age and citizenship.
// Requirements:
// ● Input: age and isCitizen (boolean).
// ● Use nested if-else and logical operators to print:
// ○ “Eligible for all services.” if citizen and age ≥ 18
// ○ “Eligible to vote only.” if citizen and 18–20
// ○ “Only age criteria met.” if not citizen but age ≥ 18

// ○ “Not eligible yet.” otherwise
// ● Use console.log() for all outcomes.

const age = 19;
const isCitizen = true;

console.log("===== CITIZEN ELIGIBILITY VALIDATOR =====\n");

console.log(`Age: ${age}`);
console.log(`Citizen: ${isCitizen}`);
console.log("-----------------------------------------");

let result;

if (isCitizen) {
    if (age >= 18) {
        if (age >= 21) {
            result = "Eligible for all services.";
        } else {
            result = "Eligible to vote only.";
        }
    } else {
        result = "Not eligible yet.";
    }
} else {
    if (age >= 18) {
        result = "Only age criteria met.";
    } else {
        result = "Not eligible yet.";
    }
}

console.log(`Result: ${result}`);
console.log("=========================================");