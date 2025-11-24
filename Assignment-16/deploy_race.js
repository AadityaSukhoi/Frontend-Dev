/***********************
 File: q4_deploy_race.js
 Task: Promise.all and Promise.race
************************/

function serverA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) return reject("Server A Failed");
      resolve("Server A Completed");
    }, 2000);
  });
}

function serverB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) return reject("Server B Failed");
      resolve("Server B Completed");
    }, 3000);
  });
}

// Promise.all
Promise.all([serverA(), serverB()])
  .then(() => {
    console.log("Deployment completed for all servers");
  })
  .catch((error) => {
    console.log("Error:", error);
  });

// Promise.race
Promise.race([serverA(), serverB()])
  .then((result) => {
    console.log("Fastest response:", result);
  })
  .catch((error) => {
    console.log("Race Error:", error);
  });