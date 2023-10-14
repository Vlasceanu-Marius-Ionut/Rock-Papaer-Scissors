"use strict";

// Initialize scores
let userScore = 0;
let computerScore = 0;

// DOM elements
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".res > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
const btrn = document.querySelector("button");
btrn.addEventListener("click", resetScore);
//-----------------------------------------------------

//Function to reset the score
function resetScore() {
  userScore = 0;
  computerScore = 0;
  userScore_span.textContent = userScore;
  computerScore_span.textContent = computerScore;
  result_p.textContent = "Score reset.";
}
// Function to get the computer's choice
function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

// Function to convert a choice letter to the corresponding word
function convertToWord(letter) {
  if (letter === "r") {
    return "Rock";
  }
  if (letter === "p") {
    return "Paper";
  }
  if (letter === "s") {
    return "Scissors";
  }
}

// Function to update the result and scores for a win
function wins(userChoice, computerChoice) {
  userScore++;
  userScore_span.textContent = userScore;
  computerScore_span.textContent = computerScore;
  result_p.textContent = `${convertToWord(userChoice)} beats ${convertToWord(
    computerChoice
  )}. You win!`;
}

// Function to update the result for a loss
function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.textContent = userScore;
  computerScore_span.textContent = computerScore;
  result_p.textContent = `${convertToWord(
    computerChoice
  )} beats ${convertToWord(userChoice)}. You lose!`;
}

// Function to update the result for a draw
function draw(userChoice, computerChoice) {
  result_p.textContent = `${convertToWord(userChoice)} equals ${convertToWord(
    computerChoice
  )}. It's a draw!`;
}

// Function to play the game
function game(userChoice) {
  const computerChoice = getComputerChoice();
  const result = userChoice + computerChoice;

  switch (result) {
    case "rs":
    case "pr":
    case "sp":
      wins(userChoice, computerChoice);
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

// Add event listeners for user choices
rock_div.addEventListener("click", function () {
  game("r");
});

paper_div.addEventListener("click", function () {
  game("p");
});

scissor_div.addEventListener("click", function () {
  game("s");
});
