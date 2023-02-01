
document.body.style.height = '500vh' // large enough body to scroll
// Event Handling

let button = document.getElementById('btn')
button.style.position = 'absolute';
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


window.addEventListener('mousemove', function(event){
    // console.log(event)
    circle.style.top = `${event.y-25}px`
    circle.style.left = `${event.x-25}px`
    circle.style.zIndex = '-1'
})

let r=255, g=125, b=0, rdir=false, gdir=true; bdir=true
setInterval(() => {
    r = rdir ? r+5: r-5
    g = gdir ? g+5: g-5
    b = bdir ? b+5: b-5

    if (rdir && r >=255) {
        rdir = false
    } else if (!rdir && r <= 0) {
        rdir = true
    }
    if (gdir && g >=255) {
        gdir = false
    } else if (!gdir && g <= 0) {
        gdir = true
    }
    if (bdir && b >=255) {
        bdir = false
    } else if (!bdir && b <= 0) {
        bdir = true
    }
    
    circle.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}, 1)



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
let fontSize = 18
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp') {
        button.style.fontSize = `${fontSize++}px`;
        console.log('up')
    }
})

// rgb(255 255 255)
let red = 255, green = 255, blue = 255
document.addEventListener('scroll', function(event) {
    console.log('scrolling')
    red--;
    if (red <= 0) {
        red = 0
    }
    green--;
    if (green <= 0) {
        green = 0
    }
    blue--;
    if (blue <= 0) {
        blue = 0
    }

    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
})



document.getElementById('input').addEventListener('change', function(event) {
    console.log('Typing in the input field.')
})



// How you can get styles from elements
let par = document.querySelector('p')
let fontSizeFromCSS = window.getComputedStyle(par).fontSize
let fontSizeNumber = parseInt(fontSizeFromCSS)

console.log(fontSizeFromCSS) // 18px  (it's a string that includes the px)
console.log(fontSizeNumber) // 18 (parseInt removes the px and converts to number)