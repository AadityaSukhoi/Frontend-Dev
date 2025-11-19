// Q1. Scope Conflict Resolver
// A company’s payroll script has variables defined in multiple scopes.
// You must correct the logic using proper variable scoping.
// Requirements:
// ● Declare a global variable bonus = 5000.
// ● Inside a function calculateSalary(), declare a local variable salary = 40000.
// ● Add the bonus only if a local variable isPermanent (boolean) is true.
// ● Print total salary inside the function.
// ● Demonstrate how changing isPermanent affects the global variable scope.

// Q1. Scope Conflict Resolver

let bonus = 5000;

console.log("===== SCOPE CONFLICT RESOLVER =====\n");
console.log(`Global Bonus: ${bonus}`);
console.log("-----------------------------------");

function calculateSalary(isPermanent) {
    let salary = 40000;
    let total = salary;

    if (isPermanent === true) {
        total += bonus;
    }

    console.log(`Inside Function -> isPermanent: ${isPermanent}`);
    console.log(`Total Salary: ${total}`);
    console.log("-----------------------------------");
}

console.log("CASE 1: Permanent Employee");
calculateSalary(true);

console.log("CASE 2: Temporary Employee");
calculateSalary(false);

console.log("Checking Global Bonus After Function:");
console.log(`Global Bonus Still: ${bonus}`);
console.log("=====================================");