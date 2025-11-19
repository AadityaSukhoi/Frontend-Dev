// Q6. Event-Based Counter Simulation
// Create a simple counter that increases or decreases based on simulated click events.
// Requirements:
// ● Use variables count = 0.
// ● Create two functions: increment() and decrement().
// ● Each function modifies count and logs the current value.
// ● Simulate “click” by calling these functions manually in code.
// ● Use a nested function to show function scope of count updates.

console.log("===== EVENT-BASED COUNTER SIMULATION =====\n");

let count = 0;

function increment() {
    function update() {
        count++;
        console.log(`Count after increment: ${count}`);
    }
    update();
}

function decrement() {
    function update() {
        count--;
        console.log(`Count after decrement: ${count}`);
    }
    update();
}

increment();
increment();
decrement();
increment();

console.log("==========================================");
