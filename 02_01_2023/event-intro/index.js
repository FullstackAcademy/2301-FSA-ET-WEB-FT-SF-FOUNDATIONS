

// Event Handling

let button = document.getElementById('btn')

button.addEventListener('click', function(event) {
    console.log("I've been clicked!", event)
    // Anything you want to do goes here
    document.body.style.backgroundColor = 'lightblue'

    let p = document.createElement('p')
    p.innerText = 'Hello, I am new.'
    document.body.appendChild(p)
})
// annonymous function

let circle = document.createElement('div')
circle.style.height = '50px'
circle.style.width = '50px'
circle.style.borderRadius = '50%'
circle.style.backgroundColor='red';
circle.style.position='absolute';

document.body.appendChild(circle)



// document.body.addEventListener('mousemove', function(event){
//     // console.log(event)
//     circle.style.top = `${event.y-25}px`
//     circle.style.left = `${event.x-25}px`
// })


/*
Arrow Functions
    button.addEventListener('click', () => {
        console.log("I've been clicked!")
    })
*/


/*

- Click Event (mouse click)
- Change Event (Text boxes update)
- Scroll Events (Anytime you scroll)
- KeyPress Events (Anytime a key is pressed) 

*/