// const includes = (arr, target) => {
//     for(let el of arr) {
//         if(el === target) {
//             return true; 
//         }
//     }

//     return false; 
// }
String.prototype.myIncludes = function(target) {
        for(let el of this) {
            if(el === target) {
                return true;
            }
        }
        return false;
    }

    let str = "hello"
// console.log(str.myIncludes("L"))

class BinaryTreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Create nodes
// let a = new BinaryTreeNode(1);
// let b = new BinaryTreeNode(2);
// let c = new BinaryTreeNode(3);
// let d = new BinaryTreeNode(4);
// let e = new BinaryTreeNode(5);
// let f = new BinaryTreeNode(6);
// let g = new BinaryTreeNode(7);
// let h = new BinaryTreeNode(8);
// let i = new BinaryTreeNode(9);
// let j = new BinaryTreeNode(10);
// let k = new BinaryTreeNode(11);

// f.left = d;
// f.right = j;

// d.left = b;
// d.right = e;

// b.left = a;
// b.right = c;

// j.left = h;
// j.right = k;

// h.left = g;
// h.right = i;


//           (6)
//     (4)       (10)
//   (2) (5)  (8)   (11)
// (1)(3)   (7) (9)
// The tree is already built for 
// you in the code below.

const inOrderTraversal = (node) => {
    if(!node) return [];
    let output = [];
    const dfs = (node) => {
        if(!node) return; 
        dfs(node.left);
        output.push(node.val);
        dfs(node.right);
    }
    dfs(node)
    return output;
}

// console.log(inOrderTraversal(f))

// a.left = b 
// a.right = c 
// b.left = d 
// b.right = e 
// c.left = f 
// c.right = g 
// d.left = h 
// d.right = i 
// e.left = j 
// e.right = k 


//           (1)
//     (2)       (3)
//   (4) (5)  (6)   (7)
// (8)(9)   (10) (11)

const bfs = (root) => {
    if(!root) return;
    let output = [];
    let q = [root];
    while(q.length) {
        let currentNode = q.shift(); 
        output.push(currentNode.val); 
        if(currentNode.left) {
            q.push(currentNode.left)
        }
        if(currentNode.right) {
            q.push(currentNode.right)
        }
    }
    return output;
}

// console.log(bfs(a))

// const flatten = (arr) => {
//     let output = [];
//     arr.forEach(el => {
//         if(Array.isArray(el)) {
//            output = output.concat(flatten(el))
//         } else {
//             output.push(el);
//         }
//     })
//     return output; 
// }

// const flatten = (arr) => 
//      arr.reduce((acc, el) => 
//             Array.isArray(el) ? [...acc, ...flatten(el)] : [...acc, el];
//     , [])
// 


// let arr = [1, 2, [3, [4, [], 5, 6], 7], 8, 9]
// [1, 2, 3,4, 5, 6, 7, 8, 9]
// console.log(flatten(arr));
// console.log(arr)

// Is Unique: Implement an algorithm to determine if a 
// string has all unique characters. 

const isUniq = (str) => {
    let set = new Set();
    for(let char of str) {
        if(set.has(char)) {
            return false; 
        } else {
            set.add(char);
        }
    }
    return true; 
}
// const isUniq = (str) => new Set(str).size === str.length;


// What if you cannot use additional data structures? 

// const isUniq = (str) => {
//     for(let i = 0; i < str.length; i++) {
//         for(let j = i + 1; j < str.length; j++) {
//             if(str[i] === str[j]) return false; 
//         }
//     }
//     return true; 
// }
// console.log(isUniq("hello"))


// Find smallest missing element from a sorted array

// const findSmallesst = (arr) => {
//     for(let i = 0; i <= arr.length; i++) {
//         if(i !== arr[i]) return i; 
//     }
// }

const findSmallesst = (arr) => {
    let left = 0; 
    let right = arr.length - 1; 
    while(left <= right) {
        const midIdx = Math.floor((left + right) /2);
        if(arr[midIdx] === midIdx) {
            left = midIdx + 1; 
        } else {
            right = midIdx - 1;
        }
    }
    return left; 
}

// let arr1 = [0, 1, 2, 6, 9] // 3
// let arr2 = [1, 2, 6, 9] // 0
// let arr3 = [0, 1, 2, 3, 4] // 5

// console.log(findSmallesst(arr1))
// console.log(findSmallesst(arr2))
// console.log(findSmallesst(arr3))

