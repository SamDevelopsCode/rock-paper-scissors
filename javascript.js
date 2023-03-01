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

    console.log(playerChoice);
}
