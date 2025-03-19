// let humanScore = 0
// let computerScore = 0

// function getComputerChoice() {
//     let number = Math.floor(Math.random() * 3);
//     if (number === 2) {
//         return "rock"
//     } else if (number === 1) {
//         return "paper"
//     } else {
//         return "scissors"
//     }
// };

// function getHumanChoice() {
//     return prompt("You are playing with computer rock paper scissors, please enter your choice and have fun!").toLowerCase();
// }


// function playGame() {   
//     for (let i = 0; i < 5; i++) { 
//         let humanChoice = getHumanChoice();
//         let computerChoice = getComputerChoice();

//         if (humanChoice === computerChoice) {
//             console.log (`It's a draw ! You both chose a ${humanChoice}`)
//             }
//         else if (
//             (humanChoice === "rock" && computerChoice === "paper") || 
//             (humanChoice === "paper" && computerChoice === "scissors") || 
//             (humanChoice === "scissors" && computerChoice === "rock")
//         ) {
//             computerScore++
//             console.log(`You lose, ${computerChoice} beats ${humanChoice}`)
//             } 
//         else {
//             humanScore++ 
//             console.log(`You won, ${humanChoice} beats ${computerChoice}`)
//             }
//     console.log (`Score: You ${humanScore} - ${computerScore} Computer`)
//     }   
    
//     console.log("Game Over!");
//     if (humanScore > computerScore) {
//         console.log("Congratulations! You won the game!");
//     } else if (humanScore < computerScore) {
//         console.log("Computer wins! Better luck next time.");
//     } else {
//         console.log("It's a tie!");
//     }
// }

// playGame();

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------

let humanScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("button")
// querySelectorAll tworzy node list dlatego w zastosowaniu funkcyjnym trzeba pamietac aby zastosowac petle.
const results = document.querySelector("#results")


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
     if (humanSelect === computerChoice) {
        results.innerHTML += `<br>You both chose ${humanSelect} it's a tie!<br>`
     } else if (humanSelect === "rock" && computerChoice === "scissors" || humanSelect === "paper" && computerChoice === "rock" || humanSelect === "scissors" && computerChoice === "paper") {
        humanScore++
        results.innerHTML += `<br>You win! ${humanSelect} beats ${computerChoice}.<br>`
    } else {
        computerScore++
        results.innerHTML += `<br>You lose! ${computerChoice} beats ${humanSelect}.<br>`
    }
    humanScore;
    computerScore;
    results.innerHTML += `Your score: ${humanScore}<br>`;
    results.innerHTML += `Your score: ${computerScore}<br>`;
    if (humanScore === 5 || computerScore === 5) {
        // Zakończenie gry
        results.innerHTML += `<br>The game has ended! One of the players has scored 5 points! Congratulations to the winner and thank you for playing.<br>`;
        
        // Ukryj przyciski i pokaż przycisk resetu
        buttons.forEach(button => button.style.display = "none"); // Ukryj wszystkie przyciski
        const resetButton = document.createElement("button");
        resetButton.textContent = "Reset";
        resetButton.classList.add("reset");
        results.appendChild(resetButton); // Dodaj przycisk resetu do wyników

        // Obsługa resetu
        resetButton.addEventListener("click", () => {
            humanScore = 0;
            computerScore = 0;
            results.innerHTML = ''; // Wyczyść wyniki

            // Przywróć przyciski
            buttons.forEach(button => button.style.display = "inline-block"); // Pokaż przyciski
            resetButton.remove(); // Usuń przycisk resetu
        });
    }
}
  
// Musimy dodac tutaj .forEach z racji tego ze querySelectorAll zwraca nam node list na ktorej nie mozna normalnie pracowac (pomiedzy array a stringiem) zatem uzywamy iterowania)

buttons.forEach(button => {
    button.addEventListener("click", () => {
        playRound(button.textContent, getComputerChoice())
    });
});


// PlayGame

// function playGame () {
//     for (let i = 0; i <= 4; i++) {
//     playRound(getHumanChoice(), getComputerChoice());
//     }
// };

// playGame();