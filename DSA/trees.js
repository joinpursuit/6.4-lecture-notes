class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// let a = new TreeNode("A");
// let b = new TreeNode("B");
// let c = new TreeNode("C");
// let d = new TreeNode("D");
// let e = new TreeNode("E");
// let f = new TreeNode("F");
// let g = new TreeNode("G");
// let h = new TreeNode("H");
// let i = new TreeNode("I");
// let j = new TreeNode("J");
// let k = new TreeNode("K");

let a = new TreeNode(10);
let b = new TreeNode(5);
let c = new TreeNode(3);
let d = new TreeNode(2);
let e = new TreeNode(6);
let f = new TreeNode(1);
let g = new TreeNode(9);
let h = new TreeNode(4);
let i = new TreeNode(2);
let j = new TreeNode(3);
let k = new TreeNode(0);


a.left = b;
a.right = g;

b.left = c;
b.right = f;

c.left = d;
c.right = e;

g.left = h;
g.right = k;

h.left = i;
h.right = j;
// write a function that takes in a root and 
// returns an array of all the nodes values in BFS order 

const bfs = (root) => {
    if(!root) return [];
    let q = [root];
    let output = [];
    while(q.length) {
        let currentNode = q.shift();
        //process(currentNode)
        output.push(currentNode.val);
        if(currentNode.left) {
            q.push(currentNode.left)
        }
        if(currentNode.right) {
            q.push(currentNode.right);
        }

    }
    return output;
}

console.log(bfs(a));

// Write a breadthFirstTraversal that returns that 
// sum of all values in the tree. 