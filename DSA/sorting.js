// Bubble Sort O(n^2)

// have a sorted variable
// while it's not sorted 
// set sorted to true 
// iterate array and compare with neighbor 
// if swap is needed, then swap and updated sorted variable to false 
// return our array 


const bubbleSort = arr => {
    let sorted = false; 
    while(!sorted) {
        sorted = true; 
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; //swap elements
                sorted = false; 
            }
        }
    }
    return arr; 
}
// console.log(bubbleSort(arr))

// Insertion Sort O(n^2)

// iterating through the array start at 1. 
// set a temp to the current element and arr[i];
// set a j to be i - 1; 
// while j greater than or equal to zero, and arr[j] > temp
    // arr[j + 1] = arr[i]
    // decrement j 
// arr[j + 1] to be our temp 
//return array 

const insertionSort = (arr) => {
    for(let i = 1; i < arr.length; i++) {
        let temp = arr[i];
        let j = i - 1; 
        while(j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp; 
    }
    return arr; 
}
// temp: 1
// i: 3
// j: -1

// let arr = [3, 2, 1, 4, 1, 7]; // 1, 1, 2, 3, 4, 7,
// left [3, 2, 1, 4, 1]
// pivot: 7 
// right []

// [3, 1, 1, 4, 2] // 1, 1, 2, 3, 4
// left [1, 1]
// pivot: 2 
// right [3, 4]

// [1, 1]    // 1, 1
// left: [1]
// pivot: 1 
// right: []

// [3, 4]    /// 3, 4
// left[ 3]
// pivot 4 
// right []
// console.log(insertionSort(arr))

// Quick Sort is a O(nlog(n)) 
// Recursive 
//  Base Case: if an array's length is less than or equal to one - array is sorted 
// make a pivot of sort 
// check each element is put left items in left array and right items in right array 
// call quicksort on each side and return all elements in order

const quickSort = arr => {
    if(arr.length <= 1) return arr; 
    const pivot = arr[Math.floor(Math.random() * arr.length)];
    const left = [];
    const right = [];
    const equalToPivot = [];
    arr.forEach(el => {
        if(el < pivot) {
            left.push(el)
        } else if(el > pivot){
            right.push(el)
        } else {
            equalToPivot.push(pivot)
        }
    })
    let leftSorted = quickSort(left);
    let rightSorted = quickSort(right);
    return [...leftSorted, ...equalToPivot, ...rightSorted];
}

// [1, 3, 5, 4, 2]
// [1, 3, 4, 2]
// [1, 3, 2]
// [1, 2]
// console.log(quickSort(arr))

// Merge Sort O(nlog(n)) guarenteed 
// recursive 
// made up of two functions 

// write a function called merge that takes in two sorted arrays and returns a new sorted aray. 

// let arr1 = [3z, 4, 6, 9];
// let arr2 = [1, ]

// let arr1 = [ 9];
// let arr2 = []
// [1, 3, 4, 5, 6, 7, 9]

const merge = (arr1, arr2) => {
    const output = [];
    while(arr1.length && arr2.length) {
        // output.push(arr1[0] < arr2[0] ? arr1.shift() : arr1.shift());
        if(arr1[0] < arr2[0]) {
            output.push(arr1.shift())
        } else {
            output.push(arr2.shift())
        }
    }
    return [...output, ...arr1, ...arr2]; 
}

const mergeSort = (arr) => {
    if(arr.length <= 1) return arr; 
    const midIdx = Math.floor(arr.length /2);
    const left = arr.slice(0, midIdx);
    const right = arr.slice(midIdx);
    const mergeLeft = mergeSort(left);
    const mergeRight = mergeSort(right);
    return merge(mergeLeft, mergeRight);
}

// const mergeSort = (arr) => {
//   if (arr.length <= 1) return arr;
//   const midIdx = Math.floor(arr.length / 2);
//   return merge(mergeSort(arr.slice(0, midIdx)), mergeSort(arr.slice(midIdx)));
// };

let arr = [3, 2, 1, 4, 1, 7];
console.log(mergeSort(arr));

