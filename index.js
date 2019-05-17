var Word = require("./word.js")
var inquire = require("inquirer");
var choices = [
    "snoopy",
    "linus",
    "woodstock",
    "franklin"
];

playGame();
// choose a random word from choices array, apply constructor properties, return string of characters
function playGame () {
    var item = choices[Math.floor(Math.random()*choices.length)];
    var gameWord = new Word(item);
    gameWord.returnString();
    console.log(gameWord.display);
    userGuess();
function userGuess () {
inquire.prompt([
    {
        type: "input",
        message: "please pick a letter",
        name: "choice"
    }
]).then(function(user){
    console.log(user.choice);
    gameWord.checker(user.choice);
    function sanitize() {
        gameWord.display = [];
    }
    sanitize();
    gameWord.returnString();
    console.log(gameWord.display);
    userGuess();
})
}     
}





