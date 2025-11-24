// Q 5 . Create a Person constructor with property name. Then create a Student constructor
// that inherits from Person and adds property branch. Add methods to print both name and
// branch using prototypes. Demonstrate the prototype chain working.

function Person(name) {
    this.name = name;
}

Person.prototype.showName = function () {
    console.log(`Name: ${this.name}`);
};

function Student(name, branch) {
    Person.call(this, name); 
    this.branch = branch;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function () {
    console.log(`Branch: ${this.branch}`);
};

const stu = new Student("Aaditya", "AI & Analytics");

stu.showName(); 
stu.showBranch(); 