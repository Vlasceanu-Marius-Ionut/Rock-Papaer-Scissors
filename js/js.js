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

//play the game
function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3); //never go over 3;

  return choices[randomNumber];
}

function wins() {
  console.log("WIN");
}
function lose() {
  console.log("LOST");
}
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
      wins();
      break;
    case "rp":
    case "ps":
    case "sr":
      lose();
      break;
    case "rr":
    case "pp":
    case "ss":
      draw();
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
