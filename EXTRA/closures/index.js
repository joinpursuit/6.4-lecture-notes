// Global Execution Context.
// 1. Creates a global object. 
// 2. create an object called `this` . 
// 3. set up memory space for variables and functions 
// 4. assign variable declarations a default value of undefined while playcing an function
// declarations in memory. 

// var name; 
// console.log(name);
// console.log(sayHello)
// helloTest()
// sayHello(); 

let name = "Alejo";

function printName() {
    console.log(name); // Pass by reference 
}


// var sayHello = function helloTest() { console.log("hello world") }

// printName();
// name = "Corey"
// printName();

function varTest() {
    if(true) {
        var testing = "does this work? "
    }

    console.log(testing)
}

function letTest() {
    let testing; 
    if(true) {
         testing = "does this work? "
        // console.log(testing)
    }

    console.log(testing)
}


// varTest(); 
// letTest()

// function printToFive() { 
//     for(var i = 1; i < 5; i++) {
//         setTimeout(() => {
//             console.log(i);
//         }, 1000)
//     }
// }

// // printToFive();

// IIFE 
// Immediately Invoked Function Expression (IIFE)

// (function () {
//     console.log("hello world!")
// })();

// let person = {
//     firstName: "Corey", 
//     getFirstName: function() {
//         return this._firstName;
//     }
// }

// function person() {   // module pattern 
//     let firstName = "Corey"

//     function getFirstName() {
//         return firstName;
//     }

//     function setFirstName(name) {
//         firstName = name; 
//     }
//     return {getFirstName, setFirstName};
// }

function person(intialName) {
    let firstName = intialName
    return {
        getFirstName: () => firstName, 
        setFirstName: (name) => { firstName = name }
    }
}

// let personObject = person("corey"); 
// console.log(personObject)
// console.log(personObject.getFirstName())
// console.log(personObject());

// Build a calculator that keeps track of an amount. You should be able to 
// add, subtract, multiply, or divide, or see that amount. 

const calculator = () => {
    let amount = 0;
    return {
        getTotal: () => amount, 
        add: (num) => { amount += num }, 
        subtract: (num) => { amount -= num }, 
        multiply: (num) => { amount *= num }, 
        divide: (num) => { amount /= num }, 
    }
}

// let calc1 = calculator();
// let calc2 = calculator();

// console.log(calc1.getTotal());
// calc1.add(5);
// calc1.multiply(5);
// console.log(calc1.getTotal());
// calc1.subtract(2);
// console.log(calc1.getTotal());
// console.log(calc2.getTotal());


const superCalc = (() => {
  let amount = 0;
  return {
    getTotal: () => amount,
    add: (num) => {
      amount += num;
    },
    subtract: (num) => {
      amount -= num;
    },
    multiply: (num) => {
      amount *= num;
    },
    divide: (num) => {
      amount /= num;
    },
  };
})();

// console.log(superCalc)

// const returnTwo = () => 2; 
// returnTwo() === 2 

const counter = () => {
    let count = 0; 
    return  () =>  ++count; 
}

// let counter1 = counter(); 

// console.log(counter1())
// console.log(counter1())
// console.log(counter1())

const adder = (a) => {
    return (b) => a + b; 
}

const addFive = adder(5); 
const addAHundred = adder(100);

// console.log(addFive(5))
// console.log(addAHundred(5));

// console.log(adder(5)(18))

// Write a function called greeting that looks like this: greeting("hello")("world") and returns "hello world!";

const greeting = firstWord => secondWord => `${firstWord} ${secondWord}!`

// console.log(greeting("hello")("world"))

const makeSentence = firstWord => secondWord => thirdWord => fourthWord => `${firstWord} ${secondWord} ${thirdWord} ${fourthWord}`

// console.log(makeSentence("what")("is")("even")("happening"))
function printToFive() { 
    var i 
    for(i = 1; i < 5; i++) {
        ((variableToPrint) => {
        //   var variableToPrint = i;
          setTimeout(() => {
            console.log(variableToPrint);
          }, 1000);
        })(i);
    }
}

printToFive();
