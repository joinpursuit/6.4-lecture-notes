

// // Warm up: 
// // Write a function that takes in an array of people objects
// // and returns a new array of all the names. 
// const justTheNames = (arr) => {
//     return arr.map(person => {
//         return person["name"]
//     })
// }

// let people = [{name: "corey", age: 100}, {name: "jon", age: 70}, 
// {name: "Celine", age: 18}]

// // console.log(justTheNames(people)) // => ["corey", "jon", "Celine"]

// // How can you convert a number into a string? 
// // console.log( typeof (13 + ""))
// // let num = 10; 
// // console.log(typeof String(num));

// // num = num.toString();
// // console.log(typeof num)
// // How about a string to a number? 
// // let str = "13";
// // console.log(typeof Number(str));
// // console.log(typeof parseInt(str));
// // console.log(typeof (str * 1));
// // console.log(typeof +str );

// // How do you test if something is NaN ? 
// // console.log(isNaN(NaN));
// // console.log(NaN !== NaN);


// // Come up with a specific question you'll ask Corey today (hopefully about code). 
// // We're a month in and  still no one has asked for relationship advice... :-(
// Array.prototype.myReduce = function(callback, initialValue) {
//     let i = 0; 
//     let acc;
//     if(initialValue === undefined) {
//         acc = this[0];
//         i++;
//     } else {
//         acc = initialValue;
//     }
//     while(i < this.length) {
//         acc = callback(acc, this[i])
//         i++
//     }
//     return acc;
// }
// // let arr = [1, 2, 3, 4]
// // console.log(arr.myReduce((acc, el) => acc + el, 10 ))

// let person = {name: "corey", age: 100}
// // Add a hair key pointing to your favorite boolean value . 
// // Reassign the name property so that it's your name instead. 
// // Delete the age propery. 
// person["hair"] = true;
// person["name"] = "King Henry"
// delete person.age
// // console.log(person);


// //write a function that takes in an array
// //  and returns a new array without any dups

// const noDups1 = arr => {
//     let output = [];
//     arr.forEach(el => {
//         if(!output.includes(el)) {
//             output.push(el)
//         }
//     })
//     return output; 
// }

// const noDups2 = arr => {
//     return arr.filter((el, i) => {
//         return arr.indexOf(el) ===  i
//     })
// }

// const noDups3 = arr => {
//     return arr.reduce((acc, el) => {
//         if(!acc.includes(el)) {
//             acc.push(el)
//         }
//         return acc;
//     }, [])
// }

// const noDups4 = arr => [...new Set(arr)]
// const noDups5 = arr => {
//     let obj = {};
//     arr.forEach(el => {
//         obj[el] = el;
//     })
//     return Object.values(obj)
// }

// const noDups6 = arr => {
//     let output = [];
//     for(let el of arr) {
//         let includes = false;
//         for(let i = 0; i < output.length; i++) {
//             if(el === output[i]) {
//                 includes = true;
//             }
//         }
//         if(!includes) {
//             output.push(el)
//         }
//     }
//     return output;
// }
// // console.log(noDups6([2, 2, 4, 7, 2]))

// // let - ES6, block scoped 
// // const - constants, not be reassigned, ES6, block scoped 
// // var - ES5, function scoped
// // === 
// // !
// // !==
// // ||
// // "cat" && "dog"
// // 0 || true 

// // let fruits = ["kiwi", "banana"]
// // furits[0]
// // fruits[frsuit.length - 1]

// // console.log("corey".slice(2, 4))
// // let arr1 = [1, 2, 3]
// // let arr2 = [1, 2, 3]
// // let arr3 = arr2;
// // console.log(arr3 === arr2)
// let arr = [1, 2, 3, 4, 5, 6];
// // arr.splice(3,0, 7)
// // console.log(arr);
// // console.log(arr.push(13))
// // for(initialization; while condtion is true; step towards the end) {
// //     blcok of code 
// // }
// // for(let el of arr) {
// //     //code 
// // }

// // for(let key in obj) {
// //     //code 
// // }
// // initalization 
// // while(condtion is true) {
// //     //code 
// //     //step towards the end 
// // }
// // let str = "corey";
// // console.log(str.split("r").join("r"))

// function doubler(num) {
//     return num * 2
// }
// // const doubler = (num) => num * 2 //implicit 

// function doubleSquare(num) {
//     return doubler(num * num)
// }

// const caller = (callback) => {
//     return callback()
// }

// // Array.prototype.myForEach = function(cb) {
// //     for(let i = 0; i < this.length; i++) {
// //         cb(this[i])
// //     }
// // }

