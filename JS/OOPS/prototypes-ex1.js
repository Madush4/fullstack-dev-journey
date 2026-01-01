// Create a Car constructor, add a method via prototype, and test it with two different cars.

function cars(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

cars.prototype.getInfo = function () {
  console.log(
    `This is a ${this.make} and the model name is ${this.model}. This is made in ${this.year}`
  );
};

const car1 = new cars("Toyota", "Corolla", 2020);
const car2 = new cars("BMW", "520d", 2022);

car1.getInfo();
car2.getInfo();
