const rpsChoices = ["rock","paper","scissors"];
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
        
        returnVar = "Computer"
    }
    else if (playerChoice === rpsChoices[1] && computerChoice === rpsChoices[2]) {
        
        returnVar = "Computer"
    }
    else if (playerChoice === rpsChoices[2] && computerChoice === rpsChoices[0]) {
       
        returnVar = "Computer"
    }
    else if (playerChoice === rpsChoices[0] && computerChoice === rpsChoices[2]) {
        
        returnVar = "Player"
    }
    else if (playerChoice === rpsChoices[2] && computerChoice === rpsChoices[1]) {
        
        returnVar = "Player"
    }
    else if (playerChoice === rpsChoices[1] && computerChoice === rpsChoices[0]) {
       
        returnVar = "Player"
    }
    else if (playerChoice == computerChoice){
        returnVar = "Draw"
    }

    return returnVar
}
function game() {
    let choice = null; 
    const container = document.getElementById("container");

    const para = document.createElement('p')
    para.textContent = "Computer: 0 Player: 0";

    container.appendChild(para)

    

    
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


        if (result === "Player") {
            playerPoints++;
        } else if (result === "Computer") {
            computerPoints++;
        }

        para.textContent = "Computer: " + computerPoints + " Player: " + playerPoints
       
    }

    }






game()