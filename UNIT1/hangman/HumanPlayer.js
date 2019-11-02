const readline = require('readline-sync');

class HumanPlayer {
    constructor(name) {
        this.name = name; 
    }

    getMove() {
        return readline.question("Please Enter a char: ").toLowerCase()
    }

    displayBoard(board) {
        let output = "";
        for(let i = 0; i < board.length(); i++) {
            output += board.get(i) + " "
        }
        console.log(output)
    }
}

module.exports = HumanPlayer;
