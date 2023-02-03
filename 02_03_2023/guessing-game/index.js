

// Generate a Random Number between 1 and 100

function generateNumber() {
    // Math.random is 0 -> .99999999
    return Math.floor((Math.random() * 100) + 1)
}

function checkGuess(guess, answer) {

    if (guess === answer){
        // correct answer
        return 'Correct'
    } else if (guess < answer) {
        return 'Too Low'
    } else {
        return 'Too High'
    }
}


let button = document.querySelector('button')

button.addEventListener('click', function() {

    if (numberOfGuesses < 5) {
    // Grab the input field value
        let input = document.getElementById('guess')
        let guess = parseInt(input.value)
        // check that value against the randomNumber
        let result = checkGuess(guess, randomNumber)
        // Display the result to the user
        let resultsSection = document.getElementById('result')
        resultsSection.innerText = result
        console.log(result)

        numberOfGuesses++
    }

})


function startNewGame() {
    numberOfGuesses = 0
    randomNumber = generateNumber()
}


startNewGame()