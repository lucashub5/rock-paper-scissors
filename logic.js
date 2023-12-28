const choice = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choice.length);
    return choice[randomIndex];
}

function getPlayerChoice() {
    return "rock"; // Por ahora, simplemente devolvemos "rock" como ejemplo.
}

function playRound(playerSelection, computerSelection) {
    console.log(`Player chose ${playerSelection}`);
    console.log(`Computer chose ${computerSelection}`);

    if (playerSelection === computerSelection) {
        console.log("It's a tie!");
    } else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        console.log("You win!");
    } else {
        console.log("You lose!");
    }
}

const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();

playRound(playerSelection, computerSelection);
