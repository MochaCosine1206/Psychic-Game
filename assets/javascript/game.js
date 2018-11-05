let wins = 0;
let losses = 0;
let guesses = 9;
let soFar = [];
let alphabet = "abcdefghijklmnopqrstuvwxyz";
var emptyString = "";

while (emptyString.length < 1) {
    emptyString += alphabet[Math.floor(Math.random() * alphabet.length)];
}
let guess = function () {
    if (emptyString === guess) {
        wins = wins++
    } else {
        losses = losses++
        guesses = guesses--
    }
}





console.log(emptyString);
console.log(guess("c"));
console.log(losses);
console.log(wins);
console.log(guesses);
