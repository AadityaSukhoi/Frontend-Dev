// Q8 – Strict Mode Showdown
// function demo(a, a) {
// total = 10;
// delete total;
// }
// demo(5, 10);

// Tasks:
// 1. Run this with and without "use strict".
// 2. Record the errors and differences in behavior.
// 3. Explain why strict mode makes these operations illegal.
// 4. Show a correct version using ES6 rules.

console.log("Running strict-mode banned function:");
try {
  (function demoStrict() {
    "use strict";
    function inner(a1, a2) {
      globalThis.total = 10;       
      let deleted = delete globalThis.total;
      console.log("Strict delete result:", deleted);
    }
    inner(5, 10);
  })();
} catch (err) {
  console.log("Strict-mode error:", err.name + " - " + err.message);
}

console.log("\nRunning same logic WITHOUT strict:");
try {
  const code = `
    function inner(a1, a2) {
      globalThis.total = 10;
      let deleted = delete globalThis.total;
      console.log("Non-strict delete result:", deleted);
    }
    inner(5, 10);
  `;
  const fn = new Function(code); 
  fn();

  console.log(
    "Succeeded without strict; global total exists:",
    typeof globalThis.total !== "undefined" ? globalThis.total : "undefined"
  );

  try {
    let deleted = delete globalThis.total;
    console.log("Delete attempted again:", deleted);
  } catch (e) {
    console.log("Delete error:", e.message);
  }

} catch (err) {
  console.log("Non-strict run error:", err.name + " - " + err.message);
}

console.log("\nCorrect ES6-compliant version:");
(function correct() {
  let total = 10;
  console.log("Scoped total:", total);
})();