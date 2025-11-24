// Q1 – Dynamic Data Parser
// You receive mixed API data:
// const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14",
// null, undefined];

// Tasks:
// 1. Convert each value into a Number, Boolean, and String form.
// 2. Skip invalid numbers (NaN, " ", "100px") but log them separately.
// 3. Build two arrays — one for valid numeric data, one for invalid.
// 4. Print a detailed report using loops and conditional formatting.

"use strict";
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
const validNumeric = [];
const invalidNumeric = [];
const detailed = [];

for (let i = 0; i < apiData.length; i++) {
  const raw = apiData[i];
  const asString = String(raw);
  const asBoolean = Boolean(raw);
  const asNumber = Number(raw);
  const isNumberValid = typeof asNumber === "number" && !Number.isNaN(asNumber) && asString.trim() !== "" && /^-?\d+(\.\d+)?$/.test(asString.trim());
  if (isNumberValid) {
    validNumeric.push(asNumber);
  } else {
    invalidNumeric.push({ index: i, raw });
  }
  detailed.push({ index: i, raw, asString, asBoolean, asNumber, isNumberValid });
}

console.log("DETAILED CONVERSIONS:");
for (let item of detailed) {
  console.log(`index=${item.index} raw=${JSON.stringify(item.raw)} => String="${item.asString}", Boolean=${item.asBoolean}, Number=${item.asNumber}, validNumber=${item.isNumberValid}`);
}

console.log("\nVALID NUMERIC ARRAY:", validNumeric);
console.log("INVALID NUMERIC ARRAY:", invalidNumeric);
console.log("\nSUMMARY:");
console.log(`Total items: ${apiData.length}`);
console.log(`Valid numbers: ${validNumeric.length}`);
console.log(`Invalid numbers: ${invalidNumeric.length}`);