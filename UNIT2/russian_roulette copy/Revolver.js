
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

