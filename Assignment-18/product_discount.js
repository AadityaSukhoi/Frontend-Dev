function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.applyDiscount = function (percent) {
  const discountAmount = (this.price * percent) / 100;
  return this.price - discountAmount;
};

const product1 = new Product("Laptop", 50000);
const product2 = new Product("Mobile", 20000);
const product3 = new Product("Headphones", 3000);

console.log("Laptop price after 10% discount:", product1.applyDiscount(10));
console.log("Mobile price after 20% discount:", product2.applyDiscount(20));
console.log("Headphones price after 30% discount:", product3.applyDiscount(30));