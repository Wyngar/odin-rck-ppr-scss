
let humanScore = 0;
let computerScore = 0;

// Computer choice for RPS

function getComputerChoice () {
    const randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber === 0) {
        return "rock"
    } else if (randomNumber === 1) {
        return "scissors"
    } else {
        return "paper"
    }
}


// Player choice for RPS

function getHumanChoice () {
   return prompt("You are playing 'Rock' 'Paper' 'Scissors' type what are you choosing")
}


// PlayRound

function playRound (humanChoice, computerChoice) {
    const humanSelect = humanChoice.toLowerCase()
    console.log(humanSelect)
    console.log(computerChoice)
     if (humanSelect === computerChoice) {
        console.log(`You both chose ${humanSelect} it's a tie!`)
     } else if (humanSelect === "rock" && computerChoice === "scissors" || humanSelect === "paper" && computerChoice === "rock" || humanSelect === "scissors" && computerChoice === "paper") {
        console.log(`You win! ${humanSelect} beats ${computerChoice}.`)
        humanScore++
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanSelect}.`)
        computerScore++
    }
    humanScore;
    computerScore;
    console.log(`Your score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
}   

// PlayGame

function playGame () {
    for (let i = 0; i <= 4; i++) {
    playRound(getHumanChoice(), getComputerChoice());
    }
};

playGame();
