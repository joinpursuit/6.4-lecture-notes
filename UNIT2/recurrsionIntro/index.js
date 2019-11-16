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
[1]

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

console.log(fibRec(1)) // => 1
console.log(fibRec(2)) // => 1
console.log(fibRec(3)) // => 2
console.log(fibRec(4)) // => 3
console.log(fibRec(5)) // => 5
console.log(fibRec(6)) // => 8
console.log(fibRec(7)) // => 13

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