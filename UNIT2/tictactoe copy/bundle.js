/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Board.js":
/*!******************!*\
  !*** ./Board.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

class Board {
  constructor() {
    this.board = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    this.movesRemaining = 9;
    this.winner = undefined;
    this.MOVES = {
      1: [0, 0],
      2: [0, 1],
      3: [0, 2],
      4: [1, 0],
      5: [1, 1],
      6: [1, 2],
      7: [2, 0],
      8: [2, 1],
      9: [2, 2],
    };
  }

  reveal() {
    return this.board; 
  }
  
  isValidMove(move) {
    if (!this.MOVES[move]) return false;
    let [row, col] = this.MOVES[move];
    return typeof this.board[row][col] !== "string";
  }

  placeMark(sym, move) {
    let [row, col] = this.MOVES[move];
    this.board[row][col] = sym;
    this.movesRemaining--;
  }

  findWinner() {
    this.isHorizontal()
    this.isVertical()
    this.isDiagnol()
    if(this.movesRemaining === 0 && !this.winner) {
        this.winner = "tie"
    }

    return this.winner;
    // update winner to the sym that wins if there is a winner.
    //If there's no winner and moves are at 0, make winner = "tie"
  }

  isHorizontal(board = this.board) {
    board.forEach(row => {
      if (row.every(el => el === row[0])) {
        this.winner = row[0];
      }
    });
    return this.winner;
  }

  isVertical() {
      let transposed = this.transpose();
      return this.isHorizontal(transposed)
  }

  isDiagnol() {
    let leftDown = [];
    let rightDown = [];
    for(let i = 0; i <this.board.length; i++) {
        leftDown.push(this.board[i][i])
        rightDown.push(this.board[this.board.length - i - 1][i])
    }
    if(leftDown.every(el => el === leftDown[0])) {
        this.winner = leftDown[0]
    }
    if(rightDown.every(el => el === rightDown[0])) {
        this.winner = rightDown[0]
    }
    return this.winner
}
  transpose() {
    let dup = [];
    this.board.forEach((row, i) => {
      dup[i] = [];
      row.forEach((_, j) => {
        dup[i][j] = this.board[j][i];
      });
    });
    return dup;
  }

  displayBoard() {
      this.board.forEach((row, i) => {
          console.log(row.join(" | "))
          if(i !== this.board.length - 1) {
              console.log("---------")

          }
      })
  }

//   Warm up! In your board class create a
//    displayBoard method that prints the boards state to the console.
//     Then in the Game file create a class called Game.
//      It should take two players as arguments. In the constructor is 
//      should set a currentPlayer,
//    and create a new instance of the board.
}

module.exports = Board; 

// let board = new Board();
// board.displayBoard()
// console.log(board.board)
// board.placeMark("X", 3)
// board.placeMark("X", 5)
// board.placeMark("X", 7)
// // board.placeMark("X", 7)

// console.log(board.isDiagnol())

/***/ }),

/***/ "./ComputerPlayer.js":
/*!***************************!*\
  !*** ./ComputerPlayer.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

class ComputerPlayer {
    constructor(name, sym) {
        this.name = name;
        this.sym = sym;
    }

    getMove() {
        return Math.floor(Math.random() * 9 )
    }
}

module.exports = ComputerPlayer;

/***/ }),

/***/ "./Game.js":
/*!*****************!*\
  !*** ./Game.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

const HumanPlayer = __webpack_require__(/*! ./HumanPlayer.js */ "./HumanPlayer.js")
const ComputerPlayer = __webpack_require__(/*! ./ComputerPlayer.js */ "./ComputerPlayer.js")
const Board = __webpack_require__(/*! ./Board.js */ "./Board.js")
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

/* harmony default export */ __webpack_exports__["default"] = (Game); 

// let game = new Game(new HumanPlayer("corey", "X"), new ComputerPlayer("Beavis", "O"))
// game.play()

/***/ }),

/***/ "./HumanPlayer.js":
/*!************************!*\
  !*** ./HumanPlayer.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

// const readline = require("readline-sync");

class HumanPlayer {
    constructor(name, sym) {
        this.name = name;
        this.sym = sym;
    }
    getMove() {
        return readline.question("Enter Your Move!")
    }
}

module.exports = HumanPlayer;


/***/ }),

/***/ "./View.js":
/*!*****************!*\
  !*** ./View.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

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

/* harmony default export */ __webpack_exports__["default"] = (View); 

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game.js */ "./Game.js");
/* harmony import */ var _HumanPlayer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HumanPlayer.js */ "./HumanPlayer.js");
/* harmony import */ var _HumanPlayer_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_HumanPlayer_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ComputerPlayer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ComputerPlayer.js */ "./ComputerPlayer.js");
/* harmony import */ var _ComputerPlayer_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ComputerPlayer_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./View.js */ "./View.js");





document.addEventListener("DOMContentLoaded", () => {
    let game = new _Game_js__WEBPACK_IMPORTED_MODULE_0__["default"](
      new _HumanPlayer_js__WEBPACK_IMPORTED_MODULE_1___default.a("Corey", "X"),
      new _HumanPlayer_js__WEBPACK_IMPORTED_MODULE_1___default.a("Beavis", "O")
    );
    let el = document.querySelector("#ttt");
    new _View_js__WEBPACK_IMPORTED_MODULE_3__["default"](game, el)

})

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map