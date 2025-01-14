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

//create a prompt to ask human for input
//after the human chooses any of the options it should alert you choose this or that

let input = prompt("What's your choice!", "");

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