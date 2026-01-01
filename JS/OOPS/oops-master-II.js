//** Encapsulation **

class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  getBalance() {
    return `$ ${this.#balance}`;
  }
}

let account = new BankAccount();

// console.log(account.#balance) This is wrong X [#balance only can be used in the BankAccount class]

// console.log(account.getBalance());

// **Abstraction**

class CoffeeMachine {
  start() {
    return `Starting Machine ....`;
  }

  brewCoffee() {
    return `Brewing Coffee ...  << Please Wait >>`;
  }

  pressButton() {
    const msg1 = this.start();
    const msg2 = this.brewCoffee();

    return `${msg1} + ${msg2}`;
  }
}

const myMachine = new CoffeeMachine();

// console.log(myMachine.pressButton());

// ** Polymorphism **

class Bird {
  fly() {
    return `I'm flying ....`;
  }
}

class Penguin extends Bird {
  fly() {
    return `Penguins can't fly`;
  }
}

let bird = new Bird();
let penguin = new Penguin();

// console.log(bird.fly())
// console.log(penguin.fly())

// Static Method

class Calculator {
  static add(a, b) {
    return a + b;
  }
}

// let miniCalc = new Calculator()
// console.log(miniCalc.add(2,4))

// console.log(Calculator.add(2,4))

// Getters and Setters

class Employee {

    #salary
  constructor(name, salary) {
    this.name = name;
    this.#salary = salary;
  }

  get salary() {
    return `You are not allowed to see the salary`;
  }

  set salary(value) {
    if (value < 0) {
      console.error("Invalid Salary");
    } else {
      this.#salary = value;
    }
  }
}

let emp = new Employee("Alice", 5000);
console.log(emp.salary);
