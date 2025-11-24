

// ============ Callback Hell Version ============
function design(cb) {
  setTimeout(() => {
    console.log("Design done");
    cb();
  }, 1000);
}

function build(cb) {
  setTimeout(() => {
    console.log("Build done");
    cb();
  }, 1000);
}

function test(cb) {
  setTimeout(() => {
    console.log("Test done");
    cb();
  }, 1000);
}

function deploy(cb) {
  setTimeout(() => {
    console.log("Deploy done");
    cb();
  }, 1000);
}

function celebrate(cb) {
  setTimeout(() => {
    console.log("Celebrate done");
    cb();
  }, 1000);
}

// Callback Hell Execution
design(() => {
  build(() => {
    test(() => {
      deploy(() => {
        celebrate(() => {
          console.log("Callback hell pipeline finished");
        });
      });
    });
  });
});

// ============ Async/Await Version ============
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function pipeline() {
  await wait(1000);
  console.log("Design done");

  await wait(1000);
  console.log("Build done");

  await wait(1000);
  console.log("Test done");

  await wait(1000);
  console.log("Deploy done");

  await wait(1000);
  console.log("Celebrate done");

  console.log("Async/Await pipeline finished");
}

pipeline();

/*
Why async/await is better:
It makes async code look like synchronous code, avoids deep nesting,
and improves readability and maintenance.
*/