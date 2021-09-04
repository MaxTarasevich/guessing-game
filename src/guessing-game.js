class GuessingGame {
    constructor() {
        this.min = 0
        this.max = 0
        this.rez = 0
    }

    setRange(min, max) {
        this.min = min
        this.max = max
    }

    guess() {
        this.rez = Math.round((this.min + this.max)/2)
        return this.rez
    }

    lower() {
        this.max = this.rez
    }

    greater() {
        this.min = this.rez
    }
}

module.exports = GuessingGame;
