let computerSelection;
let playerSelection = prompt("Select your hand:").toLowerCase();

//Case insensitive player Choice
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
playerSelection = capitalize(playerSelection);

//Computer Choice
function getComputerChoice() {
  //get random number for choice
  let choiceGenerator = Math.floor(Math.random() * 3 + 1);
  // convert random number to choice
  if (choiceGenerator == 1) {
    choiceGenerator = "Rock";
  } else if (choiceGenerator == 2) {
    choiceGenerator = "Paper";
  } else {
    choiceGenerator = "Scissors";
  }
  computerSelection = choiceGenerator;
  return;
}
getComputerChoice();

console.log(playerSelection);
console.log(computerSelection);
