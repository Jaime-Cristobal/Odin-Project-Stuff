/**
 * Rock Paper Scissors Project from Odin Project Web Development 101 section.
 * https://www.theodinproject.com/courses/web-development-101/lessons/rock-paper-scissors?ref=lnav
 */

function computerPlay() {
    let selection = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * selection.length);

    return selection[randomIndex];
}


function playRPS(playerSelection, computerSelection) {
    let playerSelect = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

    let message = `You lose! ${computerSelection} beats ${playerSelect}`;
    
    if((playerSelect == "Rock" && computerSelection == "Scissors") || 
        (playerSelect == "Scissors" && computerSelection == "Paper") ||
        (playerSelect == "Paper" && computerSelection == "Rock")) 
    {
        message = `You win! ${playerSelect} beats ${computerSelection}`;
    }

    if(playerSelect == computerSelection || playerSelect == computerSelection || playerSelect == computerSelection) {
        message = `Tie! ${playerSelect} is equal to ${computerSelection}`;
    }
        
    return message;
}


function game() {
    for(let round = 0; round < 5; round++) {
        let playerSelection = prompt("Please enter selection (Rock, Paper, Scissors): ");

        console.log(playRPS(playerSelection, computerPlay()));
    }
}