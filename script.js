let computerChoice,
    humanChoice,
    humanScore = 0,
    computerScore = 0,
    roundAmount;

function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3);

    if(randomNumber == 0) {
        computerChoice = "Rock";
    }
    else {
        if(randomNumber == 1) {
            computerChoice = "Paper";
        }
        else {
            if(randomNumber == 2) {
                computerChoice = "Scissors";
            }
            else {
                console.log("Error with getComputerChoice() function.");
            }
        }
    }

    return computerChoice;
}

function getHumanChoice() {
    humanInput = prompt("Your choice (Rock/Paper/Scissors):");
    humanChoice = humanInput.charAt(0).toUpperCase() + humanInput.slice(1).toLowerCase();

    while(humanChoice !== "Rock" && humanChoice !== "Paper" && humanChoice !== "Scissors") {
        humanInput = prompt("Inrecognizable choice! Choose again (Rock/Paper/Scissors):");
        humanChoice = humanInput.charAt(0).toUpperCase() + humanInput.slice(1).toLowerCase();
    }

    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    console.log("Computer chose " + computerChoice);
    console.log("You chose " + computerChoice);
    if(humanChoice == "Rock") {
                switch(computerChoice) {
            case "Rock":
                console.log("Round draw!");
                break;
            case "Paper":
                console.log("You lose! " + computerChoice + " beats " + humanChoice);
                computerScore++;
                break;
            case "Scissors":
                console.log("You win! " + humanChoice + " beats " + computerChoice);
                humanScore++;
                break;
        }
    }
    else {
        if(humanChoice == "Paper") {
            switch(computerChoice) {
                case "Rock":
                    console.log("You win! " + humanChoice + " beats " + computerChoice);
                    humanScore++;
                    break;
                case "Paper":
                    console.log("Round draw!");
                    break;
                case "Scissors":
                    console.log("You lose! " + computerChoice + " beats " + humanChoice);
                    computerScore++;
                    break;
            }
        }
        else {
            if(humanChoice == "Scissors") {
                switch(computerChoice) {
                    case "Rock":
                        console.log("You lose! " + computerChoice + " beats " + humanChoice);
                        computerScore++;
                        break;
                    case "Paper":
                        console.log("You win! " + humanChoice + " beats " + computerChoice);
                        humanScore++;
                        break;
                    case "Scissors":
                        console.log("Round draw!");
                        break;
                }
            }
            else {
                console.log("Error with playRound() function.");
            }
        }
    }
    console.log("=");
    console.log("CURRENT SCORE:");
    console.log("Your score: " + humanScore + " | Computer score: " + computerScore);
    console.log("");

    return humanScore, computerScore;
}

function getWinner() {
    if(humanScore > computerScore) {
        console.log("You are the winner!");
    }
    else {
        if(humanScore == computerScore) {
            console.log("Draw!");
        }
        else {
            if(humanScore < computerScore) {
                console.log("You are the loser! The computer has won.");
            }
            else {
                console.log("Error with getWinner() function.");
            }
        }
    }
}

function playGame() {
    alert("Press F12 to see Console");
    for(i = 1; i <= 5; i++) {
        console.log("=== ROUND " + i + " ===");
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    getWinner();
}

playGame();
