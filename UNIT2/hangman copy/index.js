import View from './View.js'
import HumanPlayer from './HumanPlayer.js'
import ComputerPlayer from './ComputerPlayer.js'
import Game from './Game.js'

document.addEventListener("DOMContentLoaded", () => {
    let el = document.querySelector("#hangman");

    let human = new HumanPlayer("corey");
    let robo = new ComputerPlayer();
    let game = new Game({ ref: robo, guesser: human });
    new View(el, game)
})