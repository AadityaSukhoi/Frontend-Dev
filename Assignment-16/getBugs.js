
function getBugs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let apiFail = Math.random() < 0.3; // simulate failure

      if (apiFail) {
        reject("API Failed!");
      } else {
        resolve(["UI glitch", "API timeout", "Login failure"]);
      }
    }, 1000);
  });
}

// Call function
getBugs()
  .then((bugs) => {
    console.log("Bug List:");
    console.table(bugs);
  })
  .catch((error) => {
    console.log("Error:", error);
  });