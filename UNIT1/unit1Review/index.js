
// Warm up: 
// Write a function that takes in an array of people objects
// and returns a new array of all the names. 
const justTheNames = (arr) => {
    return arr.map(person => {
        return person["name"]
    })
}

let people = [{name: "corey", age: 100}, {name: "jon", age: 70}, 
{name: "Celine", age: 18}]

// console.log(justTheNames(people)) // => ["corey", "jon", "Celine"]

// How can you convert a number into a string? 
// console.log( typeof (13 + ""))
// let num = 10; 
// console.log(typeof String(num));

// num = num.toString();
// console.log(typeof num)
// How about a string to a number? 
// let str = "13";
// console.log(typeof Number(str));
// console.log(typeof parseInt(str));
// console.log(typeof (str * 1));
// console.log(typeof +str );

// How do you test if something is NaN ? 
// console.log(isNaN(NaN));
// console.log(NaN !== NaN);


// Come up with a specific question you'll ask Corey today (hopefully about code). 
// We're a month in and  still no one has asked for relationship advice... :-(
Array.prototype.myReduce = function(callback, initialValue) {
    let i = 0; 
    let acc;
    if(initialValue === undefined) {
        acc = this[0];
        i++;
    } else {
        acc = initialValue;
    }
    while(i < this.length) {
        acc = callback(acc, this[i])
        i++
    }
    return acc;
}
// let arr = [1, 2, 3, 4]
// console.log(arr.myReduce((acc, el) => acc + el, 10 ))

let person = {name: "corey", age: 100}
// Add a hair key pointing to your favorite boolean value . 
// Reassign the name property so that it's your name instead. 
// Delete the age propery. 
person["hair"] = true;
person["name"] = "King Henry"
delete person.age
// console.log(person);


//write a function that takes in an array
//  and returns a new array without any dups

const noDups1 = arr => {
    let output = [];
    arr.forEach(el => {
        if(!output.includes(el)) {
            output.push(el)
        }
    })
    return output; 
}

const noDups2 = arr => {
    return arr.filter((el, i) => {
        return arr.indexOf(el) ===  i
    })
}

const noDups3 = arr => {
    return arr.reduce((acc, el) => {
        if(!acc.includes(el)) {
            acc.push(el)
        }
        return acc;
    }, [])
}

const noDups4 = arr => [...new Set(arr)]
const noDups5 = arr => {
    let obj = {};
    arr.forEach(el => {
        obj[el] = el;
    })
    return Object.values(obj)
}

const noDups6 = arr => {
    let output = [];
    for(let el of arr) {
        let includes = false;
        for(let i = 0; i < output.length; i++) {
            if(el === output[i]) {
                includes = true;
            }
        }
        if(!includes) {
            output.push(el)
        }
    }
    return output;
}
// console.log(noDups6([2, 2, 4, 7, 2]))

// let - ES6, block scoped 
// const - constants, not be reassigned, ES6, block scoped 
// var - ES5, function scoped
// === 
// !
// !==
// ||
// "cat" && "dog"
// 0 || true 

// let fruits = ["kiwi", "banana"]
// furits[0]
// fruits[frsuit.length - 1]

// console.log("corey".slice(2, 4))
// let arr1 = [1, 2, 3]
// let arr2 = [1, 2, 3]
// let arr3 = arr2;
// console.log(arr3 === arr2)
let arr = [1, 2, 3, 4, 5, 6];
// arr.splice(3,0, 7)
// console.log(arr);
// console.log(arr.push(13))
// for(initialization; while condtion is true; step towards the end) {
//     blcok of code 
// }
// for(let el of arr) {
//     //code 
// }

// for(let key in obj) {
//     //code 
// }
// initalization 
// while(condtion is true) {
//     //code 
//     //step towards the end 
// }
// let str = "corey";
// console.log(str.split("r").join("r"))

function doubler(num) {
    return num * 2
}
// const doubler = (num) => num * 2 //implicit 

function doubleSquare(num) {
    return doubler(num * num)
}

const caller = (callback) => {
    return callback()
}

// Array.prototype.myForEach = function(cb) {
//     for(let i = 0; i < this.length; i++) {
//         cb(this[i])
//     }
// }

class HumanPlayer {
    constructor(name) {
        this.name = name; 
    }
    getMove() {
        return this.name + " would make a move here"
        // return readline.questions("What is your letter guess")
    }
    static saySomethingNice() {
        return "I love you"
    }
}
// let corey = new HumanPlayer("C-Dog");
// console.log(corey.getMove())
// console.log(HumanPlayer.saySomethingNice());

function Board(length) {
    this.board = new Array(length).fill("_")
}

Board.prototype.addChar= function(idx, letter) {
    this.board[idx] = letter;
}
let board = new Board(5);
board.addChar(1, "o")
console.log(board);
