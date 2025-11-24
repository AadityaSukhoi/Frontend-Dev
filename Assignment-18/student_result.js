/***********************************
 File: q1_student_result.js
 Topic: Student Result Processing
***********************************/

class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  calculateAverage() {
    const total = this.marks.reduce((sum, mark) => sum + mark, 0);
    return total / this.marks.length;
  }

  getGrade() {
    const avg = this.calculateAverage();

    if (avg >= 80) return "A";
    if (avg >= 60) return "B";
    if (avg >= 40) return "C";
    return "F";
  }
}

const student1 = new Student("Aaditya", [85, 90, 88]);
const student2 = new Student("Amit", [65, 60, 70]);
const student3 = new Student("Neha", [30, 35, 40]);

console.log(student1.name, "Average:", student1.calculateAverage(), "Grade:", student1.getGrade());
console.log(student2.name, "Average:", student2.calculateAverage(), "Grade:", student2.getGrade());
console.log(student3.name, "Average:", student3.calculateAverage(), "Grade:", student3.getGrade());