// Q6. Progressive Discount System
// Build a system that applies dynamic discount tiers for shopping totals.
// Requirements:
// ● Input total purchase amount.
// ● If total ≥ 10000 → 25% discount.
// ● Else if ≥ 5000 → 15% discount.
// ● Else if ≥ 2000 → 5% discount.
// ● Otherwise → no discount.
// ● Calculate and print:

// ○ Original total
// ○ Discount percentage
// ○ Final price after discount
// ● Use Math.round() for rounding.

const totalPurchase = 7400;

console.log("===== PROGRESSIVE DISCOUNT SYSTEM =====\n");

console.log(`Original Total: ₹${totalPurchase}`);
console.log("----------------------------------------");

let discountPercent = 0;

if (totalPurchase >= 10000) {
    discountPercent = 25;
} 
else if (totalPurchase >= 5000) {
    discountPercent = 15;
} 
else if (totalPurchase >= 2000) {
    discountPercent = 5;
}

const discountAmount = (totalPurchase * discountPercent) / 100;
const finalPrice = Math.round(totalPurchase - discountAmount);

console.log(`Discount Percentage: ${discountPercent}%`);
console.log(`Discount Amount: ₹${Math.round(discountAmount)}`);
console.log(`Final Price After Discount: ₹${finalPrice}`);
console.log("========================================");