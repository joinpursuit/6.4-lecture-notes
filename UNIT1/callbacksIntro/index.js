// // import { array } from "prop-types";

// // // WARM UP: Write a function that takes in a string and returns an object
// // //  with the occurrence count of each character.
// // //  charCount(“hello”) //=> {h:1, e: 1, l: 2, o: 1}

// // const charCount = (str) => {
// //     let counts = {};
// //     for( let i = 0; i < str.length; i++) {
// //         let char = str[i];
// //         counts[char] ? counts[char]++ : counts[char] = 1
// //         // if(counts[char]) {
// //         //     counts[char] += 1
// //         // } else {
// //         //     counts[char] = 1;
// //         // }
// //     }
// //     return counts;
// // }

// // // console.log(charCount("hello"))

// // // CALLBACKS!!!! HECK YES! 
// // // A function that gets passed into another function via an argument

// // const callFunctions = (fn) => {
// //     return fn()
// // }

// // const queen = () => {
// //     return "Dont stop me now!"
// // }

// // // console.log(callFunctions(queen))

// // const doMath = (num1, num2, callback) => {
// //     return callback(num1, num2)
// // }

// // const addition = (num1, num2) => {
// //     return num1 + num2
// // }

// // const multiply = (num1, num2) => num1 * num2
// // let luckyNum = 13; 
// // let lazyNum = 10; 
// // // console.log(doMath(luckyNum, lazyNum, multiply))
// // // console.log(doMath(13, 10, (num1, num2) => {
// // //     return num1 - num2
// // // }))
// // let num = 0; 

// // let timer = setInterval(() => {
// //     num++
// //     if(num > 5) {
// //         clearInterval(timer)
// //     } else {
// //         console.log(num)
// //     }
// // }, 1000)

// // setTimeout(() => console.log("hi in five"), 5000)
// // Write a function that takes in a callback and an array. And calls that
// // callback for every element in the array. 

// // const myForEach = (arr, callback) => {
// //     for( let i = 0;  i < arr.length; i++) {
// //         callback(arr[i]);
// //     }
// // }

// // myForEach([1, 2, 3], (num) => console.log(num))

// const printTriple = (num) => console.log(num * 3)
// myForEach([1, 2, 3], printTriple)

// // [1, 2,3], (num) => console.log(num)
// // pring to screen 1 then 2 then 3

// // Create a function called myMap. It should take in an array and a callback. 
// // This time save the return value of each element after it's been acted on by 
// // the callback into a new array. 
// // Return the new array at the end. 

const myMap = (arr, cb) => {
    let result = [];
    for(let i = 0; i< arr.length; i++) {
        result.push(cb(arr[i]))
    }
    return result
}
const returnZero = (_) => {
    return 0;
}

const toZero = (arr) => {
    return myMap(arr, (_) => {
        return 0;
    })
}
// console.log(toZero([1, 2, 3,4]))
// Write a function that takes in an array and returns a new array 
// with every element equal to 0. Use myMap. 

// const double = (num) => {
//     return num * 2
// }

// // console.log(myMap([1,2 ,3 ], double ))

// // write a function that takes in an array. Return an array where each element has 
// // been trippled. Use the myMap function inside. 
// const trippleArray = (arr) => myMap(arr, (num) => num * 3)


// console.log(trippleArray([1, 2,3 ]))

const myForEach = (arr, callback) => {
    for( let i = 0;  i < arr.length; i++) {
        callback(arr[i]);
    }
}

const arrSum = (arr) => {
    let sum = 0;
    myForEach(arr, (el) => sum += el )
    return sum
}
// console.log(arrSum([1, 2, 3, 4]))

// WARM UP: Write a function that takes in an array
//  and calculates the sum of all the numbers. Use your myForEach 
// function from yesterday inside your sum function.

const sayHello = (name = "celine") => {
    return "Hello " + name;
}

console.log(sayHello("corey"))
console.log(sayHello())