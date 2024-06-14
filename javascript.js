// Rock Paper Scissors

let playerScore = Number(0);
let computerScore = Number(0);

const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")

function computerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() *  choices.length)]
}

function playRound(player, computer) {
    switch (true) {
        case player === computer:
            return 'tie';
        case player === 'rock' && computer === 'scissors':
        case player === 'paper' && computer === 'rock':
        case player === 'scissors' && computer === 'paper':
            scoreUpdate('win')
            return 'win';
        default:
            scoreUpdate('lose')
            return 'lose';
    }

}

function imgUpdate(playerSelection, computerSelection) {
    let playerImage = document.querySelector('.player-choice');
    let computerImage = document.querySelector('.comp-choice');
    const playerText = document.querySelector('.player-text');
    const computerText = document.querySelector('.comp-text');
    let img = document.createElement('img');
    let img2 = document.createElement('img');

    img.src = `./pictures/${playerSelection}.png`;
    img.alt = `A picture of a ${playerSelection}.`;
    playerImage.replaceChild(img, playerText);

    img2.src = `./pictures/${computerSelection}.png`;
    img2.alt = `A picture of a ${computerSelection}`;
    computerImage.replaceChild(img2, computerText);

}

function statusUpdate(stat) {

}

function scoreUpdate(s) {
    if (s === 'win') {
        playerScore++;
        document.querySelector('.player-points').innerHTML = playerScore
    } else if (s === 'lose') {
        computerScore++;
        document.querySelector('.computer-points').innerHTML = computerScore

    }
}

// PLAY GAME
function playGame() {
    let player_choice = String(this.className.split(' ')[1])
    let computer_choice = computerChoice()
    imgUpdate(player_choice, computer_choice)

    const result = playRound(player_choice, computer_choice);
    console.log(`player: ${player_choice} | computer: ${computer_choice}`);
    console.log(result)
}   

rock.addEventListener('click', playGame);
paper.addEventListener('click', playGame);
scissors.addEventListener('click', playGame);


