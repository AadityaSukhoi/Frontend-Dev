// Q2. String Manipulation Report
// An e-commerce site wants a script that formats product titles properly before display.
// Requirements:
// ● Store a product name like " wireless headphones PRO ".
// ● Trim extra spaces, convert to lowercase, then capitalize the first letter of each word.
// ● Replace "pro" with "Pro Edition".
// ● Display the cleaned title and its length.
// ● Use methods: trim(), split(), map(), join(), replace(), and length.

console.log("===== STRING MANIPULATION REPORT =====\n");

let productName = " wireless headphones PRO ";

console.log(`Original Product Name: "${productName}"`);
console.log("--------------------------------------");

let cleaned = productName
    .trim()
    .toLowerCase()
    .split(" ")
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")
    .replace("Pro", "Pro Edition");

console.log(`Cleaned Product Title: ${cleaned}`);
console.log(`Title Length: ${cleaned.length}`);
console.log("======================================");