// Stack => First In Last Out; stack of plates. 
// Can be implemented as an array or linked list. 
// push, pop, isEmpty, peek 

class Stack {
    constructor(stack = []) {
        this.stack = stack; 
    }
    pop() {
        return this.stack.pop(); 
    }
    push(val) {
        this.stack.push(val)
    }
    peek() {
        this.stack[this.stack.length - 1];
    }
    isEmpty() {
        return this.stack.length === 0; 
    }
}

const findProduct = (stack) => {

}
let stack = new Stack([1, 2, 3, 4, 5])
console.log(findProduct(stack))

// Write a function that takes in a stack and 
// finds the product of that stack. 