// Q8. Dynamic Discount Evaluator
// A store gives discounts based on product categories and cart totals.
// Requirements:
// Use an array of objects:
// const cart = [
// { item: "Laptop", category: "electronics", price: 45000 },
// { item: "Shoes", category: "fashion", price: 2500 },
// { item: "Book", category: "education", price: 600 }
// ];
// ●
// ● If category = “electronics” → 10% discount
// ● If category = “fashion” → 5% discount
// ● If total cart value > 50000 → apply extra 5% overall discount.
// ● Use loops, conditionals, and reduce() to calculate the final total.

console.log("===== DYNAMIC DISCOUNT EVALUATOR =====\n");

const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let discountedPrices = cart.map(product => {
    let discount = 0;

    if (product.category === "electronics") discount = 0.10;
    else if (product.category === "fashion") discount = 0.05;

    let finalPrice = product.price - (product.price * discount);
    return { ...product, finalPrice };
});

let total = discountedPrices.reduce((sum, p) => sum + p.finalPrice, 0);

if (total > 50000) {
    total -= total * 0.05;
}

console.log("Cart Details with Discounts:");
discountedPrices.forEach(p => {
    console.log(`${p.item} (${p.category}) -> ${p.finalPrice}`);
});

console.log("\nFinal Cart Total:", total);
console.log("========================================");