const HumanPlayer = require("./HumanPlayer.js")
const ComputerPlayer = require("./ComputerPlayer.js")
const Revolver = require("./Revolver.js")

// Should have a play that runs unit when? 
// Wil get last words, then print words, then pull trigger. 
// Should have switchPlayers

class Game {
    constructor(players) {
        this.players = players; 
        this.currentPlayer = this.players[0];
        this.revolver = new Revolver(6);
    }

    switchPlayers() {
        this.players.push(this.players.shift());
        this.currentPlayer = this.players[0];
    }

    play() {
        this.revolver.addBullet();
        this.revolver.spinBarrel();
        while(this.players.length > 1) {
            console.log(this.currentPlayer.name, " its your turn")
            let lastWords = this.currentPlayer.getLastWords();
            console.log(lastWords)
            let fired = this.revolver.pullTrigger();
            if(fired) {
                console.log(this.currentPlayer.name, " has died");
                this.players.shift()
                this.currentPlayer = this.players[0];
                this.revolver.addBullet();
                this.revolver.spinBarrel();
            } else  {
                this.switchPlayers();
            }
        }
        console.log(this.players[0].name + " is the sole survivor!")
    }
}

let fred = new HumanPlayer("Fred");
let robo = new ComputerPlayer();
let becky = new HumanPlayer("Becky");
let game = new Game([fred, robo, becky]);
game.play()