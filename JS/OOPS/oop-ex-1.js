

class Person {

    constructor(name, age){
        this.name = name
        this.age = age
    }

    introduce(){
        return `Hi, I an ${this.name}. I am ${this.age} years old.`
    }
}

class Student extends Person{
    study(){
        return `${this.name} is studying.`
    }

    introduce(){
        return `Hi, I an ${this.name}. I am ${this.age} years old. I am a student.`;
    }
}
 
const student1 = new Student ("Alex", 18)

console.log(student1.introduce())
console.log(student1.study())
console.log(student1.__proto__ === Student.prototype);
console.log(Student.prototype.__proto__ === Person.prototype);