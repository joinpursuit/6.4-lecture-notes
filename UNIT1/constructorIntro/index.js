//  Add a function called sortByAge, that sorts the people (check mdn)
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
function Person(name, age) {
  this.name = name;
  this.age = age;
  // this.talk = function() {console.log(this.name + " is talking")}
}
Person.prototype.talk = function() {
  console.log(this.name + " is talking");
};

// class Teacher extends Person {
//     constructor(name, age, subject) {
//         super(name, age)
//         this.subject = subject
//     }
// }

function Teacher(name, age, subject) {
  Person.call(this, name, age);
  this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.goodMorning = function() {
  console.log("GOOD MORNING!");
};
let corey = new Teacher("Corey", 100, "JavaScript");
// console.log(corey.__proto__.__proto__.__proto__)
// console.log(corey)
// corey.talk()
// console.log(Person.prototype.constructor)
// console.log(Teacher.prototype.constructor)
class People {
  constructor() {
    this.people = [];
  }
  addPerson(person) {
    this.people.push(person);
  }
  deletePerson(name) {
    this.people = this.people.filter(person => {
      return person.nane.toLowerCase() !== name.toLowerCase();
    });
  }
  lastPerson() {
    return this.people[this.people.length - 1];
  }
  filterPeopleYoungerThan(age) {
    return this.people.filter(person => person["age"] > age);
  }

  sortByAge() {
    let dup = this.people.slice(0);
    return dup.sort((person1, person2) => {
      return person1.age - person2.age;
    });
  }
}

// let corey = new Person("Corey", 100)
// let jon = new Person("Jon", 7);
// // console.log(corey.age)
// let class6_4 = new People();
// let class6_2 = new People()
// // console.log(people)
// class6_4.addPerson(corey);
// class6_4.addPerson(jon);

// let alejo = new Person("Alejandro", 40);
// class6_2.addPerson(alejo)
// // people.deletePerson("JON");
// // console.log("Last Person: ", people.lastPerson())
// // console.log(people.sortByAge())
// // console.log(people)
// console.log(class6_2)
// console.log(class6_4);

Array.prototype.mySlice = function(startIdx, endIdx = this.length) {
  let output = [];

  for (let i = startIdx; i < endIdx; i++) {
    output.push(this[i]);
  }
  return output;
};

let arr = [1, 2, 3, 4, 5];

// console.log(arr.mySlice(1))
