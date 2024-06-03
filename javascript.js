// Rock Paper Scissors

// I'm doing this in my own way as I'm coming from Python and wish to 
// test how things are handled in comparison. I haven't followed 
// The Odin Project's exact insructions because of this. It shouldn't 
// change too much though. 

// Tie: For now, I'm counting a tie as a failed round - no points are given
// to either the player or computer, and the round doesn't move forward. 

const choices = ["rock", "paper", "scissors"];


// Computer Choice
function computerChoice(options) {
    if (Array.isArray(options)) {
        return options[Math.floor(Math.random() * options.length)]
    }
}


// User Choice
function playerChoice (options) {
    let user = prompt("Rock, Paper, Scissors: ")
    if (!options.includes(user.toLowerCase())) {
        console.log("Error: uoe");
        return 'uoe';
        // console.log('You must select rock, paper, or scissors')
        
    } else {
        return user.toLowerCase();
    }
}

// Compare 
function playRound(player, computer) {
    let p = player
    let c = computer
    switch (p) {
        case 'rock':
            switch (c) {
                case 'paper':
                    return 'lose';
                case 'rock':
                    return 'tie';
                case 'scissors':
                    return 'win';
            }
        case 'paper':
            switch (c) {
                case 'scissors':
                    return 'lose';
                case 'paper':
                    return 'tie';
                case 'rock':
                    return 'win';
            }
        case 'scissors':
            switch (c) {
                case 'rock':
                    return 'lose';
                case 'scissors':
                    return 'tie'
                case 'paper':
                    return 'win';
            }
    }
}


// Display Results
function results(player, computer) {
    if (player > computer) {
        console.log("You WIN!");
    } else if (player < computer) {
        console.log("You LOSE!");
    } else {
        console.log("Error: Results");
    }
}


// PLAY GAME
function playGame() {
    let playerScore = Number(0);
    let computerScore = Number(0);
    let rounds = Number(3);
    let i = Number(0);
    while (i < rounds) {
        let p = playerChoice(choices);
        let c = computerChoice(choices);
        let result = playRound(p, c)
            if (result === 'tie') {
                console.log("It is a tie.");
            } else if (result === 'lose') {
                console.log("You lose this round. Computer +1");
                computerScore++;
                i++;
            } else if (result === "win") {
                console.log("You win this round. +1");
                playerScore++;
                i++;
            }
        console.log(`Score: Player - ${playerScore} | Computer - ${computerScore}`)

        
    }
    results(playerScore, computerScore)
    

}

playGame()

