var Letter = function(letter) {
    this.letter = letter;
    this.hasBeenGuessed = false;
    this.displayChar = function() {
        if (this.hasBeenGuessed === false) {
            return "_";
        } else {
            return this.letter;
        }
    };
    this.correctCheck = function(guess) {
        if (guess === this.letter){
            this.hasBeenGuessed = true;
        }
    }
}  

module.exports = Letter;