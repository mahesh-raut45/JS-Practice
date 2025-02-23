const heroNumber = parseInt(Math.random() * 10 + 1);
let remainingGuesses = 3;
console.log(heroNumber);

const submitBtn = document.querySelector("#submitGuess");
const rightGuess = document.querySelector("#message");
const guessLeft = document.querySelector("#remainingGuesses");
const resetGame = document.querySelector("#restartGame");
const guessedNumber = document.querySelector("#previousGuesses");
const conteiner = document.querySelector(".container");

const p = document.createElement("p");
conteiner.append(p);

submitBtn.addEventListener("click", () => {
  const userInput = document.querySelector("#userGuess").value;
  console.log(userInput);

  checkInput(parseInt(userInput));
});

function checkInput(value) {
  if (value > 10) {
    p.innerHTML = "Number should be lesser than 10";
  } else if (value < 1) {
    p.innerHTML = "Number hould be greater than 0";
  } else {
    remainingGuesses--;
    if (remainingGuesses == 0) {
      displayMessage(`Game Over. Correct answer was ${heroNumber}`);
    } else {
      guessNumber(parseInt(value));
    }
  }
}

function displayMessage(message) {
  rightGuess.innerHTML = message;
  guessLeft.innerHTML = remainingGuesses;
}

function guessNumber(userInput) {
  if (userInput == heroNumber) {
    displayMessage("You guess the right number!");
  }
  displayGuess(userInput);
}

function displayGuess(value) {
  guessedNumber.innerHTML += `${value} `;
  remainingGuesses--;
}

resetGame.addEventListener("click", () => {
  remainingGuesses = 10;
  guessLeft.innerHTML = remainingGuesses;

  guessedNumber.innerHTML = "";
  console.log("Restart");
});
