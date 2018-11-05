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
        guessArr.length = 0;
        answer = alphabet[Math.floor(Math.random() * alphabet.length)];
    } else {
        guesses--;
        guessArr.push(guess);
    }

    if (guesses === 0) {
        losses++
        guesses = 10
        guessArr.length = 0;
        answer = alphabet[Math.floor(Math.random() * alphabet.length)];
    }


document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;
document.getElementById("guesses").innerHTML = guesses;
document.getElementById("soFar").innerHTML = guessArr
// document.getElementById("secret").innerHTML = answer;


}



