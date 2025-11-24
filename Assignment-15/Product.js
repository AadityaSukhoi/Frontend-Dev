// Q 1: E-Commerce Product Manager (Classes + Objects)
// You’re building an E-commerce Admin Panel. Create a Product class with properties like id,
// name, price, and category.
// ● Add methods to:
// ○ Apply a discount (e.g., 10%)
// ○ Display product details in a formatted string
// ● Create multiple product objects and store them in an array.
// ● Display products with price > 1000 in the console using a filter.

"use strict";

class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  applyDiscount(percent) {
    this.price = this.price - this.price * (percent / 100);
  }

  getDetails() {
    return `${this.name} | ₹${this.price} | Category: ${this.category}`;
  }
}

const products = [
  new Product(1, "Laptop", 50000, "Electronics"),
  new Product(2, "Mouse", 450, "Electronics"),
  new Product(3, "Shoes", 1500, "Fashion"),
  new Product(4, "Watch", 900, "Fashion")
];

products[0].applyDiscount(10);
products[2].applyDiscount(20);

const expensiveProducts = products.filter(p => p.price > 1000);

console.log("Filtered Products:");
expensiveProducts.forEach(p => console.log(p.getDetails()));