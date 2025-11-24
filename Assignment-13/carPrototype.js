// Q 4 . Create a constructor function Car(brand, model). Add a prototype method
// getDetails() that prints car brand and model. Create two car objects and call this method to
// show method sharing via prototype.

function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

Car.prototype.getDetails = function () {
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
};

const car1 = new Car("Toyota", "Corolla");
const car2 = new Car("Honda", "Civic");

car1.getDetails();
car2.getDetails();