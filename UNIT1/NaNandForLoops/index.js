// Warm up: Write a function that takes in an array 
// of words and returns a new array with only works of 
// even length. 

const evenLengthWords = (arr) => {
    return arr.filter(word => {
        return word.length % 2 === 0; 
    })
}

// let arr = ["hello", "good", "time", "times", "in", "code"] 
 // OUTPUT: => ["good", "time", "in", "code"]
// console.log(evenLengthWords(arr));

// Write a function that takes in an array of nums and returns
// the second largest num in the array. 
// OUTPUT: 10
const secondLargest = (arr) => {
    let largest = -Infinity;
    let secondLargest = -Infinity;
    arr.forEach(num => {
        if(num > largest) {
            secondLargest = largest;
            largest = num; 
        } else if(num > secondLargest) {
            secondLargest = num;
        }
    })
    return secondLargest;
}

// let nums = [6, 7, 9, 8, 14, 10] 
// console.log(secondLargest(nums));

// NaN 
// console.log(typeof NaN)

// console.log(NaN !== NaN)
// console.log(isNaN(NaN))

// for (let index = 0; index < array.length; index++) {
    
// }

// for in 
// let person = {name: "lil mama", age: 100, hair: true };
let arr = ["apple", "pear", "kiwi", "strawberry mango"]
// console.log(typeof arr);

// for(let index in arr) {
//     console.log("index", index, " value: ", arr[index])
// }

// for of loop
// for(let element of arr) {
//     console.log(element)
// }

let str = "supercali";

for(let char of str) {
    console.log(char);
    
}