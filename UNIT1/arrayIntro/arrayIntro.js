// let fruits = ["blueberry", "banana", "kiwi", "cherry"] // GOOD TO HAVE THE SAME TYPE OF DATA!
// fruits[0] = "rasberry"
// let nums = [13, 12, 14, 56]
// console.log(fruits.slice(2, 2))
// console.log(fruits.join(" "))
// let string = "My dog has fleas";
// console.log(string.split(" "))
// console.log(fruits.push("rasberry")); // REtrun value of push is the length of the array
// Puush mutates the array and adds the argument to the end.
// console.log(fruits)
// fruits.push("cat", "dog")
// let fruits = ["blueberry", "banana", "kiwi", "cherry"] // GOOD TO HAVE THE SAME TYPE OF DATA!
// // fruits.pop()
// // // console.log(fruits.pop())
// // fruits.unshift("mango");
// // // console.log(fruits.shift())
// // fruits[1] = "candy corn"
// fruits.pop(); // [blueberry, banna, kiwi]
// fruits.unshift("cat", "dog") // [cat, dog,, (blueberry, banna, kiwi)];
// fruits.shift(); // dog,, (blueberry, banna, kiwi)
// fruits.push("cow");  // dog,, (blueberry, banna, kiwi), cow
// fruits.shift(); //  (blueberry, banna, kiwi), cow
// fruits[1] = "balloon" //  (blueberry, balloon, kiwi), cow
// fruits.push("snake") // (blueberry, balloon, kiwi), cow, snake
// console.log(fruits)

// let str = "My dog has fleas";
// str = str.slice(3); // "dog has fleas"
// let arr = str.split(" "); // [ dog, has, fleas]
// arr.slice(5); // []
// console.log(arr.length); // 3
// arr[0] = "my cat"; // ["my cat", has, fleas]
// arr.push(["Hello", "dolly"]); // ["my cat", has, fleas, [hello, dolly]]
// arr.push(1, 2, 3); // ["my cat", has, fleas, [hello, dolly], 1, 2, 3]
// arr.pop(); // ["my cat", has, fleas, [hello, dolly], 1, 2]
// arr.unshift("Good luck"); // ["good luck","my cat", has, fleas, [hello, dolly], 1, 2]
// arr = arr.slice(1); // ["my cat", has, fleas, [hello, dolly], 1, 2]
// console.log(arr);
// console.log(str) // dog has fleas
// console.log(arr.length) //

// let arr = [1, 2, 3];
// let secondArr = [4, 5, 6];
// console.log(arr.concat(secondArr).concat([7, 8, 9]))
// console.log(arr)

// let arr = [1, 2, 3];
// let secondArr = [1, 2, 3];
// console.log(arr === secondArr); // Cannot check for array equality;
// let double = arr ;
// arr.push(4)
// console.log(double === arr)
// console.log(double)

let mtx = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// console.log(mtx[2][0])

let test = [1, 2, [3, 4, [5, [6, "string"], 7, 8], 9]];
// Give me the letter n
//[ 3, 4, [5, [6, "string"], 7, 8], 9]
//   (5, [6, "string"], 7, 8)
// ];
console.log(test[2][2][1][1][4]);
// console.log(test.length)
