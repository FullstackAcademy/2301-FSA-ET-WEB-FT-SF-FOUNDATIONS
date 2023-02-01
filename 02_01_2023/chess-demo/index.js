






function generateChessBoard() {
    // Target the tbody (where Im putting the tr and tds)
    let tbody = document.querySelector('tbody')
    // tr - tablerow
    // td - cell in each row

    let color = false;

    for (let i = 0; i < 8; i++) {
        let row = document.createElement('tr')

        for (let k = 0; k < 8; k++) {
            let cell = document.createElement('td')

            if (color) {
                cell.style.backgroundColor = 'black'
            }

            row.appendChild(cell)

            color = !color
        }
        tbody.appendChild(row)
        color = !color
    }

}

generateChessBoard()