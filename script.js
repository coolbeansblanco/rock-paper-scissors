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
goalScore = 5;

function getComputerChoice(){
    choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection) {
    
    const computerSelection = getComputerChoice();

    //all possible winning scenarios, return win
    if (playerSelection === "Rock" && computerSelection === "Scissors" ||
        playerSelection === "Paper" && computerSelection === "Rock" ||
        playerSelection === "Scissors" && computerSelection === "Paper"
    )
    {
        //reset previous game scores on first click. player score reported later in function.
        if (playerScore === 5 || comScore ===5){
            playerScore = 0;
            comScore = 0;
            comScoreText.textContent = "Com: " + comScore;
        }
        result.textContent = "You win! " + playerSelection + " beats " + computerSelection + ".";
        playerScore++;
        playerScoreText.textContent = "Player: " + playerScore;
        if (playerScore === goalScore){
            result.textContent = "You have won! Final score - " + playerScoreText.textContent + " " + comScoreText.textContent;
        }
    }
        

    //all possible losing scenarios, return false
    else if (playerSelection === "Rock" && computerSelection === "Paper" ||
        playerSelection === "Paper" && computerSelection === "Scissors" ||
        playerSelection === "Scissors" && computerSelection === "Rock"
    ){
        //reset previous game scores on first click. com score reported later in function.
        if (playerScore === 5 || comScore ===5){
            playerScore = 0;
            comScore = 0;
            playerScoreText.textContent = "Player: " + playerScore;
        }
        result.textContent = "You lose! " + computerSelection + " beats " + playerSelection + ".";
        comScore++;
        comScoreText.textContent = "Com: " + comScore;
        if (comScore === goalScore){
            result.textContent = "You have lost! Final score - " + playerScoreText.textContent + ", " + comScoreText.textContent;
        }
    }

    else if(playerSelection === computerSelection){
        result.textContent = "Tie!";
    }
}
