// Q8. Employee Salary Projection
// Calculate a 5-year salary projection with yearly increments.
// Requirements:
// ● Declare current salary and annual increment rate (in %).

// ● Use a for loop to compute salary for each of 5 years.
// ● Print yearly salary in a formatted console table.
// ● Apply rounding and assignment operators.

// Q8. Employee Salary Projection

const currentSalary = 48000;
const incrementRate = 8; 

console.log("===== EMPLOYEE SALARY PROJECTION (5 YEARS) =====\n");

let salary = currentSalary;
const projection = [];

for (let year = 1; year <= 5; year++) {
    salary += (salary * incrementRate) / 100;
    projection.push({
        Year: year,
        Salary: Math.round(salary)
    });
}

console.table(projection);

console.log("===============================================");