// class HumanPlayer {
//     constructor(name) {
//         this.name = name; 
//     }
//     getMove() {
//         return this.name + " would make a move here"
//         // return readline.questions("What is your letter guess")
//     }
//     static saySomethingNice() {
//         return "I love you"
//     }
// }
// // let corey = new HumanPlayer("C-Dog");
// // console.log(corey.getMove())
// // console.log(HumanPlayer.saySomethingNice());

// function Board(length) {
//     this.board = new Array(length).fill("_")
// }

// Board.prototype.addChar= function(idx, letter) {
//     this.board[idx] = letter;
// }
// let board = new Board(5);
// board.addChar(1, "o")
// console.log(board);


// Warm UP: Write a function that takes in
//  a string and returns a string with all the vowels removed.

const disemvowel = (str) => {
    let lettersToAvoid = "aAeEiIoOuU";
    let output = "";
    for(let char of str) {
        if(!lettersToAvoid.includes(char)) {
            output = output + char; 
        }
    }
    return output; 
}
// console.log(disemvowel("hello everyone HOW are you? "))

// Write a function that takes in a string and 
// returns whether or not the string is a pallindrome 
// (same forwards and backwards)

const isPallEasy = (str) => {
    return str === str.split("").reverse().join("")
}
// console.log(isPallEasy("aaabbaaca"));

const isPallWhile = str => {
    let i = 0; 
    let j = str.length - 1;
    while(i < j) {
        if(str[i] !== str[j]) {
            return false; 
        }
        i++;
        j--;
    }
    return true;
}

const isPallForLoop = str => {
    for(let i = 0; i < Math.floor(str.length / 2); i++) {
        if(str[i] !== str[str.length - 1 - i]) {
            return false; 
        }
    }
    return true;    
}
// console.log(isPallWhile("aaabbaaa"));

// Add your own myMap to the Array's prototype. 
Array.prototype.myMap = function(callback) {
    let result = [];
    for(let i= 0; i < this.length; i++) {
        result.push(callback(this[i], i))
    }
    return result; 
}
// let arr = ["cat", "dog", 'bird'];
// console.log(
//     arr.myMap(el => el.toUpperCase())
// )
// // Add your own myFilter to the Array's prototype. 
Array.prototype.myFilter = function(cb) {
    let result = [];
    for(let i = 0; i < this.length; i++) {
        if(cb(this[i], i)) {
            result.push(this[i])
        }
    }
    return result; 
}
// let arr = [1, 2, 3, 4, 5];
// console.log(
//     arr.myFilter((el, i) => {
//         return el % 2
//     })
// )
// Write a function that takes in an array of numbers and a 
// target number. Return an array of all the paired indicies that add 
// up to the target. 

const findIndicies = (arr, target) => {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if((arr[i] + arr[j]) === target) {
                result.push([i, j])
            }
        }
    }
    return result; 
}

const findIndicies2 = (arr, target) => {
    let result = [];
    let searching = {};
    for(let i = 0; i < arr.length; i++) {
        let goal = target - arr[i];
        if(searching[arr[i]] !== undefined) {
            result.push([searching[arr[i]], i]);
        } else {
            searching[goal] = i; 
        }
    }    
    return result; 
}


// let nums = [-7, 0, 2, 3, 7, 8, -2]
// let target = 0;
// console.log(findIndicies2(nums, target))
// Output: [[0, 4], [2, 6]]

// WARM up
// Write a function that takes in two arrays. 
// The first array contains elements that should 
// not be in the second array. Return 
// a new array without those elements. 
const removeElements = (arr1, arr2) => {
    let output = [];
    for(let i = 0; i < arr2.length; i++) {
        if(!arr1.includes(arr2[i])) {
            output.push(arr2[i]);
        }
    }
    return output; 
}

const removeEls = (arr1, arr2) => arr2.filter(el => !arr1.includes(el))

// console.log(removeEls([5, 8, 9], [1, 2, 3, 4, 5, 6, 9, 10]))
// => [1, 2, 3, 4, 6, 10]

// Write a function that takes in an array 
// of strings. Return the seconds longest 
// string. 
const secondLargestString = arr => {
    let largest = "";
    let secondLargest = "";
    arr.forEach(string => {
        if(string.length > largest.length) {
            secondLargest = largest;
            largest = string; 
        } else if (string.length > secondLargest.length){
            secondLargest = string; 
        }
    })
    return secondLargest;
}
console.log(secondLargestString(["hellos", "four", "cat", "fiver"]));
