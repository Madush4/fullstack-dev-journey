function waitthreeSecs() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Rice is cooked!");
    }, 4000);
  });
}

async function cookRice() {
  console.log("Cooking ....");
  const alert = await waitthreeSecs();
  console.log(alert);
  console.log("Lets have the dinner!");
}

cookRice();
