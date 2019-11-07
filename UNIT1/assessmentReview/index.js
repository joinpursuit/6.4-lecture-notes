
// Write a function that takes in two sorted arrays and returns 
// a new array with all elements sorted. Do not use the sort method. 
let arr1 = [1, 5, 7];
let arr2 = [1, 3, 4, 6, 10, 12]


//   Compose Function: https://www.codewars.com/kata/compose-functions-t-combinator/
//   Duplicate Arguments: http://www.codewars.com/kata/duplicate-arguments
// output: [1, 1, 3, 4, 5, 6, 7, 10, 12 ]







const mergeSortedArrays = (arr1, arr2) => {
    let output = [];
    while(arr1.length && arr2.length) {
        output.push(arr1[0] < arr2[0] ? arr1.shift() : arr2.shift());
        // if(arr1[0] < arr2[0]) {
        //     output.push(arr1.shift())
        // } else {
        //     output.push(arr2.shift)
        // }
    }
    return [...output, ...arr1, ...arr2]; 
}
console.log(mergeSortedArrays(arr1, arr2))
//Write a function that takes in a number and determines if that 
// number is a prime number
const isPrime = (num) => {
    if(num < 2) return false;
    if(num === 2) return true;  
    for(let i = 2 ; i <= num / 2; i++) {
        if(num % i === 0) {
            return false; 
        }
    }
    return true; 
}
// console.log(isPrime(2))
// console.log(isPrime(6))
// console.log(isPrime(7))

//Write a function that takes in a number and returns 
// and array of that length filled with prime numbers.
const primeArray = (num) => {
    let output = [];
    let i = 2;
    while(output.length < num) {
        if(isPrime(i)) {
            output.push(i)
        }
        i++
    }
    return output;
}
// console.log(primeArray(5));
