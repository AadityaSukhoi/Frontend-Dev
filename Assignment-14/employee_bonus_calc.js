// Q2 – Employee Bonus Calculator
// Given employee data:
// const employees = [
// { name: "Amit", salary: "45000", years: "5" },
// { name: "Sara", salary: "38000", years: "2" },
// { name: "Kiran", salary: "52000", years: "7" }
// ];

// Tasks:
// 1. Convert salary and years to numbers.
// 2. Calculate bonus = (salary * 0.1) if years > 3 else (salary * 0.05).
// 3. Apply strict validation using "use strict" (no implicit globals).
// 4. Use template strings to print each employee’s formatted details.
// 5. Add try...catch to handle conversion or missing property errors.

"use strict";
const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" }
];

for (let i = 0; i < employees.length; i++) {
  try {
    const e = employees[i];
    if (!e || typeof e !== "object") throw new Error("Missing employee object");
    const name = e.name;
    if (!name) throw new Error("Missing name");
    const salary = Number(e.salary);
    const years = Number(e.years);
    if (Number.isNaN(salary) || Number.isNaN(years)) throw new Error("Invalid numeric conversion");
    const bonus = years > 3 ? salary * 0.1 : salary * 0.05;
    console.log(`Employee: ${name} | Salary: ${salary} | Years: ${years} | Bonus: ${bonus.toFixed(2)}`);
  } catch (err) {
    console.log(`Error processing employee at index ${i}: ${err.message}`);
  }
}