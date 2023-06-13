const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const result = document.querySelector('.result');
const playerScoreText = document.querySelector('.player');
const comScoreText = document.querySelector('.com');

rockBtn.addEventListener('click', () => playRound("Rock"));
paperBtn.addEventListener('click', () => playRound("Paper"));
scissorsBtn.addEventListener('click', () => playRound("Scissors"));

playerScore = 0;
comScore = 0;

function getComputerChoice(){
    choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection) {
    
    const computerSelection = getComputerChoice();

    //all possible winning scenarios, return win
    console.log ("Hello " + playerSelection);
    if (playerSelection === "Rock" && computerSelection === "Scissors" ||
        playerSelection === "Paper" && computerSelection === "Rock" ||
        playerSelection === "Scissors" && computerSelection === "Paper"
    )
    {
        result.textContent = "You win! " + playerSelection + " beats " + computerSelection + ".";
        playerScore++;
        playerScoreText.textContent = "Player: " + playerScore;
    }
        

    //all possible losing scenarios, return false
    else if (playerSelection === "Rock" && computerSelection === "Paper" ||
        playerSelection === "Paper" && computerSelection === "Scissors" ||
        playerSelection === "Scissors" && computerSelection === "Rock"
    ){
        result.textContent = "You lose! " + computerSelection + " beats " + playerSelection + ".";
        comScore++;
        comScoreText.textContent = "Com: " + comScore;
    }

    else if(playerSelection === computerSelection){
        result.textContent = "Tie!";
    }
}

// function game(){

//     const finalRound = 5;
//     let playerScore = 0;
//     let computerScore = 0;

//     for (let i=0; i<finalRound; i++) {

//         let playerSelection = prompt("Rock, paper, scissors, shoot!: ");
        
//         //Changes first character of playerSelection to uppercase and the rest to lowercase
//         playerSelection = playerSelection.substring(0,1).toUpperCase() + playerSelection.substring(1).toLowerCase();
    
//         let computerSelection = getComputerChoice();
//         let roundMessage = "Round " + (i+1) + ".";
//         let result;

//         //Round will only be played with a valid answer. If one is not provided, result will remain undefined
//         if (playerSelection === "Rock" ||
//             playerSelection === "Paper" || 
//             playerSelection === "Scissors" )
//             result = playRound(playerSelection, computerSelection);

//         if (result === "win"){
//             roundMessage += " You win! " + playerSelection + " beats " + computerSelection + ".";
//             playerScore++;
//         }

//         else if (result === "lose"){
//             roundMessage += " You lose! " + computerSelection + " beats " + playerSelection + ".";
//             computerScore++;
//         }

//         else if (result === "tie")
//             roundMessage += " Tie!"

//         else{
//             roundMessage += " " + playerSelection + " is not a valid response. Round will repeat."
//             i--;
//         }

//         roundMessage += " Player:" + playerScore + " Computer:" + computerScore;
//         console.log(roundMessage);
//     }

//     if (playerScore > computerScore)
//         winnerMessage = "You have won! Congratulations.";
//     else if (playerScore < computerScore)
//         winnerMessage = "You have lost! Better luck next time."
//     else
//         winnerMessage = "You have tied!"
        
//     winnerMessage += " Final scores - Player:" + playerScore + " Computer:" + computerScore;
//     console.log(winnerMessage);
// }

//game();



