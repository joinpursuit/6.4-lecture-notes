import ComputerPlayer from "./ComputerPlayer";
class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.game.lockAndLoad();
    this.play();
  }
  play() {
    if (this.game.isGameOver()) {
      let h1 = document.querySelector("h1");
      h1.innerText = this.game.currentPlayer.name + " is the sole survivor!";
      let button = document.querySelector("button");
      let input = document.querySelector("input");
      button.parentNode.removeChild(button);
      input.parentNode.removeChild(input);
    } else if(this.game.currentPlayer instanceof ComputerPlayer) {
        this.result();
    } else {
      this.displayBoard();
      this.bindEvents();
    }
  }

  displayBoard() {
    this.el.innerHTML = "";
    let h1 = document.createElement("h1");
    h1.innerText = this.game.currentPlayer.name + " what are your last words?";
    let input = document.createElement("input");
    let button = document.createElement("button");
    button.innerText = "Amen";
    this.el.appendChild(h1);
    this.el.appendChild(input);
    this.el.appendChild(button);
  }

  bindEvents() {
    let button = document.querySelector("button");
    button.addEventListener("click", () => this.result());
  }
  fire(result) {
    if (result) {
      let ul = document.querySelector("ul");
      let li = document.createElement("li");
      li.innerText = this.game.currentPlayer.name + " has died!";
      ul.appendChild(li);
      this.game.handleDeath();
    } else {
      this.game.switchPlayers();
    }
    this.play();
  }

  result() {
    let ul = document.querySelector("#lastWords");
    let li = document.createElement("li");
    let input = document.querySelector("input");
    let value = this.game.currentPlayer instanceof ComputerPlayer ? this.game.currentPlayer.getLastWords() : input.value;
    li.innerText = this.game.currentPlayer.name + "s last words were: " + value;
    let result = this.game.revolver.pullTrigger();
    ul.appendChild(li);
    this.fire(result);
  }
}

export default View;
