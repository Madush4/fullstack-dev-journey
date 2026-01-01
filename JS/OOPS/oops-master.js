

let car = {
    make: "Toyota",
    model: "camry",
    year : 2020,
    start : function () {

        return `${this.make} car got started in ${this.year}`
    }

}   

// console.log(car.start())

function Person(name, age){
    this.name = name
    this.age = age 
}

let John = new Person ("John Doe" ,28)

console.log(John)


// Prototype chain 

function Animal(type) {
    this.type = type
}

Animal.prototype.sound = function () {
    
    return `${this.type} makes a sound`
}

// Linking arrays with prototype

Array.prototype.hitesh = function () {
    
    return `Custom Method ${this}`
}

let myArray = [1,2,3]
let myNewArray = [1,2,3,4,5,6]

console.log(myArray.hitesh())
console.log(myNewArray.hitesh())

// Inheritance

class Vehicle {
    constructor(make, model){
        this.make = make,
        this.model = model
    }

    start(){
        return `${this.model} is a car from ${this.make}`
    }
}

class Car extends Vehicle{

    drive(){
        return `${this.make} : This is an inheritanece example. `
    }
}

let myCar = new Car("Toyota", "Corolla")
console.log(myCar.start())
console.log(myCar.drive())

let vehOne = new Vehicle("Toyota","Corolla")

console.log(vehOne.make)