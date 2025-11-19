// Q3. Monthly Expense Tracker
// Develop a script that calculates total and average monthly expenses with dynamic updates.
// Requirements:
// ● Use an array of expenses for 5 categories (food, travel, rent, bills, leisure).
// ● Use arithmetic and assignment operators to add 10% tax to the total.
// ● Use toFixed(2) to round values.
// ● Display total, average, and final amount after tax.

const expenses = {
  food: 450.75,
  travel: 320.50,
  rent: 1200.00,
  bills: 280.30,
  leisure: 150.85
};

console.log("===== MONTHLY EXPENSE TRACKER =====\n");

console.log("Category-wise Expenses:");
console.log(`Food:    $${expenses.food.toFixed(2)}`);
console.log(`Travel:  $${expenses.travel.toFixed(2)}`);
console.log(`Rent:    $${expenses.rent.toFixed(2)}`);
console.log(`Bills:   $${expenses.bills.toFixed(2)}`);
console.log(`Leisure: $${expenses.leisure.toFixed(2)}`);
console.log("-----------------------------------");

let total = 0;
total += expenses.food;
total += expenses.travel;
total += expenses.rent;
total += expenses.bills;
total += expenses.leisure;

console.log(`Total Expenses: $${total.toFixed(2)}`);

const numberOfCategories = 5;
const average = total / numberOfCategories;
console.log(`Average Expense per Category: $${average.toFixed(2)}`);

const taxRate = 0.10;
let finalAmount = total;
finalAmount += total * taxRate; 

console.log("-----------------------------------");
console.log(`Tax (10%): $${(total * taxRate).toFixed(2)}`);
console.log(`Final Amount (after tax): $${finalAmount.toFixed(2)}`);
console.log("===================================");

console.log("\n===== DYNAMIC UPDATE EXAMPLE =====");
console.log("Adding emergency expense of $100 to bills...\n");

expenses.bills += 100;

total = expenses.food + expenses.travel + expenses.rent + expenses.bills + expenses.leisure;
const newAverage = total / numberOfCategories;
finalAmount = total + (total * taxRate);

console.log(`Updated Bills: $${expenses.bills.toFixed(2)}`);
console.log(`New Total: $${total.toFixed(2)}`);
console.log(`New Average: $${newAverage.toFixed(2)}`);
console.log(`New Final Amount (after tax): $${finalAmount.toFixed(2)}`);
console.log("===================================");