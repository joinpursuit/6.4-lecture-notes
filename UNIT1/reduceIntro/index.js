
// Warm Up: 
// Write a function that takes in an array and returns
// the count occurance of each element in the array. 
const occuranceCount = (arr) => {
    let counts = {};
    arr.forEach((el) => {
        if(counts[el]) {
            counts[el] += 1
        } else {
            counts[el] = 1;
        }
    })
    return counts; 
}
// What ever is returned from the callback in the last iteration is the 
// next iterations accumulator. 

const occuranceCountReduce = (arr) => {
    return arr.reduce((counts, el) => {
        if (counts[el]) {
          counts[el] += 1;
        } else {
          counts[el] = 1;
        }
        return counts
    }, {} )
}

// console.log(occuranceCountReduce([1, 1, 1, 2, 5, 5]))

// Write a function that takes in an array of nums 
// and returns the sum of all the numbers. 

const sumArray = (arr) => {
    let sum = 0;
    arr.forEach((el) => {
        sum += el;
    })
    return sum; 
}

const sumArrayReduce = arr => {
    return arr.reduce((sum, el, i) => {
        // console.log(i)
        return sum += el;
    }, 0)
}

// console.log(sumArrayReduce([1, 2, 3, 4]))

// console.log(
//     [1, 2, 3, 4].reduce((acc, el) => {
//     return acc + el
// }))
//  // => 10

// console.log(
//     [1, 2, 3, 4].reduce((acc, el) => {
//     return acc + el
// }, 10))
//  // => 20

//Write a function that takes in an array and returns the largest number in 
// the array

const largestNum = (arr) => {
    let largest = arr[0] 
    arr.forEach(el => {
        if(largest < el) {
            largest = el; 
        }
    })
    return largest
}

const largestNumReduce = arr => {
    let biggest = arr.reduce((largestNum, el) => {
        if(largestNum < el) {
            largestNum = el
        }
        return largestNum
    }, arr[0])
    return biggest
}

//IntialValue is optional. 
// What if I don't add an initialValue?
// The accumlator will automattically start as the first element in the array. 
// And the first el will actually be the 2nd element. 

// console.log(largestNumReduce([-2, -4, -1]));

// Reduce - ARRAY METHOD 
//  - Takes in a callback and an initialStart
 
//  Callback 
//     - accumulater, el (also optional i)