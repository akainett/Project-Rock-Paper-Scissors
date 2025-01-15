function playGame() {
    let choices = ["rock", "paper", "scissors"];
    let humanScore = 0;
    let computerScore = 0;
    
    console.log("Welcome to Rock, Paper, Scissors. This game has 5 rounds\n")
    //CREATE for loop for five rounds
    
    for (let round = 1; round <= 5; round++) {
        console.log(`--- Round ${round} ---`)
        
        //CREATE a prompt to ask player for input
        //GET player choice
        let getHumanChoice = prompt("What's your choice!").toLowerCase();
        if(!choices.includes(getHumanChoice)) {
            console.log("Incorrect entry, choose either rock, paper, or scissors");
            round--;
            continue; 
        }
        
        //GET computer choice
        //WRITE a code that chooses 3 numbers randomly//
        //LET the numbers be represented by rock paper scissors, where 0 is rock, 1 is paper and 2 is scissors// 
        let getComputerChoice = choices[Math.floor(Math.random() * 3)];
        
        console.log(`Human chose: ${getHumanChoice}`);
        console.log(`Computer chose: ${getComputerChoice}`);
        
        //CREATE condition for who wins the round. Increase score for winner of round
        
        if(getHumanChoice === getComputerChoice) {
            console.log("It's a draw round");
            
        }else if(
            (getHumanChoice === "rock" && getComputerChoice === "scissors") ||
            (getHumanChoice === "paper" && getComputerChoice === "rock") ||
            (getHumanChoice === "scissors" && getComputerChoice === "paper")
        ) {
            console.log("You won this round");
            humanScore++;
            
        }else {
            console.log("You lose this round")
            computerScore++;
        }
        console.log(`Human score = ${humanScore}`);
        console.log(`Computer score = ${computerScore}`)
        
    }
    
    //DISPLAY final results
    console.log("         Game Over       ");
    console.log(`Human Final Score = ${humanScore}`);
    console.log(`Computer Final Score = ${computerScore}`);
    
    if(humanScore > computerScore) {
        console.log("Congratulation! you have won")
    }else if(humanScore < computerScore) {
        console.log("You lose the game")
    }else{
        console.log("Its a draw match")
    }
}
playGame();    