"use strict";
const again = document.querySelector(".again");
const number = document.querySelector(".number");
const guessInput = document.querySelector(".guess");
const check = document.querySelector(".check");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
let numberSecret = Math.trunc(Math.random() * 20) + 1;
let scoreNumber = 20;
let highScoreNumber = 0;
check.addEventListener("click", function () {
  const guess = Number(guessInput.value);
  if (!guess) {
    message.textContent = "😶‍🌫️ No found Number";
  } else if (guess === numberSecret) {
    if (scoreNumber > 1) {
      number.textContent = numberSecret;
      message.textContent = "😎👌 Correct Number";
      document
        .querySelector("body")
        
        .classList.remove(
          "bg-gradient-to-r",
          "from-gray-900",
          "via-black",
          "to-gray-950"
        );
      document
        .querySelector("body")
        
        .classList.add(
               "bg-gradient-to-r", "from-emerald-700" ,"via-green-600" ,"to-lime-400"

        );
    } else {
      document.querySelector("body").style.backgroundColor = "#212121";
      message.textContent = "you lost the much 🤥😂";
      again.style.backgroundColor = "red";
      again.style.border = "red";
      guessInput.value = "";
      score.textContent = 0;
    }
    if (scoreNumber > highScoreNumber) {
      highScoreNumber = scoreNumber;
      highscore.textContent = highScoreNumber;
    }
  } else if (guess > numberSecret) {
    if (scoreNumber > 1) {
      message.textContent = "⚡too high";
      scoreNumber--;
      score.textContent = scoreNumber;
    } else {
      message.textContent = "you lost the much 🤥😂";
      again.style.backgroundColor = "red";
      again.style.border = "red";
      guessInput.value = "";
      score.textContent = 0;
    }
  } else if (guess < numberSecret) {
    if (scoreNumber > 1) {
      message.textContent = "👇too low";
      scoreNumber--;
      score.textContent = scoreNumber;
    } else {
      message.textContent = "you lost the much 🤥😂";
      again.style.backgroundColor = "red";
      again.style.border = "red";
      guessInput.value = "";
      score.textContent = 0;
    }
  }
});
again.addEventListener("click", function () {
  numberSecret = Math.trunc(Math.random() * 20) + 1;
  scoreNumber = 20;
  score.textContent = scoreNumber;
  message.textContent = "Start guessing...";
  document
    .querySelector("body")
    .classList.add(
      "bg-gradient-to-r",
      "from-gray-900",
      "via-black",
      "to-gray-950"
    );
  number.textContent = "?";
  guessInput.value = "";
  again.style.backgroundColor = "#9CA3AF";
  again.style.border = "#9CA3AF";
});
