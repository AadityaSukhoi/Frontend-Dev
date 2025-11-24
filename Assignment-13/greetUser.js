// Q 1. Write a function greetUser(name, callback) that prints "Hello <name>" and then
// executes a callback function showEndMessage() which prints "Welcome to the
// course!".
// Demonstrate callback flow clearly.


function showEndMessage() {
  console.log("Welcome to the course!");
}
function greetUser(name, callback) {
  console.log("Hello " + name);
  callback(); 
}
greetUser("Aaditya", showEndMessage);