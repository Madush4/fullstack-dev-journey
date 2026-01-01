// function no 1

function Person(name, age){
    this.name = name
    this.age = age
}

// function no 2

function Car(make, model){
    this.make = make
    this.model = model
}

let myCar = new Car(`Toyota`,`Corolla`)
console.log(myCar)

let myNewcar =new Car(`Tata`,`Safari`)
console.log(myNewcar)

//function no 3

function Tea(type){

    this.type = type
    this.describe = function() {
        return `This is a cup of ${this.type}`
    }
}

let lemonTea = new Tea(`Lemon Tea`)
console.log(lemonTea.describe())

// Prototypes and the constructer funtions

function Animals(species){
    this.species = species
}

Animals.prototype.sound = function (){
    return `${this.species} makes a sound.`
}

let cat= new Animals("cat")

console.log(cat.sound())

//The below code makes an error because of the lack of the new keyword in line 57

// function Drink(name){
// if (!new.target) {
//     throw new Error(`Drink must be called with new keyword`)
// }
//     this.name = name
// }

// let tea = Drink("tea")



