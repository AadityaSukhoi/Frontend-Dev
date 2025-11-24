class Employee {
    constructor(id, name, dept, salary) {
        this.id = id;
        this.name = name;
        this.department = dept;
        this.salary = salary;
    }
    getAnnualSalary() {
        return this.salary * 12;
    }
    applyBonus(percent) {
        this.salary += this.salary * (percent / 100);
    }
}

const staff = [
    new Employee(1, "Amit", "IT", 30000),
    new Employee(2, "Sara", "HR", 28000),
    new Employee(3, "Kiran", "Finance", 35000),
    new Employee(4, "Ravi", "IT", 32000),
    new Employee(5, "Meera", "Admin", 25000)
];

const totalPayout = staff.reduce((t, e) => t + e.getAnnualSalary(), 0);