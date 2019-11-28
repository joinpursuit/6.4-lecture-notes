const { allTheWords } = require("./words.js")

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

