import { hangManPics }  from "./hangmanPics.js";

class View {
  constructor(el, game) {
    this.game = game;
    this.el = el;
    this.game.beginGame();
    this.setUpTheGame();
    this.bindEvents();
    this.play();
  }

  play() {
          this.displayBoard();
          this.displayGuessedLetters();
          this.displayHangMan();
          if(this.game.isGameOver()) {
             let h1 = document.createElement("h1");
             h1.innerText = this.game.resolveGame();
             this.el.appendChild(h1);
             let form = document.querySelector("form");
             form.parentNode.removeChild(form);
          }
        //   should check for game over? 
        //   if over should resoleGame 
  }

  bindEvents() {
      let form = document.querySelector("form");
      form.addEventListener("submit", e => {
          e.preventDefault();
          let input = document.querySelector("input");
          let guess = input.value;
          input.value = "";
          if(this.game.isValidGuess(guess)) {
              this.game.enterValidGuess(guess);
          }
          this.play();
      })
  }

  displayBoard(board = this.game.board) {
    let ul = document.querySelector("#board");
    ul.innerHTML = "";
    for (let i = 0; i < board.length(); i++) {
        let li = document.createElement("li");
      li.innerText = board.get(i);
        ul.appendChild(li);
    }
  }
  displayGuessedLetters() {
      let guesses = document.querySelector("#guessedSoFar");
      guesses.innerHTML = "";
      guesses.innerText = this.game.guessedLetters.join(", ")
  }

  displayHangMan() {
      document.querySelector("#hangManPic").innerText = hangManPics[this.game.guessesRemaining]
  }

  setUpTheGame() {
    let hangManPic = document.createElement("div");
    hangManPic.id = "hangManPic";
    this.el.appendChild(hangManPic);
    let guessedSoFar = document.createElement("ul");
    guessedSoFar.id = "guessedSoFar";
    this.el.appendChild(guessedSoFar);
    let board = document.createElement("ul");
    board.id = "board";
    this.el.appendChild(board);
    let form = document.createElement("form");
    let input = document.createElement("input");
    form.appendChild(input);
    this.el.appendChild(form);
  }
}

export default View;
