let roundResult;
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector('#Rock');
const paperBtn = document.querySelector('#Paper');
const scissorsBtn = document.querySelector('#Scissors');

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
  if (playerScore == 5) {
    alert('You WON!');
    location.reload();
  } else if (computerScore == 5) {
    alert('Computer WON!');
    location.reload();
  } else if (roundResult == 'win') {
    playerScore++;
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
  } else if (roundResult == 'lose') {
    computerScore++;
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
  } else {
    console.log("It's a tie!");
  }
  scoreSection.innerHTML = `Your score is ${playerScore} | Computer score is ${computerScore}`;
}
//play round and get result
function playRound() {
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
  return roundResult;
}

function checkWinner() {
  if (playerScore == 5) {
    alert('You WON!');
    location.reload();
  } else if (computerScore == 5) {
    alert('Computer WON!');
    location.reload();
  } else {
    return;
  }
}

//complete 5 round game
function game() {
  playRound();
  keepScore();
  checkWinner();
}

// get player choice
rockBtn.addEventListener('click', function (e) {
  playerSelection = 'Rock';
  game();
});

paperBtn.addEventListener('click', function (e) {
  playerSelection = 'Paper';
  game();
});

scissorsBtn.addEventListener('click', function (e) {
  playerSelection = 'Scissors';
  game();
});

scoreSection.innerHTML = `Your score is ${playerScore} | Computer score is ${computerScore}`;
