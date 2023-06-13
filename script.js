const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');

function getComputerChoice(){
    choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    
    //all possible winning scenarios, return win
    if (playerSelection === "Rock" && computerSelection === "Scissors" ||
        playerSelection === "Paper" && computerSelection === "Rock" ||
        playerSelection === "Scissors" && computerSelection === "Paper"
    )
        return "win";

    //all possible losing scenarios, return false
    else if (playerSelection === "Rock" && computerSelection === "Paper" ||
        playerSelection === "Paper" && computerSelection === "Scissors" ||
        playerSelection === "Scissors" && computerSelection === "Rock"
    )
        return "lose";
    
    return "tie";
}

function game(){

    const finalRound = 5;
    let playerScore = 0;
    let computerScore = 0;

    for (let i=0; i<finalRound; i++) {

        let playerSelection = prompt("Rock, paper, scissors, shoot!: ");
        
        //Changes first character of playerSelection to uppercase and the rest to lowercase
        playerSelection = playerSelection.substring(0,1).toUpperCase() + playerSelection.substring(1).toLowerCase();
    
        let computerSelection = getComputerChoice();
        let roundMessage = "Round " + (i+1) + ".";
        let result;

        //Round will only be played with a valid answer. If one is not provided, result will remain undefined
        if (playerSelection === "Rock" ||
            playerSelection === "Paper" || 
            playerSelection === "Scissors" )
            result = playRound(playerSelection, computerSelection);

        if (result === "win"){
            roundMessage += " You win! " + playerSelection + " beats " + computerSelection + ".";
            playerScore++;
        }

        else if (result === "lose"){
            roundMessage += " You lose! " + computerSelection + " beats " + playerSelection + ".";
            computerScore++;
        }

        else if (result === "tie")
            roundMessage += " Tie!"

        else{
            roundMessage += " " + playerSelection + " is not a valid response. Round will repeat."
            i--;
        }

        roundMessage += " Player:" + playerScore + " Computer:" + computerScore;
        console.log(roundMessage);
    }

    if (playerScore > computerScore)
        winnerMessage = "You have won! Congratulations.";
    else if (playerScore < computerScore)
        winnerMessage = "You have lost! Better luck next time."
    else
        winnerMessage = "You have tied!"
        
    winnerMessage += " Final scores - Player:" + playerScore + " Computer:" + computerScore;
    console.log(winnerMessage);
}

game();



