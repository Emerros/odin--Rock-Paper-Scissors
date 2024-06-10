// Rock Paper Scissors


const choices = ["rock", "paper", "scissors"];

let playerScore = Number(0);
let computerScore = Number(0);

const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")


// Computer Choice
function computerChoice(options) {
    if (Array.isArray(options)) {
        return options[Math.floor(Math.random() * options.length)]
    }
}


// User Choice
// function playerChoice (options) {
//     let user = prompt("Rock, Paper, Scissors: ")
//     if (!options.includes(user.toLowerCase())) {
//         console.log("Error: uoe");
//         return 'uoe';
        
//     } else {
//         return user.toLowerCase();
//     }
// }

// There has to be a way to make this shorter 
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
        console.log("You Win!");
    } else if (player < computer) {
        console.log("You Lose!");
    } else {
        console.log("Error: Results");
    }
}

function scoreUpdate(r) {

}


// PLAY GAME
function playGame() {
    const result = playRound(this.className, computerChoice());
    console.log(typeof this.className)


}

rock.addEventListener('click', playGame);
paper.addEventListener('click', playGame);
scissors.addEventListener('click', playGame);


