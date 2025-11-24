/***********************************
 File: food_ordering.js
 Topic: Online Food Ordering
***********************************/

const menu = [
  { name: "Burger", price: 100 },
  { name: "Pizza", price: 250 },
  { name: "Pasta", price: 180 },
  { name: "Coke", price: 50 }
];

function calculateBill(orderItems) {
  try {
    const prices = orderItems.map(itemName => {
      const foundItem = menu.find(m => m.name === itemName);

      if (!foundItem) {
        throw new Error(`Invalid item ordered: ${itemName}`);
      }

      return foundItem.price;
    });

    const total = prices.reduce((sum, price) => sum + price, 0);

    console.log("Ordered Items:", orderItems);
    console.log("Total Bill: ₹", total);
  }
  catch (error) {
    console.log("Error:", error.message);
  }
}

calculateBill(["Burger", "Pizza", "Coke"]);
calculateBill(["Burger", "IceCream"]); 