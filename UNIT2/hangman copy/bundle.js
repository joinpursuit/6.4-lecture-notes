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
    constructor(length) {
        this.board = new Array(length).fill("_");
    }

    length() {
        return this.board.length;
    }

    get(idx) {
        return this.board[idx];
    }
    isComplete() {
        return this.board.every(el => el !== "_");
    }

    addChar(indicies, char) {
        for(let i of indicies) {
            this.board[i] = char; 
        }
    }
}

module.exports = Board; 





/***/ }),

/***/ "./ComputerPlayer.js":
/*!***************************!*\
  !*** ./ComputerPlayer.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const { allTheWords } = __webpack_require__(/*! ./words.js */ "./words.js")

class ComputerPlayer {
    constructor(name = "Robo Bobo") {
        this.dictionary = allTheWords;
        this.name = name; 
        this.guessesMade = new Set();
    }

    displayBoard(board) {
        this.board = board; 
    }

    getMove() {
        let alph = "abcdefghijklmnopqrstuvwxyz";
        this.dictionary = this.dictionary.filter(word => word.length === this.board.length())
        let missed = new Set([...this.guessesMade])
        for(let i = 0; i < this.board.length(); i++) {
            let char = this.board.get(i)
            if(char !== "_") {
                missed.delete(char);
                this.dictionary = this.dictionary.filter(word => word[i] === char);
            }
        }

        missed.forEach(char => {
            this.dictionary = this.dictionary.filter(word => !word.includes(char))
        })

        let lettersCount = {}
        this.dictionary.forEach(word => {
            for(let char of word) {
                lettersCount[char] ? lettersCount[char]++ : lettersCount[char] = 1;
            }
        })

        let max = 0; 
        let guess = null; 

        for(let char in lettersCount) {
            if(lettersCount[char] > max && !this.guessesMade.has(char)) {
                max = lettersCount[char];
                guess = char; 
            }
        }

        while(!guess) {
            let rand = Math.floor(Math.random() * alph.length);
            let char = alph[rand];
            if(!this.guessesMade.has(char)) {
                guess = char;
            }
        }
        this.guessesMade.add(guess)
        return guess; 

    }

    chooseSecretWord() {
        let idx = Math.floor(Math.random() * this.dictionary.length)
        this.secretWord = this.dictionary[idx];
        return this.secretWord.length; 
    }

    checkGuess(char) {
        let indicies = [];
        for(let i = 0 ; i < this.secretWord.length; i++) {
            if(this.secretWord[i] === char) {
                indicies.push(i);
            }
        }
        return indicies
    }

