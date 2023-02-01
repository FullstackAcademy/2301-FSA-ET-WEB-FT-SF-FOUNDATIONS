
let sports = ['basketball', 'soccer', 'football', 'baseball']
// let body = document.getElementsByTagName('body')[0]

for (let i = 0; i < sports.length; i++) {
   let newHeader = createHeader(sports[i])
    document.body.appendChild(newHeader)
}

function createHeader(title) {
    let header = document.createElement('h1')
    header.innerText = title
    header.classList.add('sports')
    header.style.color = 'gold'
    header.style.textTransform = 'uppercase'

    return header
}


function setTDStyles() {
    let element = document.getElementById('myElement')
    // element.style.backgroundColor = 'blue'
    element.classList.add('blue')
}






// setTDStyles()