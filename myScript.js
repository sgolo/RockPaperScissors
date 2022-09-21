let roundResult;
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1);
}
//get case insensitive player input
function getPlayerSelection() {
  playerSelection = prompt('Select your hand:').toLowerCase();
  playerSelection = capitalize(playerSelection);
  return playerSelection;
}

//computer choice
function getComputerChoice() {
  //get random number for choice
  let choiceGenerator = Math.floor(Math.random() * 3 + 1);
  // convert random number to choice
  if (choiceGenerator == 1) {
    choiceGenerator = 'Rock';
  } else if (choiceGenerator == 2) {
    choiceGenerator = 'Paper';
  } else {
    choiceGenerator = 'Scissors';
  }
  return (computerSelection = choiceGenerator);
}

function keepScore() {
  if (roundResult == 'win') {
    playerScore++;
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
  } else if (roundResult == 'lose') {
    computerScore++;
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
  } else {
    console.log("It's a tie!");
  }
}
//play round and get result
function playRound() {
  let playerSelection = getPlayerSelection();
  let computerSelection = getComputerChoice();

  if (
    (playerSelection === 'Paper' && computerSelection === 'Rock') ||
    (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
    (playerSelection === 'Scissors' && computerSelection === 'Paper')
  ) {
    roundResult = 'win';
    //lose
  } else if (
    (playerSelection === 'Paper' && computerSelection === 'Scissors') ||
    (playerSelection === 'Rock' && computerSelection === 'Paper') ||
    (playerSelection === 'Scissors' && computerSelection === 'Rock')
  ) {
    roundResult = 'lose';
  } else {
    roundResult = 'tie';
  }
  console.log(
    `Your hand: ${playerSelection} vs Computer hand: ${computerSelection}`
  );
  return roundResult;
}
//play 5 rounds & display score
function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
    keepScore();
  }
}

game();

console.log(`Your score ${playerScore}`);
console.log(`Computer score ${computerScore}`);