    reveal() {
        return this.secretWord;
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
const Board = __webpack_require__(/*! ./Board.js */ "./Board.js");
const HumanPlayer = __webpack_require__(/*! ./HumanPlayer.js */ "./HumanPlayer.js");
const ComputerPlayer = __webpack_require__(/*! ./ComputerPlayer.js */ "./ComputerPlayer.js");
const { hangManPics } = __webpack_require__(/*! ./hangmanPics.js */ "./hangmanPics.js");

class Game {
  constructor(players) {
    this.ref = players["ref"];
    this.guesser = players["guesser"];
    this.guessesRemaining = 6;
    this.guessedLetters = [];
  }

  beginGame() {
    let boardLength = this.ref.chooseSecretWord();
    this.board = new Board(boardLength);
  }
  play() {
    let boardLength = this.ref.chooseSecretWord();
    this.board = new Board(boardLength);
    while (!this.isGameOver()) {
      console.log(hangManPics[this.guessesRemaining]);
      console.log("Letters guessed so far");
      console.log("Guessed so far: " + this.guessedLetters.join(", "));

      this.guesser.displayBoard(this.board);
      this.ref.displayBoard(this.board);
      let guess = "0";
      while (!this.isValidGuess(guess)) {
        guess = this.guesser.getMove();
        if (!this.isValidGuess(guess)) {
          console.log("INVALID GUESS!");
        }
      }
      this.enterValidGuess(guess);
    }
    console.log(this.resolveGame());
  }

  resolveGame() {
    if (this.guessesRemaining > 0) {
      return this.guesser.name + " wins!"
    } else {
      let winningWord = this.ref.reveal();
      return "word was " + winningWord + " " + "You LOSE!"
    }
  }

  enterValidGuess(guess) {
    this.guessedLetters.push(guess);
    let positions = this.ref.checkGuess(guess);
    if (positions.length === 0) {
      this.guessesRemaining--;
    }
    this.board.addChar(positions, guess);
  }

  isValidGuess(char) {
    let alph = "abcdefghijklmnopqrstuvwxyz";
    return (
      char.length === 1 &&
      alph.includes(char) &&
      !this.guessedLetters.includes(char)
    );
  }
  isGameOver() {
    return this.board.isComplete() || this.guessesRemaining === 0;
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

// const readline = require('readline-sync');

class HumanPlayer {
  constructor(name) {
    this.name = name;
  }

  getMove() {
    return readline.question("Please Enter a char: ").toLowerCase();
  }

  displayBoard(board) {
    let output = "";
    for (let i = 0; i < board.length(); i++) {
      output += board.get(i) + " ";
    }
    console.log(output);
  }

  chooseSecretWord() {
    return readline.questionInt(this.name + " Enter the length of your word: ")
  }

  checkGuess(char) {
    console.log(char + " was guessed")
    console.log("Please enter the position of the character");
    console.log("if the character appears more than once separate by a comma");
    console.log("If your word is hello and the guess is l, you response should look like 3,4");
    let guess = readline.question("")
    let result = guess.split(",").map(el => Number(el) - 1)
    return result[0] === -1 ? [] : result
    
    
  }

  reveal() {
    return readline.question("What was your word? ").toLowerCase();
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
/* harmony import */ var _hangmanPics_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hangmanPics.js */ "./hangmanPics.js");
/* harmony import */ var _hangmanPics_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hangmanPics_js__WEBPACK_IMPORTED_MODULE_0__);


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
      document.querySelector("#hangManPic").innerText = _hangmanPics_js__WEBPACK_IMPORTED_MODULE_0__["hangManPics"][this.game.guessesRemaining]
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

/* harmony default export */ __webpack_exports__["default"] = (View);


/***/ }),

/***/ "./hangmanPics.js":
/*!************************!*\
  !*** ./hangmanPics.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

const hangManPics = [
  `
  +---+
  |   |
  O   |
 /|\\  |
 / \\  |
      |
=========`,
  `
  +---+
  |   |
  O   |
 /|\\  |
 /    |
      |
=========`,
  `
  +---+
  |   |
  O   |
 /|\\  |
      |
      |
=========`,
  `
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========`,

  `
  +---+
  |   |
  O   |
  |   |
      |
      |
=========`,
  `
  +---+
  |   |
  O   |
      |
      |
      |
========= `,
  `
  +---+
  |   |
      |
      |
      |
      |
========= `,
];

module.exports = { hangManPics }

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.js */ "./View.js");
/* harmony import */ var _HumanPlayer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HumanPlayer.js */ "./HumanPlayer.js");
/* harmony import */ var _HumanPlayer_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_HumanPlayer_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ComputerPlayer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ComputerPlayer.js */ "./ComputerPlayer.js");
/* harmony import */ var _ComputerPlayer_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ComputerPlayer_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Game_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Game.js */ "./Game.js");





document.addEventListener("DOMContentLoaded", () => {
    let el = document.querySelector("#hangman");

    let human = new _HumanPlayer_js__WEBPACK_IMPORTED_MODULE_1___default.a("corey");
    let robo = new _ComputerPlayer_js__WEBPACK_IMPORTED_MODULE_2___default.a();
    let game = new _Game_js__WEBPACK_IMPORTED_MODULE_3__["default"]({ ref: robo, guesser: human });
    new _View_js__WEBPACK_IMPORTED_MODULE_0__["default"](el, game)
})

/***/ }),

