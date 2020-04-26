// Big 0/ Fastest to slowest: 

// O(1) => CONSTANT => keying into an object/ console.log / math operations 
// O(log(n)) => LOGARITHMIC => Binary Search // keep splitting the phone book in half 
// O(n) => LINEAR => iterating through and input of unknown length. 
// O(n*log(n)) => LINEARITHMIC => Sorting (mergesort, and quicksort) / any built sorts 
// O(n^2) => QUADRATIC => Nested Loop. For every loop nested increase the exponent by 1. 
// O(2^n) => EXPONENTIAL => Fibonoccai solved w/o memoization and recursively. 
// O(n!) => FACTORIAL => 5! -> 5 * 4 * 3 * 2 * 1 // Permutations 
//            [1, 2, 3] // => [1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 2, 1], [3, 1, 2]


// Space Complexity 
 // O(1) Same number of varialbes no matter what. 
 // O(n) creating an output of equal length in relation to the input 


// function exampleOne(string, targetChar) {
//   for (char of string) {
//     if (char === targetChar) {
//       return true;
//     }
//   }
//   return false;
// }

// linear. 

// function exampleTwo(arr) {
//   for (let i = 0; i < 1000; i++) { // always doing a 1000 loops
//     console.log("Many printings!");
//   }
// }

// // Constant 

function exampleThree(arr) {
  let count = 0;
  for (elem of arr) { // linear
    if (contains(arr, elem + 1)) {
      count += 1;
    }
  }
  return count;
}

function contains(arr, targetElem) { // linear
  for (elem of arr) {
    if (elem === targetElem) {
      return true;
    }
  }
  return false;
}

//Quadratic o(n^2)

function compoundRuntimes(arr) {
  for (let i = 0; i < 1000; i++) { // O(1)
    console.log("Hi");
  }
  for (num of arr) {  // O(n)
    console.log(num);
  }
  for (let i = 0; i < arr.length; i++) { 
    for (let j = 0; j < arr.length; j++) { // O(n^2)
      if (arr[i] === arr[j] && i !== j) { // constant for comparisons 
        console.log("It's a match!");
      }
    }
  }
}
// O(n^2) => Answer 

// //O(n^2) + O(n) + O(1)
// n = 5 
// 25, 5, 1
// n = 10
// 100, 10, 1

// n = 1000 
// 1000000, 1000, 1 


function whatSThis(arr) {
    for(let el of arr) { // n
        console.log(el);
    }
    for(let el of arr) { // n
        console.log(el);
        
    }
}

// O(n) when dealing with big O remove the constants when calculating. 


function doStuff(arr) {
  for (num of arr) { // n^1
    for (num of arr) { // n^2
      for (num of arr) { // n^3
        console.log(num);
      }
    }
  }
}

// O(n^3) 

function foo(arr) { // O(n)
  for (num of arr) {
    console.log(num);
  }
}

function bar(arr) {
  foo(arr); //O(n)
  for (let i = 0; i < arr.length; i++) { //O(n)
    foo(arr); //O(n)
  }
}

// O(n^2)

function secondSmallestWithSort(arr) {
  if (arr.length === 0) return; //O(1)
  return arr.sort((a, b) => a - b)[1];
}

//O(n*log(n))

function myMap (arr, callback) {
    let output = [];
    for(let el of arr) {
        output.push(callback(el))
    }
    return output
}

//Space complexity O(n)