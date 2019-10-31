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