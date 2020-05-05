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
let a = new BinaryTreeNode(1);
let b = new BinaryTreeNode(2);
let c = new BinaryTreeNode(3);
let d = new BinaryTreeNode(4);
let e = new BinaryTreeNode(5);
let f = new BinaryTreeNode(6);
let g = new BinaryTreeNode(7);
let h = new BinaryTreeNode(8);
let i = new BinaryTreeNode(9);
let j = new BinaryTreeNode(10);
let k = new BinaryTreeNode(11);

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

a.left = b 
a.right = c 
b.left = d 
b.right = e 
c.left = f 
c.right = g 
d.left = h 
d.right = i 
e.left = j 
e.right = k 


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

const flatten = (arr) => {
    let output = [];
    arr.forEach(el => {
        if(Array.isArray(el)) {
           output = output.concat(flatten(el))
        } else {
            output.push(el);
        }
    })
    return output; 
}

// const flatten = (arr) => 
//      arr.reduce((acc, el) => 
//             Array.isArray(el) ? [...acc, ...flatten(el)] : [...acc, el];
//     , [])
// 


let arr = [1, 2, [3, [4, [], 5, 6], 7], 8, 9]
// [1, 2, 3,4, 5, 6, 7, 8, 9]
console.log(flatten(arr));
console.log(arr)
