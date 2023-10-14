"use strict";

//AVG VAR
const userScore = 0;
const computerScore = 0;
//DOM
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".res > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
//DOM_CASH

//play the game
function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3); //never go over 3;

  return choices[randomNumber];
}
//win-function
function wins(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span = computerScore;
  result_div.innerHTML = userChoice + " beats" + computerChoice + ". You win!";
}
//
function lose() {}
function draw() {
  console.log("DRAW");
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  const result = userChoice + computerChoice;

  switch (result) {
    case "rs":
    case "pr":
    case "sp":
      wins(userChoice + computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

//event listeners
function main() {
  rock_div.addEventListener("click", function () {
    game("r");
  });
  paper_div.addEventListener("click", function () {
    game("p");
  });
  scissor_div.addEventListener("click", function () {
    game("s");
  });
}
main();
