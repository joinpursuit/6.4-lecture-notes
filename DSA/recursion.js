// What should they have? 
// Base Case  => takes care of edge cases and tells our function when to stop 
// Inductive Step => makes a step towards the base case .
// [1, 2, 3, 4] //=> 24
//[] // 0
const product1 = (array) => {
    let arr = [...array];
    const run = (arr) => {
        if(arr.length === 1) return arr[0];
        if (!arr.length) return 0;
        let el = arr.pop();
        return run(arr) * el;
    }
    return run(arr);
}
const product = (arr, i = 0) => {
    if(!arr.length) return 0; 
    if(i >= arr.length) return 1; 
    return product(arr, i + 1) * arr[i]
}

// let arr =  [1, 2, 3, 4]
// let prod = product1(arr);
// console.log(arr.map(el => el * 2))
// console.log(product([1, 2, 3, 4]));
// console.log(product([]));


const sum1 = (arr) => {
    if(!arr.length) return 0; 
    return arr.pop() + sum(arr) 
}

const sum = (arr, i = 0) => {
    if(i >= arr.length) return 0;
    return sum(arr, i + 1) + arr[i];
}

// console.log(sum([1, 2, 3, 4]))

// 5! => 5 * 4 * 3 * 2 * 1 

const factorial = (num) => {
    if(num < 0) throw Error ("NO NEGATVIES!"); 
    if(num <= 1) return 1; 
    return factorial(num - 1) * num; 
}

// console.log(factorial(5))
// [0, 1, 1, 2, 3, 5, 8, 13]
// fibs(2);
// fibs(0), fibs(1)

const fibs = (num) => {
    if(num <= 1) return num; 
    return fibs(num - 1) + fibs(num - 2);
}
// console.log(fibs(100))

const fibArray = (num, fibs = [0, 1]) => {
    if(num <= fibs.length) return fibs.slice(0, num);
    let nextFib = fibs[fibs.length - 1] + fibs[fibs.length - 2];
    fibs.push(nextFib);
    return fibArray(num, fibs);
}

console.log(fibArray(5))