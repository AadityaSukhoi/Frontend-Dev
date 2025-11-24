// Q9 – JSON Audit
// const rawData = [
// '{"user":"Alex","age":25}',
// '{"id":2}',
// '{invalid}',
// '{"user":"Mina","age":"22"}'
// ];

// Tasks:
// 1. Parse each entry in a loop using try...catch.
// 2. Detect missing keys (user, age) and invalid JSON.
// 3. Push valid entries to a clean array; log errors with line numbers.
// 4. Debug step-by-step to see how control flows on error.
// 5. Add bonus: convert age to Number and filter under-18 users.

"use strict";

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

const clean = [];
const errors = [];

for (let i = 0; i < rawData.length; i++) {
  try {
    const parsed = JSON.parse(rawData[i]);
    if (!parsed.user || !parsed.age) throw new Error("Missing required keys");
    const ageNumber = Number(parsed.age);
    if (Number.isNaN(ageNumber)) throw new Error("Invalid age");
    if (ageNumber >= 18) clean.push({ user: parsed.user, age: ageNumber });
    else errors.push({ line: i + 1, error: "Underage user" });
  } catch (e) {
    errors.push({ line: i + 1, error: e.message });
  }
}

console.log("Valid Entries:", clean);
console.log("Errors:", errors);
debugger;