var Letter = function (letter) {
    this.letter = letter;
    this.hasBeenGuessed = false;
    this.displayChar = function () {
        if (this.hasBeenGuessed === false) {
            return "_";
        } else {
            return this.letter;
        }
    };
    this.correctCheck = function (guess) {
        if (guess === this.letter) {
            this.hasBeenGuessed = true;
            console.log("correct guess!")
        } else {
            console.log("Oof that is not correct!")
        }
    }
}

module.exports = Letter;