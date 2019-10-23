
const HumanPlayer = require("./HumanPlayer.js")
const Board = require("./Board.js")
class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.currentPlayer = player1; 
        this.board = new Board()
    }
    // Write a switchPlayers that updates the currnetPlayer
}

let game = new Game(new HumanPlayer("corey", "X"), new HumanPlayer("Beavis", "O"))
console.log(game)