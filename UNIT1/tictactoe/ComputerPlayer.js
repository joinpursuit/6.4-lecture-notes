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