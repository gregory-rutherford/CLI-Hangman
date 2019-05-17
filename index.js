var Word = require("./word.js")
var inquire = require("inquirer");


var choices = [
    "snoopy",
    "linus",
    "woodstock",
    "franklin"
];

//grab a choice, run the appropriate functions and display the results
var demo = new Word(choices[0]);
// console.log(demo);
// console.log(demo.letterObjects[0].displayChar());
// console.log(demo.returnString());
demo.returnString();
console.log(demo);
// function test() {
//     let something = demo.display;
//     for (var i = 0; i < demo.letterObjects.length; i++) {
//          something.push(demo.letterObjects[i].displayChar());
//     }
// }
// test();
// console.log(demo.display);
// demo.letterObjects.map(correctCheck("n"));
// console.log(demo);

// inquire.prompt([
//     {
//         type: ""
//     }
// ])





