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

function game(){
  let playerWins = 0;
  let computerWins = 0;

  function getPlayerInput(){
    let playerInput = prompt("Do you choose rock, paper, or scissors?")
    let convertedPlayerInput = playerInput.toLowerCase();

    if(convertedPlayerInput === "rock"){
      playerInput = "rock";
      return playerInput;

    }
    else if(convertedPlayerInput === "paper"){
      playerInput = "paper";
      return playerInput;

    }
    else if(convertedPlayerInput === "scissors"){
      playerInput = "scissors";
      return playerInput;

    }
    else {
      console.log("That is not a valid choice, please try again")
      return getPlayerInput();
    }    
  }
  let choice = getPlayerInput();
  console.log(choice);

  // while(choice != "rock" || choice != "paper" || choice != "scissors"){
  // getPlayerInput();
  // }
}

game();