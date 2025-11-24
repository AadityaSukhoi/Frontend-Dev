/***********************
 File: q1_async_coffee.js
 Task: Async Coffee Maker using Promise chaining
************************/

function boilWater() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) return reject("Boiling failed!");
      console.log("Water is boiled");
      resolve();
    }, 1500);
  });
}

function brewCoffee() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) return reject("Brewing failed!");
      console.log("Coffee is brewed");
      resolve();
    }, 1500);
  });
}

function pourCoffee() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) return reject("Pouring failed!");
      console.log("Coffee poured into cup");
      resolve();
    }, 1500);
  });
}

// Promise chaining
boilWater()
  .then(brewCoffee)
  .then(pourCoffee)
  .then(() => console.log("Coffee ready for the team!"))
  .catch((error) => console.log("Error:", error));