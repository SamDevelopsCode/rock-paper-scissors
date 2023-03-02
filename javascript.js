/*
I opted for first to 3 points instead of 5 rounds for the game rules.
*/

let playerScore = 0;
let computerScore = 0;

function showGameIntro() {
    console.log("Welcome to another exciting game of ROCK, PAPER, SCISSORS! Follow the onscreen prompt to pick your weapon and good luck! First to 3 points")
}

function getComputerChoice() {

    let computerChoices = ["rock", "paper", "scissors"];    
    let randomNumber = Math.random() * 3;
    let computerChoice;

    if (randomNumber <= 1)
    {
        computerChoice = computerChoices[0];
    }
    else if (randomNumber >= 1.01 && randomNumber <= 2)
    {
        computerChoice = computerChoices[1];
    }
    else 
    {
        computerChoice = computerChoices[2];
    }

    return computerChoice;
}

function getPlayerChoice() {

    let playerChoiceRaw = prompt("Choose your weapon: rock, paper, or scissors. Be sure to type carefully and then hit enter!");
    let playerChoice = playerChoiceRaw.toLowerCase();
    return playerChoice;
}

function playOneRound() {

    chooseRoundWinner(getPlayerChoice(), getComputerChoice());    
}

function chooseRoundWinner(playerChoice, computerChoice){

    if (playerChoice == "rock" && computerChoice == "rock")
    {
        console.log("DRAW!");
        showScores();
        return;
    }
    else if (playerChoice == "rock" && computerChoice == "paper")
    {
        computerScore++;
        console.log("Point => Computer");
        showScores();
        return;
    }
    else if (playerChoice == "rock" && computerChoice == "scissors")
    {
        playerScore++;
        console.log("Point => Player");
        showScores();
        return;
    }
    else if (playerChoice == "paper" && computerChoice == "paper")
    {
        console.log("DRAW!");
        showScores();
        return;
    }
    else if (playerChoice == "paper" && computerChoice == "scissors")
    {
        computerScore++;
        console.log("Point => Computer");
        showScores();
        return;
    }
    else if (playerChoice == "paper" && computerChoice == "rock")
    {
        playerScore++;
        console.log("Point => Player");
        showScores();
        return;
    }
    else if (playerChoice == "scissors" && computerChoice == "scissors")
    {
        console.log("DRAW!");
        showScores();
        return;
    }
    else if (playerChoice == "scissors" && computerChoice == "rock")
    {
        computerScore++;
        console.log("Point => Computer");
        showScores();
        return;
    }
    else if (playerChoice == "scissors" && computerChoice == "paper")
    {
        playerScore++;
        console.log("Point => Player");
        showScores();
        return;
    }   
    else
    {
        console.log("Check your spelling! You chose an invalid weapon. Try again.");
        return;
    }
}

function showScores(){
    console.log("Player: " + playerScore);
    console.log("Computer: " + computerScore);
}

function playGame() {

    showGameIntro();
    while (playerScore < 3 && computerScore < 3)
    {
        playOneRound();
        if (playerScore == 3)
        {
            console.log("WINNER => Player");
        }
        else if (computerScore == 3)
        {
            console.log("WINNER => Computer");
        }
    }
}

playGame();

