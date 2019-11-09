// function adder() {
//     let sum = 0;
//     // for(let i = 0; i < arguments.length; i++) {
//     //     sum += arguments[i]
//     // }
//     for(let key in arguments) {
//        sum +=  arguments[key]
//     }
//     return sum;
// }
const adder = (...args) => {
    let sum = 0; 
    args.forEach(el => sum += el)
    return sum; 
}

// console.log(adder(13, 7, 18, 7)) // => 45
// const arrayCheck = (arr) => {
//     console.log(...arr)
// }

// console.log(arrayCheck([1, 2, 3, 4]));
// let arr = [1, 2, 3, 4, 5]
// let arr2 = [...arr];
// arr2.push(6)
// console.log(arr);
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6];
console.log([...arr1, ...arr2]) //=> [1, 2, 3, 4, 5, 6]

// let person = {name: "Pirate", age: 42}
// let morphPerson = {...person, hair: "HAT"}
// console.log(person);
// console.log(morphPerson);

// Write a function that takes in an unknow amound of arguements and returns 
// the product. 

const prod = (...args) => {
    let product = 1; 
    args.forEach(el => product *= el)
    return product;
}

//Write a funtion that takes in an array, sorts the array, maps the sorted array
// and multiplies each number by 2, and then returns the original array. 
const doesNothing = arr => {
    let copy = [...arr];
    copy.sort((a, b) => a - b).map(el => el * 2)
    return arr; 
}
//Write a functon that takes in two arrays, merges them toether and then returns 
// the new array sorted
const merging = (arr1, arr2) => [...arr1,...arr2].sort((a, b) => a - b)