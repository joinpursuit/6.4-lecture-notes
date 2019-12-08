const readline = require("readline");
const rl = readline.createInterface({input: process.stdin, output: process.stdout});

class Game {
  constructor() {
    this.towers = [[3, 2, 1], [], []];
    this.moveCount = 0;
  }

  promptMove(callback) {
     console.clear()
      this.render()
    rl.question("Enter first tower: ", from => {
        rl.question("Enter second tower: ", to => {
            callback(from - 1, to - 1);
        })
    })
  }

  run() {
      this.promptMove((from, to) => {
          if(!this.makeMove(from, to)) {
              console.log("INVALID MOVE")
          }
          if(!this.isWon()) {
              this.run();
          } else {
              this.render();
              console.log("YOU WON IN " + this.moveCount + " MOVES");
              rl.close()
          }
      })
  }

  isWon() {
    return this.towers.slice(1).some(arr => arr.length === 3);
  }

  isValidMove(from, to) {
    if (
      from < 0 ||
      to < 0 ||
      from > this.towers.length - 1 ||
      to > this.towers.length - 1
    ) {
      return false;
    }
    let towerFrom = this.towers[from]
    let towerTo = this.towers[to]
    if(!towerFrom.length) return false;
    if(!towerTo.length) return true;
    let fromLastDisc = towerFrom[towerFrom.length - 1]
    let toLastDisc = towerTo[towerTo.length - 1]
    return fromLastDisc < toLastDisc;
  }
  makeMove(from, to) {
      if(this.isValidMove(from, to)) {
          this.towers[to].push(this.towers[from].pop());
          this.moveCount++
          return true; 
      } else {
          return false;
      }
  }
  render() {
      console.log(this.towers);
      
  }
}
let game = new Game();
game.run()
// game.promptMove((a, b) => console.log("you typed " + a + " and " + b))
// console.log(game);
// console.log(game.makeMove(1, 0));
// console.log(game);
// console.log(game.makeMove(0, 1));
// console.log(game);
// console.log(game.makeMove(0, 2));
// console.log(game.makeMove(1, 2));
// console.log(game.makeMove(0, 1));
// console.log(game.makeMove(2, 0));
// console.log(game.makeMove(2, 1));
// console.log(game.makeMove(0, 1));
// console.log(game);
// console.log(game.isWon())
