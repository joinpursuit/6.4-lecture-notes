class Board {
    constructor(){
        this.board = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
        this.movesRemaining = 9;
        this.winner = undefined; 
        this.MOVES = {
            1: [0, 0],
            2: [0, 1],
             3:[0, 2],
            4:[1, 0],
            5:[1, 1],
            6:[1, 2],
            7:[2, 0],
            8:[2, 1],
            9:[2, 2],
        }

    }
        isValidMove(move) { // we'll get move from the user as a string number
            if(!this.MOVES[move]) return false;
            let [row, col] = this.MOVES[move] 
            // let row = this.MOVES[move][0]
            // let col = this.MOVES[move][1]
            return typeof this.board[row][col] !== "string"
        } 

        placeMark(sym, move) {
            // should place symbol on board at move 
            // should decrement movesRemaining 
        }
}

let board = new Board();
console.log(board.isValidMove('5'))
console.log(board.isValidMove('0'))
console.log(board.isValidMove('a'))
console.log(board.isValidMove('9'))