"use strict";

//AVG VAR
const userScore = 0;
const computerScore = 0;
//DOM
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".res");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
//DOM_CASH

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3); //never go over 3;

  return choices(randomNumber);
}

function game(userChoice) {
  console.log("sss" + userChoice);
}
function main() {
  rock_div.addEventListener("click", function () {
    game("r");
  });
  rock_div.addEventListener("click", function () {
    game("p");
  });
  rock_div.addEventListener("click", function () {
    game("s");
  });
}
main();
