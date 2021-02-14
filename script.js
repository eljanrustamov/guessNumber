'use strict';
let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector('.again');
const scoreMessage = document.querySelector(".score");
const highScoreMessage = document.querySelector(".highscore");

const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
}


checkBtn.addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    //When there is no input
    if (!guess) {
        // message.textContent = "No number!"
        displayMessage("No number!")
        // message.textContent = `Wrong Number! (Correct is: ${secretNumber})`;
    }
    //When players win
    else if (guess === secretNumber) {
        // message.textContent = `Correct Number! ${secretNumber}`;
        displayMessage(`Correct Number! ${secretNumber}`)
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = "#60b347";
        document.querySelector('.number').style.width = "30rem";



        if (score > highScore) {
            highScore = score;
            highScoreMessage.textContent = highScore;
        }
    }

    //When guess is wrong
    else if (guess !== secretNumber) {
        if (score > 1) {
            // message.textContent = guess > secretNumber ? 'Too high!' : 'Too low!';
            displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!')
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            // message.textContent = "You lost the game!"
            displayMessage("You lost the game!");
            document.querySelector(".score").textContent = 0;
        }

    }

})

againBtn.addEventListener("click", function () {
    secretNumber = Math.floor(Math.random() * 20) + 1;


    const guess = Number(document.querySelector(".guess").value = "");
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "25rem";
    score = 20;
    scoreMessage.textContent = score;

    // message.textContent = "Start guessing...";
    displayMessage("Start guessing...")
    document.querySelector(".number").textContent = "?"
})