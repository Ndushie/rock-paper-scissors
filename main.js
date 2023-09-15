// function to randomly generate the computer's choice

function getComputerChoice() {
    //Generate random numbers between 0 and 2
    const randomNumber = Math.floor(Math.random() * 3);

    // use random numbers to determine computer's choice
    if (randomNumber === 0) {
        return 'Rock';
    } else if (randomNumber === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}
 // function that plays a single round of the game
 function playRound (playerSelection, computerSelection) {
    // make playSelection and computerSelection case insensitive by converting it to lowercase and the 1st letter to upperCase
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase();


    //compare player and computer selection to determine winner
    //cases when player wins
    if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (
        (computerSelection === 'Rock' && playerSelection === 'Scissors') ||
        (computerSelection === 'Paper' && playerSelection === 'Rock') ||
        (computerSelection === 'Scissors' && playerSelection === 'Paper')
    ) {
        return `You lose ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection != 'Rock' || 'Paper' || 'Scissors') {
        return 'Invalid choice! You lose, Computer gets the score for this round';
    } else {
        return `It's a tie`;
    }
 }

 // function game to play a 5 round game and reports the winner and loser at the end
 function game() {
    let playerScore = 0;
    let computerScore = 0;

    // a loop that will repeat the game for only 5 rounds
    for (roundNumber = 1; roundNumber <= 5; roundNumber++) {
        // get the player's choice
        const playerSelection = prompt(`Choose your weapon for round ${roundNumber}`)

        // get and display computer's choice
        const computerChoice = getComputerChoice();
        console.log(`ComputerChoice: ${computerChoice}`);

        // get and display the round's result
        const roundResult = playRound(playerSelection, computerChoice);
        console.log(`Round ${roundNumber}: ${roundResult}`);

        //get the scores
        if (roundResult.includes('win')) {
            playerScore++;
        } else if (roundResult.includes('lose')) {
            computerScore++;
        }
        // display scores at the end of each round
        console.log(`PlayerScore: ${playerScore} | ComputerScore: ${computerScore}`);
    }
    // display grand total
    console.log(`Grand total = PlayerScore: ${playerScore} | ComputerSCore: ${computerScore}`);
    // determine the winner
    if (playerScore > computerScore) {
        console.log('You win the game');
    } else if (computerScore > playerScore) {
        console.log('You lose, Try Again');
    } else {
        console.log("It's a tie game!")
    }
 }
 // start the game
 game();