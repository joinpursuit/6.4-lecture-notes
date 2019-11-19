// WARM UP:
//  Using a while loop write a function 
// that takes in an array and returns the sum of all 
// elements in the array. 
const sumOfAll = (arr) => {
    let i = 0; 
    let sum = 0; 
    while(i < arr.length) {
        sum += arr[i]
        i++
    }
    return sum; 
}

const sumOfAllRec = (arr, i = 0, sum = 0) => {
    if(i >= arr.length) return sum; 
    sum += arr[i];
    i++
    return sumOfAllRec(arr, i, sum)
}

const sumOfAllRec2 = (arr) => {
    if(arr.length === 0) return 0; 
    let el = arr.pop();
    return sumOfAllRec2(arr) + el
}
// console.log(sumOfAllRec2([1, 2, 3, 4, 5]));


// Using a while loop write a function that takes in a 
// number and finds the factorial of that number. 
// Input: 5
// Ouput 120 (5 * 4 * 3 * 2 * 1)
const factorial = (num) => {
    let product = 1;
    while(num > 0) {
        product *= num; 
        num--;
    }
    return product;
}

const factorialRec = (num) => {
    if(num === 0 ) return 1;
    return num * factorialRec(num - 1)
}
// console.log(factorialRec(5));

//


// Write a method fib(n) that takes in a number and returns the nth number of
// the fibonacci sequence.
// In the fibonacci sequence, the 1st number is 1 and the 2nd number is 1. To generate the
// next number in the sequence, we take the sum of the previous two fibonacci numbers.
// For example the first 5 numbers of the fibonacci sequence are `1, 1, 2, 3, 5`

// Examples:

const fib = (num) => {
    let fibs = [1, 1]
    for(let i = 2; i < num; i++) {
        fibs[i] = fibs[ i - 1] + fibs[i - 2]
    }
    return fibs[fibs.length - 1]
}

const fibRec = (num) => {
    if(num === 2 || num === 1) return 1; 
    return fibRec(num -1) + fibRec(num - 2)
}

// console.log(fibRec(1)) // => 1
// console.log(fibRec(2)) // => 1
// console.log(fibRec(3)) // => 2
// console.log(fibRec(4)) // => 3
// console.log(fibRec(5)) // => 5
// console.log(fibRec(6)) // => 8
// console.log(fibRec(7)) // => 13

// A recurrsive function is any function that calls itself. 
// let i = 0; 
// const sayHello = () => {
//     i++
//     console.log(i);
//     sayHello();
    
// }

// sayHello()

const countToZero = (num) => {
    while(num > 0) {
        console.log(num);
        num--
    }
}
const countToZeroRec = (num) => {
    if(num <= 0) return; 
    console.log(num)
    num--;
    countToZeroRec(num)
}
// countToZeroRec(5)

// WARM UP! 
// Write a method, lucasNumber(n), that takes in a number.
// The method should return the n-th number of the Lucas Sequence.
// The 0-th number of the Lucas Sequence is 2.
// The 1-st number of the Lucas Sequence is 1
// To generate the next number of the sequence, we add up the previous two numbers.
//
// For example, the sequence begins: 2, 1, 3, 4, 7, 11, ...
//
// Solve this recursively!
//
const lucasNumber = num => {
    if(num === 0) return 2; 
    if(num === 1) return 1; 
    return lucasNumber(num - 1) + lucasNumber(num - 2)
}
// Examples:
//
// console.log(lucasNumber(0))   // =>    2
// console.log(lucasNumber(1))   // =>    1
// console.log(lucasNumber(2))   // =>    3
// console.log(lucasNumber(3))   // =>    4
// console.log(lucasNumber(5))   // =>    11
// console.log(lucasNumber(9))   // =>    76


// We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies 
// (1, 3, ..) have the
//  normal 2 ears. The even bunnies (2, 4, ..) we'll 
// say have 3 ears, because they each have a raised foot. 
// Recursively return the number of "ears" in the bunny 
// line 1, 2, ... n (without loops or multiplication).

// Examples
const bunnyEars2 = num => {
    if(num === 0) return 0;
    let ears = num % 2 ? 2 : 3
    return ears + bunnyEars2(num - 1)
}

// console.log(bunnyEars2(0)) //→ 0
// console.log(bunnyEars2(1)) //→ 2
// console.log(bunnyEars2(2)) //→ 5

// We have triangle made of blocks. The topmost row has 1 block, 
// the next row down has 2 blocks, the next row has 3 blocks, and so on.
// Compute recursively (no loops or multiplication) the total number 
// of blocks in such a triangle with the given number of rows.

// Examples
const triangle = (rows) => {
    if(rows === 0) return 0; 
    return rows + triangle(rows - 1);
}
console.log(triangle(0)) //→ 0
console.log(triangle(1)) //→ 1
console.log(triangle(2)) //→ 3
console.log(triangle(3)) //→ 6
console.log(triangle(4)) //→ 10