// let arr = [1, 2, [3, [4, [], 5, 6], 7], 8, 9];
// let dup = arr.slice(0); // [...arr] [].concat(arr)
// dup[2][0] = "cat"; 
// console.log(arr) // Shallow copy

let obj = {
    person: { name: "corey"}
}

let copy = {...obj};
copy.person.name = "cat";
// console.log(obj)

// Write a deep dup function that 
// returns a copy of an array and all nested arrays inside it. 

const deepDup = (arr) => {
    return arr.map(el => {
        return Array.isArray(el) ? deepDup(el) : el
    })
}

// let arr = [1, 2, [3, [4, [], 5, 6], 7], 8, 9];
// let dup = deepDup(arr);
// dup[2][0] = "cat"; 
// console.log(dup)
// console.log(arr); // [1, 2, [3, [4, [], 5, 6], 7], 8, 9]

// Return Kth to Last:
//  Implement an algorithm to find the kth
//  to last element of a singly linked list 

// class Node {
//     constructor(val) {
//         this.val = val; 
//         this.next = null;
//     }
// }

// let a = new Node("a");
// let b = new Node("b");
// let c = new Node("c");
// let d = new Node("d");
// let e = new Node("e");
// let f = new Node("f");

// a.next = b; 
// b.next = c;
// c.next = d; 
// d.next = e; 
// e.next = f; 

const kthToLast = (head, k) => {
    let fast = head; 
    for(let i = 0; i <= k; i++) {
        fast = fast.next; 
    }
    let slow = head; 
    while(fast) {
        fast = fast.next; 
        slow = slow.next;
    }
    return slow; 
}


// console.log(kthToLast(a, 0)) // f
// console.log(kthToLast(a, 1)) // e
// console.log(kthToLast(a, 2)) // d

// Write a function that returns the sum of an array where each 
// element has been multiplied by it's index. 

// Exp [ 1, 2, 3, 4]
// 1 * 0 + 2 * 1 + 3 * 2 + 4 * 3
// // 20 

// Do this recursively. 

const productOfIndexSumIter = (arr) => {
    let i = 0; 
    let sum = 0;
    while( i < arr.length) {
        sum = sum + (arr[i] * i);
        i++
    }
    return sum; 
}

const productOfIndexSum = (arr, i = 0) => {
    if(i >= arr.length) return 0; 
    return (arr[i] * i) + productOfIndexSum(arr, i + 1);
}

// console.log(productOfIndexSum([1, 2, 3, 4, 5]))

// Write a function that takes in a linked list and returns the number of nodes 
// in the list. 

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let head = new Node(2);
let nextHead = new Node(3);
let third = new Node(4);
let fourth = new Node(5);
let fifth = new Node(6);

head.next = nextHead;
nextHead.next = third;
third.next = fourth;
fourth.next = fifth; 

const linkedListLength = (head) => {
    let length = 0; 
    let current = head; 
    while(current) {
        length++; 
        current = current.next; 
    }
    return length; 
}

const linkedListLengthRec = (head) => {
    if(!head) return 0; 
    return 1 + linkedListLengthRec(head.next);
}

// console.log(linkedListLengthRec(head));

// You are given a sorted array of people. Each person obj has a name and an age. 
// Return the first person that is 21 years old. This MUST run in O(log(n))

// Return the person in an object that shows the person and the index they occured. 



// ouput // => { person: {name: "corey", age: 21}, index: 2}

const firstToDrink = (people) => {
    let left = 0; 
    let right = people.length - 1; 
    while(left < right) {
        let mid = Math.floor((left + right) / 2);
        if(people[mid]['age'] >= 21) {
            right = mid
        } else {
            left = mid + 1;
        }
    }

    return {
        person: people[right], 
        index: right
    }
    
}

const firstToDrinkRec = (people, left = 0, right = people.length - 1) => {
    if(left >= right) {
           return {
             person: people[right],
             index: right,
           };
    }
    let mid = Math.floor((left + right) / 2);
    if (people[mid]["age"] >= 21) {
        right = mid;
    } else {
        left = mid + 1;
    }
    return firstToDrinkRec(people, left, right)
}


let people = [{name: "jon", age: 12}, {name: "jhenya", age: 14}, {name: "phillly", age: 21}, {name: "corey", age: 21}, {name: "step", age: 21}, {name: "bill", age: 100}]

console.log(firstToDrinkRec(people))