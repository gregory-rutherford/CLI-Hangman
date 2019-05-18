var Word = require("./word.js")
var inquire = require("inquirer");
var choices = [
    "snoopy",
    "linus",
    "woodstock",
    "franklin"
];

var guessesRemaining = 8;

playGame();
// choose a random word from choices array, apply constructor properties, return string of characters
function playGame() {
    var item = choices[Math.floor(Math.random() * choices.length)];
    var gameWord = new Word(item);
    gameWord.returnString();
    console.log(gameWord.display);
    userGuess();
    //recursive function to let the user keep guessing
    function userGuess() {
        inquire.prompt([
            {
                type: "input",
                message: "please pick a letter",
                name: "choice"
            }
        ]).then(function (user) {
            gameWord.checker(user.choice);
            guessesRemaining--;
            console.log(`You have ${guessesRemaining} guesses remaining`);
            //need to check if the user guessed wrong and console log a statement and subtract from guesses remaining
            function sanitize() {
                gameWord.display = [];
            }
            sanitize();
            gameWord.returnString();
            console.log(gameWord.display);
            if (gameWord.display.includes("_")) {
                userGuess();
            } else {
                endGame();
            }
        })
    }
}





function endGame() {
    console.log("The Game is over");
    guessesRemaining=8;
    inquire.prompt([
        {
            message: "Would you like to play again? Please enter 'yes' or 'no",
            type: "input",
            name: "playAgain"
        }
    ]).then(function (user) {
        if (user.playAgain === "yes") {
            playGame();
        }
        else
            return (console.log("Ok!"));
    });
}

