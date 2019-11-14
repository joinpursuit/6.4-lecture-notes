
const HumanPlayer = require("./HumanPlayer.js")
const ComputerPlayer = require("./ComputerPlayer.js")
const Board = require("./Board.js")
class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.currentPlayer = player1; 
        this.board = new Board()
    }

    playAgain() {
        this.board = new Board();
    }

    switchPlayers() {
        this.currentPlayer =
         this.currentPlayer === this.player1 ? this.player2 : this.player1
    }

    gameOver() {
        return this.board.findWinner(); 
    }

    play() {
        while(!this.gameOver()) {
            console.clear();
            this.board.displayBoard();
            let move = false;
            while(!this.board.isValidMove(move)) {
                move = this.currentPlayer.getMove();
            }
            this.board.placeMark(this.currentPlayer.sym, move);
            this.switchPlayers();
        }

        this.board.displayBoard();
        if(this.board.winner === this.player1.sym) {
            console.log(this.player1.name + " wins!!! ")
        } else if (this.board.winner === this.player2.sym) {
            console.log(this.player2.name + " wins!!! ");
        } else {
            console.log("TIE GAME!! YOU BOTH ARE LOSERS")
        }

    }
    showWinner() {
        if (this.board.winner === this.player1.sym) {
           return this.player1.name + " wins!!! "
        } else if (this.board.winner === this.player2.sym) {
            return this.player2.name + " wins!!! "
        } else {
           return "TIE GAME!! YOU BOTH ARE LOSERS"
        }
    }
}

export default Game; 

// let game = new Game(new HumanPlayer("corey", "X"), new ComputerPlayer("Beavis", "O"))
// game.play()