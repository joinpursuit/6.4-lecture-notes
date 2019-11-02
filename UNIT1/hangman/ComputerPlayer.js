const { allTheWords } = require("./words.js")

class ComputerPlayer {
    constructor(name = "Robo Bobo") {
        this.dictionary = allTheWords;
        this.name = name; 
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

