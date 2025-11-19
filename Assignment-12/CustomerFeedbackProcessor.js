// Q7. Customer Feedback Processor
// A review system must analyze comments for positivity and length.
// Requirements:
// ● Store a feedback string like "Great product! Fast delivery and amazing
// sound quality!".
// ● Use string methods to:
// ○ Count words
// ○ Check if the feedback includes "bad" or "poor"
// ○ If not → print "Positive Feedback"
// ○ Else → "Needs Improvement"
// ● Use includes(), split(), and conditional statements.

console.log("===== CUSTOMER FEEDBACK PROCESSOR =====\n");

let feedback = "Great product! Fast delivery and amazing sound quality!";

let words = feedback.split(" ").length;

let hasNegative = feedback.toLowerCase().includes("bad") || feedback.toLowerCase().includes("poor");

console.log(`Feedback: "${feedback}"`);
console.log("----------------------------------------");
console.log(`Word Count: ${words}`);

if (hasNegative) {
    console.log("Result: Needs Improvement");
} else {
    console.log("Result: Positive Feedback");
}

console.log("========================================");