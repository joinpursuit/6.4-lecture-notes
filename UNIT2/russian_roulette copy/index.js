import Game from './Game.js'
import HumanPlayer from './HumanPlayer.js'
import ComputerPlayer from './ComputerPlayer.js'
import View from './View.js'
document.addEventListener("DOMContentLoaded", () => {
  let fred = new HumanPlayer("Fred");
  let robo = new ComputerPlayer();
  let becky = new HumanPlayer("Becky");
  let game = new Game([fred, robo, becky])
  let el = document.querySelector("#rr");
  new View(game, el)
});
