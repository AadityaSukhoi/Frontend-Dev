/***********************
 File: q2_task_scheduler.js
 Task: Microtask vs Macrotask demo
************************/

console.log("Start");

setTimeout(() => {
  console.log("Macrotask: setTimeout executed");
}, 0);

Promise.resolve().then(() => {
  console.log("Microtask: Promise.then executed");
});

console.log("Synchronous log executed");
console.log("End");

/*
Explanation:
Microtasks (Promises) run before macrotasks (setTimeout)
because the JavaScript event loop prioritizes the microtask
queue before moving to the macrotask queue.
*/