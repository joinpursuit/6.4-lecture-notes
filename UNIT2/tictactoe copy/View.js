
class View {
    constructor(game, el) {
        this.game = game;
        this.el = el   
        this.play() 
        this.playAgain()
    }

    playAgain() {
        let button = document.querySelector("#playAgain");
        button.addEventListener("click",()=> {
            this.game.playAgain();
            this.play();
        })


    }

    play() {
        let playerText = document.querySelector("#playerText");
        if(this.game.gameOver()) {
            playerText.innerText = this.game.showWinner();
            this.displayBoard();
        } else {
            this.displayBoard();
            this.bindEvents();
            playerText.innerText = this.game.currentPlayer.name + " it's your turn!"
        }
    }

    displayBoard() {
        let gameDiv = document.createElement("div")
        gameDiv.id = "boardDiv";
        this.el.innerHTML = "";
        this.game.board.reveal().forEach(row => {
            let ul = document.createElement("ul");
            ul.classList.add("row");
            row.forEach(val => {
                let li = document.createElement("li");
                li.innerText = val;
                ul.appendChild(li)
            })
            gameDiv.appendChild(ul);
        })
        this.el.appendChild(gameDiv)
    }

    bindEvents() {
        let tic = document.querySelector("#boardDiv")
        tic.addEventListener("click", (e) => {
            let selected = e.target.innerText;
            this.makeMove(selected);
        })

    }
    makeMove(move) {
        if(this.game.board.isValidMove(move)) {
            this.game.board.placeMark(this.game.currentPlayer.sym, move)
            this.game.switchPlayers();
        }
        this.play();
    }

}

export default View; 