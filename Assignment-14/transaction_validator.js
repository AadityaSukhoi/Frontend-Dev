// Q3 – Transaction Validator
// const transactions = [
// { id: 1, amount: 2000 },
// { id: 2, amount: -500 },
// { id: 3 },
// null
// ];

// Tasks:
// 1. Loop through each transaction.
// 2. Throw custom errors for:

// ○ Negative amount
// ○ Missing amount or id
// ○ Null entries
// 3. Catch and categorize each error type in arrays (invalid, valid).
// 4. Print final reports with counts of successful and failed transactions.
// 5. Use a breakpoint to watch variable states.

"use strict";
const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

class TransactionError extends Error {
  constructor(message, type) {
    super(message);
    this.name = "TransactionError";
    this.type = type;
  }
}

const valid = [];
const invalid = [];

for (let i = 0; i < transactions.length; i++) {
  try {
    const t = transactions[i];
    if (t === null) throw new TransactionError("Null transaction", "NULL_ENTRY");
    if (!t || typeof t !== "object") throw new TransactionError("Missing transaction object", "MISSING");
    if (typeof t.id === "undefined") throw new TransactionError("Missing id", "MISSING_ID");
    if (typeof t.amount === "undefined") throw new TransactionError("Missing amount", "MISSING_AMOUNT");
    if (typeof t.amount !== "number") throw new TransactionError("Amount is not number", "INVALID_AMOUNT_TYPE");
    if (t.amount < 0) throw new TransactionError("Negative amount", "NEGATIVE_AMOUNT");
    valid.push(t);
  } catch (err) {
    if (err instanceof TransactionError) {
      invalid.push({ index: i, error: err.message, type: err.type });
    } else {
      invalid.push({ index: i, error: String(err), type: "UNKNOWN" });
    }
  }
}

console.log("VALID TRANSACTIONS:", valid);
console.log("INVALID TRANSACTIONS:", invalid);
console.log(`Summary: successful=${valid.length}, failed=${invalid.length}`);
debugger;