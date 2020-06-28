class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
    constructor() {
        this.root = null; 
    }

    insert(val, root = this.root) {
        //if tree is currently empty, set value be the root 
        if(!this.root) {
            this.root = new TreeNode(val);
            return; 
        }
        if(val < root.val) {
            if(!root.left) { // check if it has no left child. If it doesn't it becomes left child. 
                root.left = new TreeNode(val);
            } else { // call insert again on subtree 
                this.insert(val, root.left);
            }
        } else {
            if(!root.right) {
                root.right = new TreeNode(val);
            } else {
                this.insert(val, root.right);
            }
        }

    }

    search(target, root = this.root) {
        if(!root) return false; 
        if (target === root.val) return root;
        if(target < root.val) {
            return this.search(target, root.left);
        } else {
            return this.search(target, root.right);
        }
    }
}


let tree1 = new BST();
tree1.insert(10);
tree1.insert(5);
tree1.insert(16);
tree1.insert(1);
tree1.insert(7);

console.log(tree1.search(8))


let tree2 = new BST();
tree2.insert(1);
tree2.insert(5);
tree2.insert(7);
tree2.insert(10);
tree2.insert(16);


const dfs = (node) => {
  if (!node) return null;
  dfs(node.left);
  console.log(node.val);
  dfs(node.right);
};

// console.log(tree1)
// dfs(tree1.root)
// dfs(tree2.root)
