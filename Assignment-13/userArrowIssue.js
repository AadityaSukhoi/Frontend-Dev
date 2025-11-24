// Q 3 . Create an object user with:
// ● a property name
// ● a method showName written as an arrow function
// Log the output and explain why this.name is undefined.
// Then fix it by using a normal function.

const user = {
    name: "Aadi",
    showName: () => {
        console.log(this.name); 
    }
};

user.showName(); 

const userFixed = {
    name: "Aaditya",
    showName() {
        console.log(this.name);
    }
};

userFixed.showName();