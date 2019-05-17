var Letter = require("./letter.js");

var Word = function(word) {
    this.word = word;
    this.display = [];
    this.letterObjects = [];
    this.letterArray = word.split("");
    for (var i = 0; i < this.letterArray.length; i++){
        this.letterObjects.push(new Letter(this.letterArray[i]));
    };
    this.returnString = function () {
        let placeholder = this.display;
        for (var i = 0; i < this.letterObjects.length; i++) {
             placeholder.push(this.letterObjects[i].displayChar());
        }
}
}

module.exports = Word;