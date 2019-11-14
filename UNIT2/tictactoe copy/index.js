import Game from "./Game.js";
import HumanPlayer from "./HumanPlayer.js";
import ComputerPlayer from "./ComputerPlayer.js";
import View from "./View.js";

document.addEventListener("DOMContentLoaded", () => {
    let game = new Game(
      new HumanPlayer("Corey", "X"),
      new HumanPlayer("Beavis", "O")
    );
    let el = document.querySelector("#ttt");
    new View(game, el)

})