// Going to use the classes to make content on the page
// console.log('Hello') // check that you are connected to html

let myListing = new Apartment( 'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg', 1, 3, 2.5, 2000, '1 Cool Dr.')
let myListing2 = new Apartment( undefined, 1000000, 3, 2.5, 2000, '2 Cool Dr.')
let myListing3 = new Apartment( 'https://images.familyhomeplans.com/cdn-cgi/image/fit=scale-down,quality=85/plans/44207/44207-b600.jpg', 50000, 2, 2.5, 1500, '137 Cool Dr.')

let aptList = new AparmentList()
aptList.addApartment(myListing)
aptList.addApartment(myListing2)
aptList.addApartment(myListing3)

console.log(aptList)
aptList.removeApartment(myListing2)
console.log(aptList)

// Auto run the first render
aptList.render()


// adding New Apartments

let addBtn = document.getElementById('add-btn')

addBtn.addEventListener('click', () => {
    // 1st I need to grab all the values of the input fields
    let imgUrl = document.getElementById('apt-img').value

    // Three different ways to convert strings to numbers
    let price = parseInt(document.getElementById('apt-price').value)
    let rooms = Number(document.getElementById('apt-rooms').value)
    let baths = +document.getElementById('apt-baths').value
    let sqft = +document.getElementById('apt-sqft').value

    let address = document.getElementById('apt-address').value
    
    // Check my values and see if they exist or not
  
    if (!price) { // can also use isNan() function
        alert('Must enter a valid price')
        return // ends the function
    }

    // we can add more conditions for rooms/baths/sqft/address etc

    let newApartment = new Apartment(imgUrl, price,rooms, baths, sqft, address)
    aptList.addApartment(newApartment)


    aptList.render()
   
})


let removeBtns = [...document.getElementsByClassName('remove-btn')]
removeBtns.forEach(btn => btn.addEventListener('click', () => console.log('Remove')))