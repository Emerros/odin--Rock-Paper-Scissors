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
        console.log("Error: uoe") 
        return 'uoe'
        // console.log('You must select rock, paper, or scissors')
        
    } else {
        return user.toLowerCase()
    }
}

let userAnswer = userChoice(choices)


// Compare Options

function compareOptions(player, computer) {
    let p = player
    let c = computer
    switch (p) {
        case 'rock':
            switch (c) {
                case 'paper':
                    console.log('You lose.');
                    break;
                case 'rock':
                    console.log('Tie.');
                    break;
                case 'scissors':
                    break;
            }
        case 'paper':
            switch (c) {
                case 'scissors':
                    console.log('You lose.');
                    break;
                case 'paper':
                    console.log('Tie');
                    break;
                case 'rock':
                    console.log('You win.');
                    break;
            }
        case 'scissors':
            switch (c) {
                case 'rock':
                    console.log('You lose')
                    break;
                case 'scissors':
                    console.log('Tie.')
                    break
                case 'paper':
                    console.log('You win.')
                    break
            }
        
}






// Display Results