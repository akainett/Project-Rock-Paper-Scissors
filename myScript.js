//WRITE a code that chooses 3 numbers randomly//
let randomNumber = Math.floor(Math.random() * 3);
        
//LET the numbers be represented by rock paper scissors, where 0 is rock, 1 is paper and 2 is scissors// 
function getComputerChoice(randomNumber) {
    if(randomNumber === 0) {
        return "Rock";
    }else if(randomNumber === 1) {
        return "Paper";
    }else{
        return "Scissors";
        }    
}
console.log(getComputerChoice(randomNumber));