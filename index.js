const rpsChoices = ["rock","paper","scissors"] ;
let computerPoints = 0
let playerPoints = 0 

function getComputerChoice(){
    const index = Math.floor(Math.random()*rpsChoices.length);
    const randomChoice = rpsChoices[index];

    return randomChoice;
}


function getWinner(playerChoice,computerChoice){
    let returnVar;
    if (playerChoice === rpsChoices[0] && computerChoice === rpsChoices[1]) {
        computerPoints++;
        returnVar = "Computer wins"
    }
    else if (playerChoice === rpsChoices[1] && computerChoice === rpsChoices[2]) {
        computerPoints++;
        returnVar = "Computer wins"
    }
    else if (playerChoice === rpsChoices[2] && computerChoice === rpsChoices[0]) {
        computerPoints++;
        returnVar = "Computer wins"
    }
    else if (playerChoice === rpsChoices[0] && computerChoice === rpsChoices[2]) {
        playerPoints++;
        returnVar = "Player wins"
    }
    else if (playerChoice === rpsChoices[2] && computerChoice === rpsChoices[1]) {
        playerPoints++;
        returnVar = "Player wins"
    }
    else if (playerChoice === rpsChoices[1] && computerChoice === rpsChoices[0]) {
        playerPoints++;
        returnVar = "Player wins"
    }
    else if (playerChoice == computerChoice){
        returnVar = "Draw"
    }

    return returnVar
}
function game() {
    let choice = null; 
    const container = document.getElementById("contain");

    const paraScore = document.createElement('p')
    paraScore.style.cssText = 'display: flex; justify-content: center; margin-top: 50px; font-size: 50px;'
    paraScore.textContent = "Computer: 0 Player: 0";

    const paraRound = document.createElement('p')
    paraRound.style.cssText = 'display: flex; justify-content: center; margin-top: 50px; font-size: 50px;'

    const paraCPUChoice = document.createElement('p')
    paraCPUChoice.style.cssText = 'display: flex; justify-content: center; font-size: 50px;'

    container.appendChild(paraScore)
    container.appendChild(paraCPUChoice)
    container.appendChild(paraRound)


    

    
    document.addEventListener("DOMContentLoaded", function () {
        const buttonR = document.getElementById("rock");
        const buttonP = document.getElementById("paper");
        const buttonS = document.getElementById("scissors");

        buttonR.addEventListener("click", function () {
            choice = "rock";
            playRound();
        });

        buttonP.addEventListener("click", function () {
            choice = "paper";
            playRound();
        });

        buttonS.addEventListener("click", function () {
            choice = "scissors";
            playRound();
        });
    });

    function playRound() {
        let computerChoice = getComputerChoice();
        let result = getWinner(choice, computerChoice);

        paraScore.textContent = "Computer: " + computerPoints + " Player: " + playerPoints 
        paraRound.textContent = result
        paraCPUChoice.textContent = "Computer picked: " + computerChoice
    }

    }






game()