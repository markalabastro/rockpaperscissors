let playerWins = 0;
let computerWins = 0;

let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");

rock.addEventListener("click", () => {
  game("rock");
});
paper.addEventListener("click", () => {
  game("paper");
});
scissors.addEventListener("click", () => {
  game("scissors");
});

function game(playerInput) {
  //stores the player input return value in playerSelection
  let playerSelection = playerInput;

  // Generates the computer input using Math.random with a range from 1-3 and converts it to the correct format using a switch statement.
  function getComputerInput() {
    let computerInput = Math.ceil(Math.random() * 3);
    let convertedComputerInput = "";

    switch (computerInput) {
      case 1:
        convertedComputerInput = "rock";
        return convertedComputerInput;

      case 2:
        convertedComputerInput = "paper";
        return convertedComputerInput;

      case 3:
        convertedComputerInput = "scissors";
        return convertedComputerInput;
    }
  }

  let selection = document.querySelector(".selection");
  let roundResult = document.querySelector(".roundResult");
  //stores the computer input return value in computerSelection
  let computerSelection = getComputerInput();

  // Logic for rock paper scissors game.
  function playGame(playerSelection, computerSelection) {
    selection.textContent = `You chose ${playerSelection}  and the computer chose ${computerSelection}`;
    if (playerSelection === computerSelection) {
      roundResult.textContent = "It's a tie";
      roundResult.setAttribute("style", "color:yellow");
    } else if (
      (playerSelection === "rock" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "rock")
    ) {
      roundResult.textContent = "You lose!";
      roundResult.setAttribute("style", "color:red");
      computerWins++;
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      roundResult.textContent = "You win!";
      roundResult.setAttribute("style", "color:green");
      playerWins++;
    }
    return;
  }
  playGame(playerSelection, computerSelection);

  let score = document.querySelector(".score");
  score.textContent = `Your score: ${playerWins} | Computer score: ${computerWins}`;
  let modalContainer = document.querySelector(".modal-container");

  if (playerWins == 5) {
    
    modalContainer.setAttribute("style", "display:block");
    document.querySelector(".reset-container").style.backgroundColor = "green";
    document.querySelector(".matchResult").textContent ="Congratulations you won!";
  } else if (computerWins == 5) {

    modalContainer.setAttribute("style", "display:block");
    document.querySelector(".reset-container").style.backgroundColor = "red";
    document.querySelector(".matchResult").textContent = "Sorry, but you lost!";
  }

  const resetButton = document.querySelector("#reset");
      resetButton.addEventListener("click", () => {
      modalContainer.setAttribute("style", "display:none");
      computerWins = 0;
      playerWins = 0;
      document.querySelector(".question").textContent = "What weapon do you choose?";
      score.textContent = `Your score: ${playerWins} | Computer score: ${computerWins}`;
      selection.textContent = "";
      roundResult.textContent = "";
    })
    
  }

