
function Student (name , age , course) {

    this.name = name
    this.age = age
    this.course = course
}

Student.prototype.greet =
    function itroduce() {
        console.log(`Hi, I am ${this.name}, ${this.age}, studying ${this.course}`)
    }

Student.prototype.ageDifference = 

    function isAdult(){
        if (this.age >= 18) {
            console.log(`Adult`)
        }else{
            console.log(`Minor`)
        }
    }

const s1 = new Student(`Madush`, 22 , `IT`)
const s2 = new Student(`Damith`, 12 , `BIO`)

s1.greet()
s1.ageDifference()

s2.greet()
s2.ageDifference()

Student.prototype.study = 

    function learn(){
        console.log(`${this.name} is studying ${this.course}`)
    }

s1.study()
s2.study()