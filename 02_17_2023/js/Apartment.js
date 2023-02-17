
class Apartment {
    /*
        Apartment class needs some values like price and room count
        - Amenities are optional and default to an empty array
    */
    constructor(img, price, rooms, bathrooms, sqft, address, amenities = []) {
        this.img = img || 'https://t4.ftcdn.net/jpg/01/23/68/71/360_F_123687102_3rPakqjpruQ7hV0yImMYcSYBXGkTCwE5.jpg'
        this.price = price
        this.rooms = rooms
        this.bathrooms = bathrooms
        this.sqft = sqft
        this.address = address
        this.amenities = amenities // we can add amenities later
    }

    /**
     * Converts Aparment properties to HTML card
     * 
     * <section class='card'>
     *  < img src=.../>
     *  <h3>Price: </h2>
     *  <h3>rooms: </h3>
     *  <h3>bathrooms: </h3>
     *  <h3>sqft: </h3>
     * </section>
     */
    render() {

        let card = document.createElement('section')
        card.classList.add('card')

        let image = document.createElement('img')
        image.src = this.img

        let price = document.createElement('h2')
        price.innerText = `$ ${this.price}`

        let rooms = document.createElement('h3')
        rooms.innerText = `${this.rooms} Rooms`
        
        let baths = document.createElement('h3')
        baths.innerText = `${this.bathrooms} baths`
        
        let sqft = document.createElement('h3')
        sqft.innerText = `${this.sqft} sqft`
        
        let address = document.createElement('p')
        address.innerText = this.address


        let removeBtn = document.createElement('button')
        removeBtn.classList.add('remove-btn')
        removeBtn.innerText = 'X'

        // Also add Amenities later

        let features = document.createElement('section')
        features.classList.add('features')

        features.append(rooms)
        features.append(baths)
        features.append(sqft)

        card.append(image)
        card.append(price)
        card.append(features)
        card.append(address)
        card.append(removeBtn)

        return card
    } // end of the render function

} // end of class

