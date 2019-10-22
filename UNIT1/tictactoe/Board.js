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
}