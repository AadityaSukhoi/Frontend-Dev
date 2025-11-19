// Q2. Multi-Type Data Summary
// Simulate a database summary of various user data entries.
// Requirements:

// ● Declare variables of different data types: string, number, boolean, array, object, null,
// undefined.
// ● Use typeof operator and Array.isArray() to identify each type.
// ● Print a formatted report (label + value + type) using one console.table() statement.

const userName = "Aaditya";
const age = 20;
const isStudent = true;
const hobbies = ["coding","gaming","flying"];
const profile = { city: "Mathura", degree: "B.Tech (Hons.) CSE" };
const score = null;
let pending;

function detectType(value) {
  if (value === null) return "null";
  if (Array.isArray(value)) return "array";
  return typeof value;
}

const summary = [
  { label: "userName", value: userName, type: detectType(userName) },
  { label: "age", value: age, type: detectType(age) },
  { label: "isStudent", value: isStudent, type: detectType(isStudent) },
  { label: "hobbies", value: hobbies, type: detectType(hobbies) },
  { label: "profile", value: profile, type: detectType(profile) },
  { label: "score", value: score, type: detectType(score) },
  { label: "pending", value: pending, type: detectType(pending) }
];

console.table(summary);