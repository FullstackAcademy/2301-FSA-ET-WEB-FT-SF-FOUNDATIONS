
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
            let lastBtn = removeBtns[removeBtns.length-1]

            console.log('Looping: ', i)
            console.log(removeBtns)
            // only adding the event listener to the most recent button as Im looping
            lastBtn.addEventListener('click', () => {
                console.log('Remove Btn!')

                this.removeApartment(this.apartments[i]) 
                // could refactor (Re-code) and use index to remove
                // that might be better

                this.render()
            })
        }

        return allAptRenders
    }

}