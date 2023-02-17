
class AparmentList {
    constructor() {
        this.apartments = []
    }

    addApartment(apt) {
        this.apartments.push(apt)
    }

    removeApartment(apt) {
        // find the index based on the address of my apt

        let index = this.apartments.findIndex(element => element.address == apt.address)

        // remove it
        this.apartments.splice(index, 1)
    }

    render() {
        // makes a card for EACH apt in the list

        let allAptRenders = this.apartments.map((apt) => apt.render())

        // grab the section from the html
        let listSection = document.querySelector('.apartment-list')

        listSection.innerHTML = '' // removes any previous html in the section
        // another way to do this is with replaceChild instead of appendChild

        // loop through the allAptRenders and append each one to the listSection

        for( let i = 0; i < allAptRenders.length; i++) {
            let card = allAptRenders[i]
            listSection.append(card)

            let removeBtns = document.querySelectorAll('.remove-btn') // grab ALL "remove" btns
            console.log(removeBtns)
            
            let lastBtn = removeBtns[removeBtns.length-1]

            lastBtn.addEventListener('click', () => {
                console.log('Remove Btn!')

                this.removeApartment(this.apartments[i]) 
                // could refactor (Re-code) and use index to remove
                // that might be better

                this.render()
            })
        }

        // this.apartments.forEach((apt) => {
        //     let card = apt.render()
        //     listSection.append(card)
        // })

        // let removeBtns = [...document.getElementsByClassName('remove-btn')] // spread operator is converting to an array
        // removeBtns.forEach(btn => btn.addEventListener('click', (e) => {
        //     console.log(e.target)
        //     console.log(this)
        // }))

        return allAptRenders
    }

}