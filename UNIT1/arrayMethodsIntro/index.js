
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
    return "the moeny"
}

Array.prototype.forEachReverse = function(cb) {
    for(let i = this.length - 1; i >= 0; i--) {
        cb(this[i])
    }
}
let arr = [1, 2, 3, 4];
arr.forEachReverse(el => {
  console.log(el);
});

String.prototype.yell = function() {
    return this.toUpperCase();
}

let str = "hello my name is corey"
console.log(str.yell())

function fire() {
    console.log(this)
}

fire()