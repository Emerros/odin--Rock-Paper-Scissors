// Rock Paper Scissors

const choices = ["rock", "paper", "scissors"];


// Computer Choice
function compChoice(options) {
    if (Array.isArray(options)) {
        return options[Math.floor(Math.random() * options.length)]
    }
}

// let comp = compChoice(choices)

// console.log(comp)

// User Choice
function userChoice (options) {
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
function compareChoices(player, computer) {
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



// PLAY GAME
function playGame() {
    let userScore = Number(0);
    let compScore = Number(0);
    let rounds = Number(3);
    let i = Number(0);
    while (i < rounds) {
        let p = userChoice(choices);
        let c = compChoice(choices);
        let result = compareChoices(p, c)
            if (result === 'tie') {
                console.log("It is a tie.");
            } else if (result === 'lose') {
                console.log("You lose this round. Computer +1");
                compScore++;
            } else if (result === "win") {
                console.log("You win this round. +1");
                userScore++;
            }
        i++
    }

}

playGame()

