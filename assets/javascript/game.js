let wins = 0;
let losses = 0;
let guesses = 0;
let soFar = [];
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let guess = ""



let answer = function () {
    if (guesses === 0) {
        return alphabet[Math.floor(Math.random() * alphabet.length)];
    } else {
        return answer;
    }
}

if (guess === answer) {
    wins++;
} else {
    losses ++;
    guesses--;
    soFar.push(guess);
}



console.log(answer();