/***/ "./words.js":
/*!******************!*\
  !*** ./words.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

let allTheWords = [
  "able",
  "about",
  "account",
  "acid",
  "across",
  "addition",
  "adjustment",
  "advertisement",
  "after",
  "again",
  "against",
  "agreement",
  "almost",
  "among",
  "amount",
  "amusement",
  "angle",
  "angry",
  "animal",
  "answer",
  "apparatus",
  "apple",
  "approval",
  "arch",
  "argument",
  "army",
  "attack",
  "attempt",
  "attention",
  "attraction",
  "authority",
  "automatic",
  "awake",
  "baby",
  "back",
  "balance",
  "ball",
  "band",
  "base",
  "basin",
  "basket",
  "bath",
  "beautiful",
  "because",
  "before",
  "behaviour",
  "belief",
  "bell",
  "bent",
  "berry",
  "between",
  "bird",
  "birth",
  "bite",
  "bitter",
  "black",
  "blade",
  "blood",
  "blow",
  "blue",
  "board",
  "boat",
  "body",
  "boiling",
  "bone",
  "book",
  "boot",
  "bottle",
  "brain",
  "brake",
  "branch",
  "brass",
  "bread",
  "breath",
  "brick",
  "bridge",
  "bright",
  "broken",
  "brother",
  "brown",
  "brush",
  "bucket",
  "building",
  "bulb",
  "burn",
  "burst",
  "business",
  "butter",
  "button",
  "cake",
  "camera",
  "canvas",
  "card",
  "care",
  "carriage",
  "cart",
  "cause",
  "certain",
  "chain",
  "chalk",
  "chance",
  "change",
  "cheap",
  "cheese",
  "chemical",
  "chest",
  "chief",
  "chin",
  "church",
  "circle",
  "clean",
  "clear",
  "clock",
  "cloth",
  "cloud",
  "coal",
  "coat",
  "cold",
  "collar",
  "colour",
  "comb",
  "come",
  "comfort",
  "committee",
  "common",
  "company",
  "comparison",
  "competition",
  "complete",
  "complex",
  "condition",
  "connection",
  "conscious",
  "control",
  "cook",
  "copper",
  "copy",
  "cord",
  "cork",
  "cotton",
  "cough",
  "country",
  "cover",
  "crack",
  "credit",
  "crime",
  "cruel",
  "crush",
  "current",
  "curtain",
  "curve",
  "cushion",
  "damage",
  "danger",
  "dark",
  "daughter",
  "dead",
  "dear",
  "death",
  "debt",
  "decision",
  "deep",
  "degree",
  "delicate",
  "dependent",
  "design",
  "desire",
  "destruction",
  "detail",
  "development",
  "different",
  "digestion",
  "direction",
  "dirty",
  "discovery",
  "discussion",
  "disease",
  "disgust",
  "distance",
  "distribution",
  "division",
  "door",
  "doubt",
  "down",
  "drain",
  "drawer",
  "dress",
  "drink",
  "driving",
  "drop",
  "dust",
  "early",
  "earth",
  "east",
  "edge",
  "education",
  "effect",
  "elastic",
  "electric",
  "engine",
  "enough",
  "equal",
  "error",
  "even",
  "event",
  "ever",
  "every",
  "example",
  "exchange",
  "existence",
  "expansion",
  "experience",
  "expert",
  "face",
  "fact",
  "fall",
  "false",
  "family",
  "farm",
  "father",
  "fear",
  "feather",
  "feeble",
  "feeling",
  "female",
  "fertile",
  "fiction",
  "field",
  "fight",
  "finger",
  "fire",
  "first",
  "fish",
  "fixed",
  "flag",
  "flame",
  "flat",
  "flight",
  "floor",
  "flower",
  "fold",
  "food",
  "foolish",
  "foot",
  "force",
  "fork",
  "form",
  "forward",
  "fowl",
  "frame",
  "free",
  "frequent",
  "friend",
  "from",
  "front",
  "fruit",
  "full",
  "future",
  "garden",
  "general",
  "girl",
  "give",
  "glass",
  "glove",
  "goat",
  "gold",
  "good",
  "government",
  "grain",
  "grass",
  "great",
  "green",
  "grey",
  "grip",
  "group",
  "growth",
  "guide",
  "hair",
  "hammer",
  "hand",
  "hanging",
  "happy",
  "harbour",
  "hard",
  "harmony",
  "hate",
  "have",
  "head",
  "healthy",
  "hear",
  "hearing",
  "heart",
  "heat",
  "hello",
  "help",
  "high",
  "history",
  "hole",
  "hollow",
  "hook",
  "hope",
  "horn",
  "horse",
  "hospital",
  "hour",
  "house",
  "humour",
  "idea",
  "important",
  "impulse",
  "increase",
  "industry",
  "insect",
  "instrument",
  "insurance",
  "interest",
  "invention",
  "iron",
  "island",
  "jelly",
  "jewel",
  "join",
  "journey",
  "judge",
  "jump",
  "keep",
  "kettle",
  "kick",
  "kind",
  "kiss",
  "knee",
  "knife",
  "knot",
  "knowledge",
  "land",
  "language",
  "last",
  "late",
  "laugh",
  "lead",
  "leaf",
  "learning",
  "leather",
  "left",
  "letter",
  "level",
  "library",
  "lift",
  "light",
  "like",
  "limit",
  "line",
  "linen",
  "liquid",
  "list",
  "little",
  "living",
  "lock",
  "long",
  "look",
  "loose",
  "loss",
  "loud",
  "love",
  "machine",
  "make",
  "male",
  "manager",
  "mark",
  "market",
  "married",
  "mass",
  "match",
  "material",
  "meal",
  "measure",
  "meat",
  "medical",
  "meeting",
  "memory",
  "metal",
  "middle",
  "military",
  "milk",
  "mind",
  "mine",
  "minute",
  "mist",
  "mixed",
  "money",
  "monkey",
  "month",
  "moon",
  "morning",
  "mother",
  "motion",
  "mountain",
  "mouth",
  "move",
  "much",
  "muscle",
  "music",
  "nail",
  "name",
  "narrow",
  "nation",
  "natural",
  "near",
  "necessary",
  "neck",
  "need",
  "needle",
  "nerve",
  "news",
  "night",
  "noise",
  "normal",
  "north",
  "nose",
  "note",
  "number",
  "observation",
  "offer",
  "office",
  "only",
  "open",
  "operation",
  "opinion",
  "opposite",
  "orange",
  "order",
  "organization",
  "ornament",
  "other",
  "oven",
  "over",
  "owner",
  "page",
  "pain",
  "paint",
  "paper",
  "parallel",
  "parcel",
  "part",
  "past",
  "paste",
  "payment",
  "peace",
  "pencil",
  "person",
  "physical",
  "picture",
  "pipe",
  "place",
  "plane",
  "plant",
  "plate",
  "play",
  "please",
  "pleasure",
  "plough",
  "pocket",
  "point",
  "poison",
  "polish",
  "political",
  "poor",
  "porter",
  "position",
  "possible",
  "potato",
  "powder",
  "power",
  "present",
  "price",
  "print",
  "prison",
  "private",
  "probable",
  "process",
  "produce",
  "profit",
  "property",
  "prose",
  "protest",
  "public",
  "pull",
  "pump",
  "punishment",
  "purpose",
  "push",
  "quality",
  "question",
  "quick",
  "quiet",
  "quite",
  "rail",
  "rain",
  "range",
  "rate",
  "reaction",
  "reading",
  "ready",
  "reason",
  "receipt",
  "record",
  "regret",
  "regular",
  "relation",
  "religion",
  "representative",
  "request",
  "respect",
  "responsible",
  "rest",
  "reward",
  "rhythm",
  "rice",
  "right",
  "ring",
  "river",
  "road",
  "roll",
  "roof",
  "room",
  "root",
  "rough",
  "round",
  "rule",
  "safe",
  "sail",
  "salt",
  "same",
  "sand",
  "scale",
  "school",
  "science",
  "scissors",
  "screw",
  "seat",
  "second",
  "secret",
  "secretary",
  "seed",
  "seem",
  "selection",
  "self",
  "send",
  "sense",
  "separate",
  "serious",
  "servant",
  "shade",
  "shake",
  "shame",
  "sharp",
  "sheep",
  "shelf",
  "ship",
  "shirt",
  "shock",
  "shoe",
  "short",
  "shut",
  "side",
  "sign",
  "silk",
  "silver",
  "simple",
  "sister",
  "size",
  "skin",
  "skirt",
  "sleep",
  "slip",
  "slope",
  "slow",
  "small",
  "smash",
  "smell",
  "smile",
  "smoke",
  "smooth",
  "snake",
  "sneeze",
  "snow",
  "soap",
  "society",
  "sock",
  "soft",
  "solid",
  "some",
  "song",
  "sort",
  "sound",
  "soup",
  "south",
  "space",
  "spade",
  "special",
  "sponge",
  "spoon",
  "spring",
  "square",
  "stage",
  "stamp",
  "star",
  "start",
  "statement",
  "station",
  "steam",
  "steel",
  "stem",
  "step",
  "stick",
  "sticky",
  "stiff",
  "still",
  "stitch",
  "stocking",
  "stomach",
  "stone",
  "stop",
  "store",
  "story",
  "straight",
  "strange",
  "street",
  "stretch",
  "strong",
  "structure",
  "substance",
  "such",
  "sudden",
  "sugar",
  "suggestion",
  "summer",
  "support",
  "surprise",
  "sweet",
  "swim",
  "system",
  "table",
  "tail",
  "take",
  "talk",
  "tall",
  "taste",
  "teaching",
  "tendency",
  "test",
  "than",
  "that",
  "then",
  "theory",
  "there",
  "thick",
  "thin",
  "thing",
  "this",
  "thought",
  "thread",
  "throat",
  "through",
  "through",
  "thumb",
  "thunder",
  "ticket",
  "tight",
  "till",
  "time",
  "tired",
  "together",
  "tomorrow",
  "tongue",
  "tooth",
  "touch",
  "town",
  "trade",
  "train",
  "transport",
  "tray",
  "tree",
  "trick",
  "trouble",
  "trousers",
  "true",
  "turn",
  "twist",
  "umbrella",
  "under",
  "unit",
  "value",
  "verse",
  "very",
  "vessel",
  "view",
  "violent",
  "voice",
  "waiting",
  "walk",
  "wall",
  "warm",
  "wash",
  "waste",
  "watch",
  "water",
  "wave",
  "weather",
  "week",
  "weight",
  "well",
  "west",
  "wheel",
  "when",
  "where",
  "while",
  "whip",
  "whistle",
  "white",
  "wide",
  "will",
  "wind",
  "window",
  "wine",
  "wing",
  "winter",
  "wire",
  "wise",
  "with",
  "woman",
  "wood",
  "wool",
  "word",
  "work",
  "worm",
  "wound",
  "writing",
  "wrong",
  "year",
  "yellow",
  "yesterday",
  "young",
];

module.exports = { allTheWords };

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map