/*
1. player selects rock, paper, scissors
2. Use toLowerCase() to convert user input
2a. 
3. Computer uses math.random() to generate a number between 1 and 3
4. If 1 = rock, 2 = paper, 3 = scissors
5. Compare user input to computer to see who wins using a function called computerPlay(playerSelection, computerSelection)
6. Output a string that says something like "You lose! Paper beats Rock!" after each round
7. Tally the rounds so and whoever reaches 5 wins
*/

let playerWins = 0;
let computerWins = 0;

function game() {

  // Receives player input and converts it to lower case. If an invalid choice is typed, it will call the function again.
  function getPlayerInput() {
    let playerInput = prompt("Do you choose rock, paper, or scissors?");
    let convertedPlayerInput = playerInput.toLowerCase();

    if (convertedPlayerInput === "rock") {
      playerInput = "rock";
      return playerInput;
    } else if (convertedPlayerInput === "paper") {
      playerInput = "paper";
      return playerInput;
    } else if (convertedPlayerInput === "scissors") {
      playerInput = "scissors";
      return playerInput;
    } else {
      console.log("That is not a valid choice, please try again");
      return getPlayerInput();
    }
  }

  let playerSelection = getPlayerInput();
  // console.log(playerSelection);


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

  let computerSelection = getComputerInput();
  // console.log(computerSelection);

  // console.log(computerSelection +" "+ playerSelection);

  // Logic for rock paper scissors game.
  function playGame(playerSelection, computerSelection) {
    console.log(
      `You chose ${playerSelection}  and the computer chose ${computerSelection}`
    )
    if (playerSelection === computerSelection) {
      ;
      console.log("It's a tie");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
      console.log("You lose!");
      computerWins++;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      console.log("You win!");
      playerWins++;
    } else if (
      playerSelection === "paper" &&
      computerSelection === "scissors"
    ) {
      console.log("You lose!");
      computerWins++;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      console.log("You win!");
      playerWins++;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      console.log("You lose!");
      computerWins++;
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "paper"
    ) {
      console.log("You win!");
      playerWins++;
    }
    return;
  }
  playGame(playerSelection, computerSelection);

  console.log(`Your score: ${playerWins} ||| Computer score: ${computerWins}`);

  if (playerWins == 5) {
    console.log("You have WON the match");
    return;
  } else if (computerWins == 5) {
    console.log("You have LOST the match");
    return;
  }
}

//Keep playing the game until one of the conditions is no longer true.
while (playerWins < 5 && computerWins < 5) {
  game();
}
