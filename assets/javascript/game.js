let alphabet = "abcdefghijklmnopqrstuvwxyz";
var wins = 0;
var losses = 0;
var guesses = 10;
var guessArr = [];
var answer = alphabet[Math.floor(Math.random() * alphabet.length)];

document.onkeypress = function (event) {
    var guess = event.key;


    if (guess === answer) {
        wins ++;
        guesses = 10;
    } else {
        guesses--;
    }

    if (guesses === 0) {
        losses++
    }


document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;
document.getElementById("guesses").innerHTML = guesses;
document.getElementById("soFar").innerHTML = guessArr
document.getElementById("secret").innerHTML = answer;

}

// let userEntry = document.onkeyup = function (event) {
//     soFarCount.textContent = event.key;
// };



