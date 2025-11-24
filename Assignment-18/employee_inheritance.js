/***********************************
 File: employee_inheritance.js
 Topic: Employee Inheritance
***********************************/

class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  work() {
    console.log(`${this.name} is working in ${this.department} department.`);
  }
}

class Manager extends Employee {
  constructor(name, department) {
    super(name, department);
  }

  work() {
    console.log(`${this.name} is managing the ${this.department} department.`);
  }
}

const emp1 = new Employee("Rahul", "IT");
const mgr1 = new Manager("Amit", "HR");

emp1.work();  
mgr1.work();  