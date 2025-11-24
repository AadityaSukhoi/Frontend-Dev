
// Q 6. Create a prototype chain using constructor functions:
// ● Person → Faculty → Professor
// Each should have its own property and method.
// Show how a Professor object can access all methods up the chain.

function Person(name) {
    this.name = name;
}
Person.prototype.sayName = function () {
    console.log(`Name: ${this.name}`);
};

function Faculty(name, dept) {
    Person.call(this, name);
    this.dept = dept;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;
Faculty.prototype.sayDept = function () {
    console.log(`Dept: ${this.dept}`);
};

function Professor(name, dept, subject) {
    Faculty.call(this, name, dept);
    this.subject = subject;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.saySubject = function () {
    console.log(`Subject: ${this.subject}`);
};


const prof = new Professor("Aaditya", "CSE", "AI");

prof.sayName();      
prof.sayDept();      
prof.saySubject();   