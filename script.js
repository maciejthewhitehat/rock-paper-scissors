let computerChoice,
    humanChoice,
    humanScore = 0,
    computerScore = 0,
    roundNumber = 0
    winnerMessage = "";

const currentHumanScore = document.querySelector("#currentHumanScore");
const currentComputerScore = document.querySelector("#currentComputerScore");
const currentRoundNumber = document.querySelector(".roundNumber");

const rockButton = document.querySelector(".rockButton");
rockButton.addEventListener("click", () => {
    humanChoice = "Rock";

    const cloneHumanButton = rockButton.cloneNode(true);
    
    playRound(humanChoice, cloneHumanButton);
});

const paperButton = document.querySelector(".paperButton");
paperButton.addEventListener("click", () => {
    humanChoice = "Paper";

    const cloneHumanButton = paperButton.cloneNode(true);

    playRound(humanChoice, cloneHumanButton);
});

const scissorsButton = document.querySelector(".scissorsButton");
scissorsButton.addEventListener("click", () => {
    humanChoice = "Scissors";

    const cloneHumanButton = scissorsButton.cloneNode(true);

    playRound(humanChoice, cloneHumanButton);
});

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    let cloneComputerButton;

    if (randomNumber == 0) {
        computerChoice = "Rock";
        cloneComputerButton = rockButton.cloneNode(true);
    } else if (randomNumber == 1) {
        computerChoice = "Paper";
        cloneComputerButton = paperButton.cloneNode(true);
    } else if (randomNumber == 2) {
        computerChoice = "Scissors";
        cloneComputerButton = scissorsButton.cloneNode(true);
    } else {
        console.log("ERROR");
    }

    return { computerChoice, cloneComputerButton };
}

function playRound(humanChoice, cloneHumanButton) {
    const {computerChoice, cloneComputerButton} = getComputerChoice();

    document.querySelector(".humanArena").innerHTML = ""; // remove previous choices
    document.querySelector(".computerArena").innerHTML = "";
    cloneHumanButton.classList.remove("humanButton");
    document.querySelector(".humanArena").appendChild(cloneHumanButton); // copy current choice
    document.querySelector(".computerArena").appendChild(cloneComputerButton);

    if (humanChoice == "Rock") {
        switch (computerChoice) {
            case "Rock":
                break;
            case "Paper":
                computerScore++;
                break;
            case "Scissors":
                humanScore++;
                currentHumanScore.textContent = humanScore;
                break;
        }
    } else if (humanChoice == "Paper") {
        switch (computerChoice) {
            case "Rock":
                humanScore++;
                break;
            case "Paper":
                break;
            case "Scissors":
                computerScore++;
                break;
        }
    } else if (humanChoice == "Scissors") {
        switch (computerChoice) {
            case "Rock":
                computerScore++;
                break;
            case "Paper":
                humanScore++;
                break;
            case "Scissors":
                console.log("Round draw!");
                break;
        }
    } else {
        console.log("Error with playRound() function.");
    }
    roundNumber++;

    currentHumanScore.textContent = humanScore;
    currentComputerScore.textContent = computerScore;
    currentRoundNumber.textContent = "Round " + roundNumber;

    if (humanScore == 5 || computerScore == 5) {
        getWinner();
        resetGame();
    }

    return {humanScore, computerScore};
}

function resetGame() {
    computerScore = 0;
    humanScore = 0;
    roundNumber = 0;
    currentHumanScore.textContent = humanScore;
    currentComputerScore.textContent = computerScore;
    currentRoundNumber.textContent = "Round " + roundNumber;
}

function getWinner() {
    if (humanScore > computerScore) {
        winnerMessage = "You won!";
    } else if (humanScore < computerScore) {
        winnerMessage = "You lost!";
    } else {
        winnerMessage = "ERROR. Something went wrong :(";
    }

    message.textContent = winnerMessage;
    overlay.classList.remove('hidden');
    document.querySelector('.gameWindow').classList.add('blur');
    
    playAgainButton.addEventListener('click', () => {
        overlay.classList.add('hidden');
        document.querySelector('.gameWindow').classList.remove('blur');
        resetGame();
    });
}
