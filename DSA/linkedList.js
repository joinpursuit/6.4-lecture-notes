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

// Write a function that takes in a linked list and 
// returns an array of all the odd values that the list 
// contains. 

// HINT: While loops. 

// Sometimes think, can I use two pointers traveling at 
// different speeds. 

const findOdds = (head) => {
    let output = []; 
    let current = head;

    while(current) {
        if(current.val % 2 === 1) {
            output.push(current.val);
        }
        current = current.next; 
    }
    return output;
}

console.log(findOdds(head));