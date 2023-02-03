
let a, b, answer


function generateNumbers(){
    a = Math.floor(Math.random() * 10) // 0 - 9
    b = Math.floor(Math.random() * 10) // 0 - 9

    answer = a * b

    document.querySelector('.a').innerText = a
    document.querySelector('.b').innerText = b

    console.log(a, b, answer)
}

generateNumbers()

function checkAnswer() {

    let userAnswer = parseInt(document.getElementById('answer').value)
    console.log(typeof userAnswer)

    let p = document.createElement('p')
    if (userAnswer === answer) {
        console.log('Correct')
        p.innerText = 'Correct'
    } else {
        console.log('Incorrect')
        p.innerText = 'Incorrect'
    }

    document.body.appendChild(p)
}


let button = document.querySelector('button')

button.addEventListener('click', checkAnswer)