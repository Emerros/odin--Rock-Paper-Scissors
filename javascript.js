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

console.log(userAnswer)

// Compare Results



// Display Results