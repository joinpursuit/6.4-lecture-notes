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

/***/ "./ComputerPlayer.js":
/*!***************************!*\
  !*** ./ComputerPlayer.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

class ComputerPlayer {
  constructor(name ="Robot") {
    this.name = name;
    this.alive = true;
  }
  getLastWords() {
    return "Blorp! I wish I was human."
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
const HumanPlayer = __webpack_require__(/*! ./HumanPlayer.js */ "./HumanPlayer.js");
const ComputerPlayer = __webpack_require__(/*! ./ComputerPlayer.js */ "./ComputerPlayer.js");
const Revolver = __webpack_require__(/*! ./Revolver.js */ "./Revolver.js");

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

  lockAndLoad() {
    this.revolver.addBullet();
    this.revolver.spinBarrel();
  }
  handleDeath() {
    this.players.shift();
    this.currentPlayer = this.players[0];
    this.revolver.addBullet();
    this.revolver.spinBarrel();
  }

  isGameOver() {
      return this.players.length === 1;
  }

  play() {
    this.revolver.addBullet();
    this.revolver.spinBarrel();
    while (this.players.length > 1) {
      console.log(this.currentPlayer.name, " its your turn");
      let lastWords = this.currentPlayer.getLastWords();
      console.log(lastWords);
      let fired = this.revolver.pullTrigger();
      if (fired) {
        console.log(this.currentPlayer.name, " has died");
        this.players.shift();
        this.currentPlayer = this.players[0];
        this.revolver.addBullet();
        this.revolver.spinBarrel();
      } else {
        this.switchPlayers();
      }
    }
    console.log(this.players[0].name + " is the sole survivor!");
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Game);


/***/ }),

/***/ "./HumanPlayer.js":
/*!************************!*\
  !*** ./HumanPlayer.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

// const readline = require("readline-sync");

class HumanPlayer {
    constructor(name) {
        this.name = name; 
        this.alive = true; 
    }
    getLastWords() {
        return readline.question("What are your last words? ")
    }
}

module.exports = HumanPlayer;

// const fred = new HumanPlayer("Fred");
// fred.getLastWords()

/***/ }),

/***/ "./Revolver.js":
/*!*********************!*\
  !*** ./Revolver.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {


class Revolver {
    constructor(chamberCount) {
        this.chambers = new Array(chamberCount).fill(null);
    }

    addBullet() { 
        for(let i = 0; i < this.chambers.length; i++) {
            if(!this.chambers[i]) {
                this.chambers[i] = true;
                break; 
            }
        }
    }

    spinBarrel() {
        let spin = Math.floor(Math.random() * this.chambers.length)
        for(let i = 0; i < spin; i++) {
            this.chambers.push(this.chambers.shift())
        }

    }

    pullTrigger() {
        let fired = this.chambers.shift();
        this.chambers.push(null)
        return fired; 
    }
}

module.exports = Revolver;



/***/ }),

/***/ "./View.js":
/*!*****************!*\
  !*** ./View.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ComputerPlayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComputerPlayer */ "./ComputerPlayer.js");
/* harmony import */ var _ComputerPlayer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ComputerPlayer__WEBPACK_IMPORTED_MODULE_0__);

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
    } else if(this.game.currentPlayer instanceof _ComputerPlayer__WEBPACK_IMPORTED_MODULE_0___default.a) {
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
    let value = this.game.currentPlayer instanceof _ComputerPlayer__WEBPACK_IMPORTED_MODULE_0___default.a ? this.game.currentPlayer.getLastWords() : input.value;
    li.innerText = this.game.currentPlayer.name + "s last words were: " + value;
    let result = this.game.revolver.pullTrigger();
    ul.appendChild(li);
    this.fire(result);
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
  let fred = new _HumanPlayer_js__WEBPACK_IMPORTED_MODULE_1___default.a("Fred");
  let robo = new _ComputerPlayer_js__WEBPACK_IMPORTED_MODULE_2___default.a();
  let becky = new _HumanPlayer_js__WEBPACK_IMPORTED_MODULE_1___default.a("Becky");
  let game = new _Game_js__WEBPACK_IMPORTED_MODULE_0__["default"]([fred, robo, becky])
  let el = document.querySelector("#rr");
  new _View_js__WEBPACK_IMPORTED_MODULE_3__["default"](game, el)
});


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map