function waitTwoSeconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Finished!");
    }, 2000);
  });
}

async function run() {
  console.log("Starting...");

  const result = await waitTwoSeconds();

  console.log(result);
  console.log("Done");
}

run();
