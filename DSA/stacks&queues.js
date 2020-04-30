// Stack => First In Last Out; stack of plates. not fair
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
    if(stack.isEmpty()) return 0; 
    let prod = 1; 
    let tempStack = new Stack();
    while(!stack.isEmpty()) {
        let el = stack.pop(); 
        prod *= el; 
        tempStack.push(el);
    }

    while(!tempStack.isEmpty()) {
        stack.push(tempStack.pop())
    }
    return prod; 
}

// const findProduct = (stack) => { // do recursively 

// }
let stack = new Stack([1, 2, 3, 4, 5])
// console.log(findProduct(stack))
// console.log(stack)

// Write a function that takes in a stack and 
// finds the product of that stack. 

// QUEUES => First In First Out => a line to get into DQ. fair 
// enqueue, dequeue, isEmpty, peek 

// task write your own queue class. 
// write a function that takes in a queue and returns the largest value 
//in the queue. 
// Bonus: 
// Do not leave the q mutated. 
//Do the previous problems recursively, linked list on included. 

class Queue {
    constructor(q = []) {
        this.q = q
    }
    enqueue(val) {
        this.q.push(val);
    }
    dequeue() {
        return this.q.shift();
    }
    peek() {
        return this.q[0];
    }
    isEmpty() {
        return this.q.length === 0;
    }
}

const findMax = queue => {
    if(queue.isEmpty()) return; 
    let max = q.peek();
    while(!queue.isEmpty()) {
        max = Math.max(max, queue.dequeue());
    }
    return max; 
}

let q = new Queue([5, -111, 23, 4, 25, 21])
console.log(findMax(q));

// console.log(Math.min(1, 2, 3, 4, 5, 6))
