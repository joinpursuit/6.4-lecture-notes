
// import { lookup } from "dns";

// Write a function that takes in an array and 
// returns the product of the array. Use a myForEach function inside. 
// Go ahead and rewrite that one as well;

const myForEach = (arr, callback) => {
    for(let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

// const product = (arr) => {
//     let prod = 1;
//     myForEach(arr, (num) => prod *= num); // prod = prod * num ;
//     return prod
// }


const product = arr => {
    let prod = 1;
    arr.forEach( num => prod *= num) // prod = prod * num ;
    return prod;
};
// console.log(product([1, 2, 3, 4]))

//forEach, map, filter, every (all are array methods. Fancy name: High order functions)

// Write a function that takes in an array of eventNames, and prints each name to the console. 
// Use forEach
const eventNames = (events) => {
    events.forEach((el) => {
        console.log(el);
    })
}

// Key diff between forEach and for loop. Cant break out of / return out of forEach

// eventNames(["corey", "celine", "jon", "caroline"])

// Write a functino that takes in an array and a target. REturn a 
// boolean about if the the target is included. 
// Use forEach, Dont use includes or a for loop . 
const includes = (arr, target) => {
    let found = false; 
    arr.forEach((el, i) => {
        if(el === target) {
            found =  true
        } 
    })
    return found; 
}

// console.log(includes([1, 2, 3, 4, 5], 6) )//=> false;
// console.log(includes([1, 2, 3, 4, 5], 3)) //=> true;

// ["cat", "cow",  "bird"].forEach((animal, i) => {
//     console.log(i)
// })

// write a function that takes in an array and prints every other element. 
const everyOther = (arr) =>  {
    arr.forEach((el, i) => {
        if(i % 2 === 0) {
            console.log(el)
        }
    })
}

// everyOther([1, 2, 3, 4, 5])

const myMap = (arr, cb) => {
    let res = [];
    for(let i = 0; i < arr.length; i++) {
        res.push(cb(arr[i]))
    }
    return res; 
}

// console.log(
//    [1, 2, 3, 4].map((el) => {
//     return el * 2
//    }) 
// )
// Write a function that takes in an array and returns a new array with every element quadrupled. 
// use map. 
// const quad = (arr) => {
//    return  arr.map((el) => {
//         return el * 4
//     })
//     // return res
// }
const timesFour = num =>{
    return num * 4
}

const quad = (arr) => {
   return  arr.map(timesFour)
}

// console.log(quad([1, 2, 3, 4]))

// write a functin that takes in an array of numbers and returns a new array 
// with each number having been multiplied by its index.

const indexMap = (arr) => {
    return arr.map((el, i) => {
        return el * i;
    })
}
// console.log(indexMap([1, 2, 3, 4]) )// => [0, 2, 6, 12]

// FILTER is an array method that returns a new array of all elements that had a truthy 
// return value from the callback. 
const allOnes = arr => {
   return  arr.filter((el) => {
        return el === 1
    })
}

// console.log(allOnes([1, 2, 3, 1, 4, 1])) //=> [1, 1, 1]

// Write a function that takes in an array of number. Filter the array so we are left with only the 
// even numbers

// const allEvens = (arr) => {
//     return arr.filter((el) => {
//         return el % 2 === 0 ;
//     })
// }

// console.log(allEvens([1, 2, 3, 4, 5,6 , 7]))

//EVERY // array method that takes in a callback. It returns a boolean. Will return true if every 
// element from the callback return, returns a truthy value

const allEvens = (arr) => {
    return arr.every((el) => {
        return el % 2 === 0;
    })
}

// console.log(allEvens([2, 4, 6, 8, 10]))
// console.log(allEvens([2, 4, 5, 8, 10]))

// Write a function that takes in an array and a target, return whether all elements in the array 
// are greater than the target. 

// const greaterThan = (arr, target) => {
//     return arr.every((el) => {
//         return el > target
//     })
// }

// console.log(greaterThan([4, 5, 6], 2)) // true 
// console.log(greaterThan([4, 5, 6], 4)) // false  


Array.prototype.showMeTheMoney = function(fn) {
    // console.log(this)
    return "the money"
}

Array.prototype.forEachReverse = function(cb) {
    for(let i = this.length - 1; i >= 0; i--) {
        cb(this[i])
    }
}
// let arr = [1, 2, 3, 4];
// arr.forEachReverse(el => {
//   console.log(el);
// });

String.prototype.yell = function() {
    return this.toUpperCase();
}

// let str = "hello my name is corey"
// console.log(str.yell())

function fire() {
    console.log(this)
}

// fire()

// 1. Write a function called myFilter that takes in an array and a callback. 
// It should return a new array with only the elements that had a truthy return 
// from the callback. 
// Dont use the built in filter. Then try and use forEach to help write it. 


const myfilter = (arr, callback) => {
    let output = [];
    // for(let i = 0; i < arr.length; i++) {
    //     if(callback(arr[i])) {
    //         output.push(arr[i])
    //     }
    // }
    arr.forEach(el => {
        if(callback(el)) {
            output.push(el)
        }
     })
    return output;
}

// console.log(
//     myfilter([1, 2, 1, 0, 0, 1], (el) => el)
// )

// console.log(
//    [1, 2, 1, 0, 0].filter(el => {
//        return el;
//    })
// )



// 2. Write a function that takes in an array of people objects and returns a 
// new array with only the names listed. 
let people = [{name: "corey", age: 100},
             {name: "jon", age: 90}, 
             {name: "Beavis", age: 16}, 
             {name: "Butthead", age: 17}, 
             {name: "Rick", age: 72}, 
             {name: "Paul", age: 16}, 
             {name: "Celine", age: 177},
             {name: "Morty", age: 12},
            {name: "Caroline", age: 21},
            {name: "Beth", age: 18}
            ]
const peopleName = (arr) => {
    return arr.map((person) => {
        return person["name"]
    })
}
const peopleAge = (arr) => {
    return arr.map((person) => {
        return person["age"]
    })
}
const peopleAttribute = (arr, attr = "name") => {
    return arr.map((person) => {
        return person[attr];
    })
}
// console.log(peopleAttribute(people, "age"));








// 3. Write a function that takes in an array of people objects 
// and returns a new array with only people that have ages of 18 and over.
// Think of ways to make this more flexible. ageRestriction. Default argument?
// [
//   { name: "corey", age: 100 },
//   { name: "jon", age: 90 },
//   { name: "Rick", age: 72 },
//   { name: "Celine", age: 177 },
//   { name: "Caroline", age: 21 },
//   { name: "Beth", age: 18 },
// ];
const ageRestriction = (arr, age = 18) => {
    let filtered =  arr.filter((person) => {
        return person["age"] >= age;
    })

    return filtered;
}
// console.log(ageRestriction(people))





// 4. Write a function that takes in an array of people objects and returns whether 
// or not every person is 18 or over. 
// Also think about making it more flexible

const overAge = (arr, target = 18) => {
    return arr.every((el) => {
        return el.age >= target
    })
}
// console.log(overAge(ageRestriction(people)))





// 5. Write a function that takes in an array of people objects and returns whether 
// some people are over the age of 18. (hint: you'll need to look up a diff method)

const somePeople = (arr, age = 18) => {
    return arr.some((person) => {
        return person.age >= age; 
    })
}

// console.log(somePeople(ageRestriction(people, 200)))




// 6. Write a function that takes in an array of words and returns an object with 
// the count occurances of each word. 

let wordArr = ["hello", "goodbye", "corey", "hello", "hello", "corey"]
// {hello: 3, corey: 2, goodbye: 1} - I don't care about order 

const wordCounter = (words) => {
    let counts = {};
    words.forEach((word) => {
        if(counts[word]) {
            counts[word] += 1
        } else {
            counts[word] = 1;
        }
    })
    return counts
}

console.log(wordCounter(wordArr))


// 7. Write a function called onlyOddStrings that takes in an array of strings and 
// returns an array that includes only strings with an odd number of characters. 

