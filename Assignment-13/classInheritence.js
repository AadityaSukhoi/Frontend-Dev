// Q 9 . Rewrite your Person → Student inheritance example using ES6 classes with
// extends and super().
// Show that both class and prototype versions behave the same.

class Person {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(`Name: ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, branch) {
        super(name);     
        this.branch = branch;
    }

    showBranch() {
        console.log(`Branch: ${this.branch}`);
    }
}

// Demo
const stu = new Student("Aaditya", "AI & Analytics");

stu.showName();
stu.showBranch();