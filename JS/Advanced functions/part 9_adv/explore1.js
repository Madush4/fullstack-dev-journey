console.log("Hey I will show the asynchronous nature of JavaScript");

function seyHello() {
  console.log("Hey there! I am in a timeout.");
}
setTimeout(() => {
  seyHello();
}, 4000);
for (let index = 0; index < 10; index++) {
  console.log(index);
}
