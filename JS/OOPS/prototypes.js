let computer = {
  cpu: 14,
};

let lenovo = {
  screen: "HD",
  __prto__: computer, // To link all the properties inside the computer
};

let Asus = {};

console.log(`computer`, computer.__proto__); // dunder("__")
console.log(lenovo);

// The second method of linking prototypes

let genericCar = {
  tyres: 4,
};

let tesla = {
  driver: "AI",
};

Object.setPrototypeOf(tesla, genericCar);
console.log(`Tesla tyres: `, tesla.tyres);
console.log(`Generic Car`, genericCar);

console.log(`Tesla tyres: `, Object.getPrototypeOf(tesla)); // The modern way to call the prototype
console.log(tesla.hasOwnProperty("tyres"));

