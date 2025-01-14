//WRITE a code that chooses 3 numbers randomly//
let randomNumber = Math.floor(Math.random() * 3);
        
//LET the numbers be represented by rock paper scissors, where 0 is rock, 1 is paper and 2 is scissors// 
let getComputerChoice = function(randomNumber) {
    if(randomNumber === 0) {
        return "Rock";
    }else if(randomNumber === 1) {
        return "Paper";
    }else{
        return "Scissors";
        }    
}
console.log(getComputerChoice(randomNumber));

//CREATE a prompt to ask player for input

let input = prompt("What's your choice!", "");

//ALERT player what he or she chose after typing in his or her input

let getHumanChoice = function(input) {
    if(input == "Rock") {
        return "Rock";
    }else if(input == "Paper") {
        return "Paper";
    }else if(input == "Scissors") {
        return "Scissors";
    }else{
        alert("Oops, Wrong Option");
    }
};
console.log(input);

//CREATE variables to keep score 
let humanScore = 0;
let computerScore = 0;

//write function with condition for when player chooses either Rock,Paper or scissors. increase score for winner of round
function playRound(humanChoice, computerChoice) {
    if(humanChoice == "Rock") {
        if(computerChoice === "Paper") {
            console.log("You lose!, Paper beats Rock");
            console.log("computerScore =", ++computerScore);
            console.log("humanScore =", humanScore);
        }else if(computerChoice === "Scissors") {
            console.log("You won");
            console.log("computerScore =", computerScore);
            console.log("humanScore =", ++humanScore);
        }else{
            console.log("Draw");
            console.log("computerScore =", computerScore);
            console.log("humanScore =", humanScore);
        }
    }else if(humanChoice == "Paper") {
        if(computerChoice === "Scissors") {
            console.log("You lose!, Scissors beats Rock");
            console.log("computerScore =", ++computerScore);
            console.log("humanScore =", humanScore);
        }else if(computerChoice === "Rock") {
            console.log("You won");
            console.log("computerScore =", computerScore);
            console.log("humanScore =", ++humanScore);
        }else{
            console.log("Draw");
            console.log("computerScore =", computerScore);
            console.log("humanScore =", humanScore);
        }
    }else if(humanChoice == "Scissors"){
        if(computerChoice === "Rock") {
            console.log("You lose!, Rock beats Scissors");
            console.log("computerScore =", ++computerScore);
            console.log("humanScore =", humanScore);
        }else if(computerChoice === "Paper") {
            console.log("You won");
            console.log("computerScore =", computerScore);
            console.log("humanScore =", ++humanScore);
        }else{
            console.log("Draw");
            console.log("computerScore =", computerScore);
            console.log("humanScore =", humanScore);
        }
    }else{
        console.log("Incorrect Choice!, choose either Rock, Paper, or Scissors");
    }
    
}

const humanSelection = getHumanChoice(input);
const computerSelection = getComputerChoice(randomNumber);

playRound(humanSelection, computerSelection);
  