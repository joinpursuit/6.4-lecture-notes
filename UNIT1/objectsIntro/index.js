import { object } from "prop-types";

let arr = [1, 2, 3, 4];
// arr[7] = 6;
// console.log(arr)

// OBJECT ARE A DATA STRUCTURE THAT STORE KEY VALUE PAIRS.
// console.log(typeof arr)
let fruits = ["apple", "orange", "pear"];
//    0         1       2
// fruits[1] = "clelmentine"
let fruitObj = {
  0: "apple",
  1: "orange",
  2: "pear",
};
//  fruitObj[1] = "clementine"
//  fruitObj[7] = "cherries"
//     console.log(fruitObj)

let person = {
  name: "Corey",
  age: 2,
  hair: true,
  size: "large",
  favoriteData: [],
  "likes-to-eat": true,
};
// console.log(person["age"] = person["age"] + 1)

person["married"] = true;

// obj[key] // retrievs value
// obj[key] = value // sets key to point to value in object
// console.log(person.name)
// console.log(person["name"])
person.hair = false;
person.favoriteColor = "blue";
// console.log(person.likes-to-eat) // Throws error

delete person["likes-to-eat"];
// console.log(person)
// // {key: value}

// ITERATING THROUGH AN OBJECT
// for(let key in person) {
//     console.log("key", key, "value: ", person[key])
// }

let closet = {
  winter: {
    hands: "gloves",
    head: "beenie",
  },
  summer: { hands: "rings", head: "baseball cap" }
};
// console.log(closet["winter"]["hands"]);
// console.log(closet.summer.head)
closet["fall"] = { hands: "pumpkin spice latte", head: "leaves"}
// console.log(closet)

// closet to get empty spring object 
// Then populate spring object what attribute at a time 
closet.spring = {};
closet.spring.hands = "ice cream";
closet.spring.head = "yankee hat"
// console.log(closet)
// console.log(Object.keys(person))
// console.log(Object.values(person));
// let obj = {animal: "cat", name: "sammy"}
// let obj2 = {name: "sammy", animal: "cat"};
// // let obj2 = obj 
// console.log(obj === obj2)

// object.key // retrieves value 
// object.key = value // sets key to point to value in object

let films = [
  {
    name: "Psycho",
    director: "Alfred Hitchcock",
    released: 1960,
  },
  {
    name: "Citizen Kane",
    director: "Orson Welles",
    released: 1941,
  },
  {
    name: "The Usual Suspects",
    director: "Bryan Singer",
    released: 1995,
  },
];
let sum = 0;
for(let i = 0; i < films.length; i += 1) {
    sum += films[i]["released"]
}
console.log(Math.floor(sum / films.length))

// console.log(films)