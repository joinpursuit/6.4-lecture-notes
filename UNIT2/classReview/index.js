let readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("First tower ", (first) => {
    rl.question("Second tower ", (second) => {
        console.log(first, second)
        rl.close()
    })
})
// console.log("whatup")

// Classes Review: 
// 1. Declare class - ProudCamelCase
// 2.  constrctor function 
// 3. Thinking about which arguments and which properties to have
// 4. Methods

// 5. Extends class for inheritance 
            // * super in the constructor and will point to parent

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = 0; 
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}
// let person = new Person("Billy", "Thorton")
// console.log(person.fullName())
class Student extends Person{
    constructor(firstName, lastName) {
        super(firstName, lastName);
        this.courseList = [];
    }
    enroll(course) {
        this.courseList.push(course)
        course.enrollStudent(this)
    }
}
class Course {
    constructor(name) {
        this.name = name;
        this.studentList = [];
    }

    enrollStudent(student) {
        this.studentList.push(student)
    }
}
let JSClass = new Course("JS 101")
let marvin = new Student("Marvin", "Escobar");
marvin.enroll(JSClass)
// JSClass.enrollStudent(marvin)
// console.log(marvin)
// console.log(JSClass);


// Create a student class that extends person. 
// It should initialize with an empty course list. 
// Give your student an enroll method that takes in a course and 
// adds it to the students course list. 

// Make a course class. It should have a name, and a list of students. 
// It should have it's own enrollStudent to add to it's student list.