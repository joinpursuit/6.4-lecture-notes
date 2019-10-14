//  Write a code block that examines the sum of two arrays and 
//  logs the array with the bigger sum. 

 const arr1 = [4, 5, 26, 34, 3, 6, 7];
 const arr2 = [5, 12, 13, 13, 15, 4, 7, 8, 9];

//  let sum1 = 0;
//  let sum2 = 0; 

//  for(let i = 0; i < arr1.length; i++) {
//      sum1 += arr1[i]
//  }

//  for(let i = 0; i < arr2.length; i++) {
//      sum2 += arr2[i]
//  }

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum; 
}


// console.log(sum)

// console.log(sumArray(arr1) === 85)

// console.log(sumArray(arr1) < sumArray(arr2) ? arr1 : arr2)

// console.log(Number("13"))

// Function that takes in a name and returns a greeting to that name
function greeting(name) {
    return "Hello " + name; 
}

// console.log(greeting("Corey"))

function sum(num1, num2) {
    let sum = num1 + num2; 
    return sum; 
}
// console.log(sum(10, 2))

// FUNCTIONS SHOULD ONLY DO ONE THING! 
// functions can call other functions! 

// Write a function called doubleSquare that returns a number thats been doubled 
// and then squared. Then try to break it into more than one function.
// function printCat() {
//     console.log("cat")
//     return "cat"
// }
// printCat()
// let count = 0; 
function incrementCount() { // a function for it's side effect
    count++; // count already exists in the scope that the function was declared in. 
}
// console.log(count)
// incrementCount();
// console.log(count)


// function doubleSquare(num) {
//     let doubled = num * 2; 
//     return doubled * doubled ; // Math.pow(doubled, 2) // doubled**2; 
// }
// function double(num) {
//     return num * 2; 
// }
// function square(num) {
//     return num * num; 
// }

// function doubleSquare(num) {
//     return square(double(num));
// }
//  console.log(doubleSquare(4))

// console.log(doubleSquare(4))
// write a function that takes in two arguments and returns the sum of them. 

// ONce a function returns that function is over. 

// function evenOrOdd(num) {
//     if(num % 2 === 1) {
//         return "NUMBER IS ODD"
//     } else {
//         return "NUMBER IS EVEN"
//     }
//     return "NEITHER EVER NOR ODD"; // UNREACHABLE
// }
// console.log(evenOrOdd("cat"))

// function sum(arr) {
//     let sum = 0; 
//     for(let i = 0;  i < arr.length; i ++) {
//         sum += arr[i]
//         return sum // Ends loop
//     }
//     return sum; 
// }

// console.log(sum([1, 2, 3]))

// function sayHello() {  // ES5
//     return "Hello"
// }

// var sayHello = function(name) {
//     return "Hello " + name
// }

// const sayHello = (name) => {
//     return "Hello " + name; // Explicit return 
// }

// const sayHello = (name) => "Hello " + name;  // Implicit return 

// console.log(sayHello("corey"))

// Function that takes two numbers and returns the sum of the two 
const addTWoNums = (num1, num2) => num1 + num2;

// const addTWoNums = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addTWoNums(7, 6))

// Rewrite doubleSquare
// const doubleSquare = (num) => {
//     num = num + num; 
//     num = Math.pow(num, 2)
//     return num ; 
// }
// const doubleSquare = (num) => {
//    return (num * 2)** 2
// }

// const doubleNum = num => num * 2
// const squareNum = num => Math.pow(num, 2)
// const doubleSquare = num => squareNum(doubleNum(num))
// console.log(doubleSquare(4))

// Write a function that takes in an array and returns the product of the array. [1, 2,3, 4 ] // => 24 

// const arrayProduct = (arr) => {
//     let product = 1; 
//     for(let i = 0; i < arr.length; i += 1) {
//         product *= arr[i]; // product = product * arr[i]
//     }
//     return product; 
// }
// console.log(arrayProduct([1, 2, 3, 4]))

function arrayProduct(arr) {
    let product = 1; 
    for(let i = 0; i < arr.length; i += 1) {
        product *= arr[i]; // product = product * arr[i]
    }
    return product; 
}

//  side effect!
// let health = 100; 

// const takeDamage = (num) => {
//     health -= num; 
// }

// console.log(health)
// takeDamage(20);
// console.log(health)

const addNums = (num1, num2) => {
    return num1 + num2
}

const sayHello = () => {
    return "hello"
}

const caller = (fn) => {
    return fn();
}

// console.log(caller(sayHello))

const doMath = (num1, num2, mathFn) => {
    return mathFn(num1, num2)
}
console.log(doMath(13, 49, addNums))
let favOriteNum = 13;
let leastFav = 49; 
// addNums(favOriteNum, leastFav)