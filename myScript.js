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
    if(input === "Rock") {
        alert("You chose Rock");
    }else if(input === "Paper") {
        alert("You chose Paper");
    }else if(input === "Scissors") {
        alert("You chose Scissors");
    }else{
        alert("Oops, Wrong Option");
    }
}
console.log(input);

//CREATE variables to keep score 
let humanScore = 0;
let computerScore = 0;
