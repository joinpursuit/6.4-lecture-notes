
// // Class

// // let arr = [1, 2, 3];
// // let arr = new Array(3);
// // console.log( arr)

// // let people =[{name: "corey", age:100}, {nam: "rick", age: 72}, {name: "morty", age: 14}]
// // people.forEach(person => {
// //     console.log(person.name)
// // })

// // class Person {
// //     constructor(name, age, sex = "yes please") {
// //         this.name = name;
// //         this.age = age;
// //         this.sex = sex
// //     }
// //     hungry() {
// //         return "I " + this.name + " am hungry!"
// //     }

// //     sleep(energyStatus) {
// //         if(energyStatus > 50) {
// //             return "Wide Awake, NO SLEEP FOR ME"
// //         } else {
// //             return "READY FOR SLEEP"
// //         }
// //     }
// // }

// // class Zombie extends Person {
// //     constructor(name, age, sex, kills = 0) {
// //        super(name, age, sex);
// //         this.kills = kills;
// //     }

// //     attack(weapon) {
// //         return "Killing with a " + weapon
// //     }
// //     sleep() {
// //         return "ZOMBIES NEVER SLEEP"
// //     }

// //     hungry() {
// //         return super.hungry() + " FOR BRAAAAAINS!"
// //     }

// // }
// // let corey = new Person("corey", 100, "male") // instance of the Person class.
// // let madEye = new Zombie("Moody", 3000, "NB", 1)
// // // console.log(madEye.hungry())
// // // console.log(madEye.attack("humor"))
// // console.log(madEye.hungry())
// // // console.log(corey.sleep(51))
// // // console.log(corey)
// // let people = [corey, new Person("rick", 72), new Person("morty", 14)]
// // // people.forEach(person => console.log(person.name))

// class Animal {
//   constructor(name, color, legCount) {
//     this.name = name;
//     this.color = color;
//     this.legCount = legCount;
//   }
//   mutateLegs(num) {
//     this.legCount += num;
//     return this;
//   }

//   makesNoise(noise) {
//     return this.name + " makes a " + noise;
//   }
// }

// class Horse extends Animal {
//   constructor(name, color, legCount, age) {
//     super(name, color, legCount);
//     this.age = age;
//   }
//   running() {
//     return "I run fast";
//   }

//   feed() {
//     console.log(this.name + " is eating");
//   }
// }

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     this.pets = [];
//   }

//   addPet(pet) {
//     this.pets.push(pet);
//     return this.pets;
//   }

//   feedPets() {
//     this.pets.forEach(pet => {
//       pet.feed();
      
//     });
//   }
// }
// // Add a couple function to your animal class. At least one should take in an
// // argument, at least one should refer to a property of your instance.
// let horse = new Horse("Orange Pop", "White", 4);
// let seahorse = new Horse("Strawberry Cream", "Blue", 0);
// // console.log(horse, seahorse)
// // console.log(horse.makesNoise("neigh"))
// // console.log(horse.mutateLegs(-1).makesNoise("neight"))

// let corey = new Person("corey", 100);
// // console.log(corey);
// corey.addPet(horse);



// corey.addPet(seahorse);
// // console.log(corey)
// corey.feedPets();

// Write an animal class. 
// I should be able to do new Animal("betty", "secret"), 
// Name and Agent. 
// Give it a sleep and eat function. eat should take an argument and print what it's eating. 

class Animal {
    constructor(name, agent) {
        this.name = name;
        this.agent = agent;
    }

    sleep() {
        return "I " + this.name + " am sleeping!"
    }
    eat(food) {
        return this.name + " is eating " + food; 
    }

    static birth(name, agent) {
        console.log("called birth and made " + name)
        let animal = new Animal(name, agent)
        return animal;
    }

    static explode() {
        return "Animal Exploded!"
    }
}

class Cat extends Animal {
    constructor(name, agent, lives) {
        super(name, agent);
        this.lives = lives
    }

    sleep() {
        return super.sleep() + " all the time and in the sun!"
    }
}
let hatchiko = new Cat("Hachi", "FBI", 9);
console.log(hatchiko.eat("Salmon"))

// let betty = Animal.birth("Betty", "secret agent baker");
// console.log(betty)
// console.log(Animal.explode())

// let arr = Array(4).fill(5)
// console.log(arr)
// arr.push