var Letter = require("./letter.js");


var Word = function(word) {
    this.word = word;
    this.letterObjects = [];
    this.letterArray = word.split("");
    this.makeObj = function (){
        for (var i = 0; i < this.letterArray.length; i++) {
            this.letterObjects.push(new Letter(this.letterArray[i]));
        }
    }
    this.returnStr = function () {
        for (var i = 0; i < this.letterObjects; i++) {
            return this.letterObjects[i].guessFunc();
        }
    }
}
   
    


var cat = new Word("cat");
var alien = new Word("alien");
alien.makeObj();
alien.letterObjects[0].correctCheck("b");
alien.returnStr();
console.log(alien);
console.log(cat);

// console.log(alien[0].letter);



    // A function that returns a string representing the word. This should call the function on each
    //  letter object (the first function defined in Letter.js) that displays 
    // the character or an underscore and concatenate those together.
    // Word.prototype.returnStr = function () {
        
    // }
//A function that takes a character as an argument and calls the guess
    //  function on each letter object (the second function defined in Letter.js)

// Word.prototype.callGuess = function () {

// }
// Word.prototype.returnStr = function () {
//         for (var i = 0; i < this.letterObjects; i++) {
//             return this.letterObjects[i].guessFunc();
//         }
//     }


module.exports = Word;