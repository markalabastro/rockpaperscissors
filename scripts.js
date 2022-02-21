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

let rock = document.querySelector(".rock")
let paper = document.querySelector(".paper")
let scissors = document.querySelector(".scissors")

rock.addEventListener('click',() => {game("rock")})
paper.addEventListener('click', () => {game("paper")})
scissors.addEventListener('click', () => {game("scissors")})

function game(playerInput) {

  // Receives player input and converts it to lower case. If an invalid choice is typed, it will call the function again.
  // function getPlayerInput() {
    // let playerInput = prompt("Do you choose rock, paper, or scissors?");
    // let convertedPlayerInput = playerInput.toLowerCase();

    // if (convertedPlayerInput === "rock") {
    //   playerInput = "rock";
    //   return playerInput;
    // } else if (convertedPlayerInput === "paper") {
    //   playerInput = "paper";
    //   return playerInput;
    // } else if (convertedPlayerInput === "scissors") {
    //   playerInput = "scissors";
    //   return playerInput;
    // } else {
    //   console.log("That is not a valid choice, please try again");
    //   return getPlayerInput();
    // }
   
    
  // }

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

  //stores the computer input return value in computerSelection
  let computerSelection = getComputerInput();

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

  let score = document.querySelector(".score")
  score.textContent = `Your score: ${playerWins} | Computer score: ${computerWins}`
  console.log(`Your score: ${playerWins} ||| Computer score: ${computerWins}`);

  if(playerWins === 5){
    document.querySelector(".question").textContent = "Congratulations you won!"
  } else if (computerWins === 5){
    document.querySelector(".question").textContent = "Sorry, but you lost!"
  }
}


