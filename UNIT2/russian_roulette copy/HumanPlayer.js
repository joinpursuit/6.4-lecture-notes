// const readline = require("readline-sync");

class HumanPlayer {
    constructor(name) {
        this.name = name; 
        this.alive = true; 
    }
    getLastWords() {
        return readline.question("What are your last words? ")
    }
}

module.exports = HumanPlayer;

// const fred = new HumanPlayer("Fred");
// fred.getLastWords()