const readline = require("readline-sync");

const  play = () => {
    let userInput;
    while(userInput !== "yes") {
        userInput = readline.question("Would you like to play, yes or no")
    }
    console.log("glad I could convince you")
    userInput = readline.question("would you like to go to the forest or the castle? ")
    if(userInput === "forest") {
        forest();
    } else {    
        castle()
    }
}

const castle = () => {
    console.clear();
    console.log("Youve entered the castle, walk or run? ")
    let userInput = readline.question("")
    if(userInput === "run") {
        console.log("ran out of catsle and into the forest")
        forest();
    } else {
        console.log("went up stairs slipped and died")
    }
}

const forest = () => {
    console.log("welcome to the forest")
    let userInput = readline.question("Go 'back' to the castle or explore")
    if(userInput === "back") {
        castle()
    } else {
        console.log("found a bear, got eaten")
    }
}

play();
// forest()