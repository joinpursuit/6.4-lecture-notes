const readline = require("readline-sync");

class HumanPlayer {
    constructor(name, sym) {
        this.name = name;
        this.sym = sym;
    }
    getMove() {
        return readline.question("Enter Your Move!")
    }
}

module.exports = HumanPlayer;
