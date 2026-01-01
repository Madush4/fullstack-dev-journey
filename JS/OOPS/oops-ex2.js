
function Animal (name){
    this.name = name
}

Animal.prototype.sound = function(){

    return `Animal sound. `
}

let dog = new Animal

console.log(dog.sound())