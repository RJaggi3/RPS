const rpsChoices = ["rock","paper","scissors"];
let computerPoints = 0
let playerPoints = 0 

function getComputerChoice(){
    const index = Math.floor(Math.random()*rpsChoices.length);
    const randomChoice = rpsChoices[index];

    return randomChoice;
}

function getPlayerChoice(){
    let playerChoice = prompt("Pick Rock, Paper or Scissors: ");
    return playerChoice.toLowerCase();
}

function getWinner(playerChoice,computerChoice){
    let returnVar = "Draw"
    if (playerChoice === rpsChoices[0] && computerChoice === rpsChoices[1]) {
        computerPoints += 1
        returnVar = "Computer wins"
    }
    else if (playerChoice === rpsChoices[1] && computerChoice === rpsChoices[2]) {
        computerPoints += 1
        returnVar = "Computer wins"
    }
    else if (playerChoice === rpsChoices[2] && computerChoice === rpsChoices[0]) {
        computerPoints += 1
        returnVar = "Computer wins"
    }
    else if (playerChoice === rpsChoices[0] && computerChoice === rpsChoices[2]) {
        playerPoints += 1
        returnVar = "Player wins"
    }
    else if (playerChoice === rpsChoices[2] && computerChoice === rpsChoices[1]) {
        playerPoints += 1
        returnVar = "Player wins"
    }
    else if (playerChoice === rpsChoices[1] && computerChoice === rpsChoices[0]) {
        playerPoints += 1
        returnVar = "Player wins"
    }

    return returnVar
}

function game(){
    for (x =0; x<6 ; x++){
        let playerChoice = getPlayerChoice()
        let computerChoice = getComputerChoice()

        console.log(getWinner(playerChoice,computerChoice))
        console.log("Computer: " + computerPoints + " Player: " + playerPoints)
    }
}

game()