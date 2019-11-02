const Board = require("./Board.js")
const HumanPlayer = require("./HumanPlayer.js")
const ComputerPlayer =  require("./ComputerPlayer.js")
const {hangManPics} = require("./hangmanPics.js")

class Game {
    constructor(players) {
        this.ref = players["ref"]
        this.guesser = players["guesser"]
        this.guessesRemaining = 6; 
        this.guessedLetters = [];
    }
    play() {
        let boardLength = this.ref.chooseSecretWord()
        this.board = new Board(boardLength);
        while(!this.isGameOver()) {
            console.log(hangManPics[this.guessesRemaining])
            console.log("Letters guessed so far");
            console.log("Guessed so far: " + this.guessedLetters.join(", "));
        
            this.guesser.displayBoard(this.board);
            this.ref.displayBoard(this.board);
            let guess = "0"; 
            while(!this.isValidGuess(guess)) {
                guess = this.guesser.getMove();
                if(!this.isValidGuess(guess)) {
                    console.log("INVALID GUESS!")
                }
            }
            this.guessedLetters.push(guess)
            let positions = this.ref.checkGuess(guess);
            if(positions.length === 0) {
                this.guessesRemaining--;
            }
            this.board.addChar(positions, guess);
        }
        if(this.guessesRemaining > 0) {
            console.log(this.guesser.name + " wins!")
        } else {
            let winningWord = this.ref.reveal();
            console.log("word was " + winningWord)
            console.log(this.ref.name + " wins!")
        }

    }
    isValidGuess(char) {
        let alph = "abcdefghijklmnopqrstuvwxyz";
        return char.length === 1 && alph.includes(char) && 
        !this.guessedLetters.includes(char);
    }
    isGameOver() {
       return  this.board.isComplete() || this.guessesRemaining === 0;
    }
}

let human = new HumanPlayer("corey")
let robo = new ComputerPlayer();
let game = new Game({ref: human, guesser: robo})
game.play();