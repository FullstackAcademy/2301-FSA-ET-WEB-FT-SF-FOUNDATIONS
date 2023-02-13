

class Animal {
    constructor(name, type) {
        this.name = name
        this.type = type
    }

    render() {

        /* 
            GOAL of this function:  
            Create an html element with all the values we need

            we can use this element to add it to the actual page

            <section>
                <h1>Name</h1>
                <h2>Type<h2>
            </section>
        */

        const animal = document.createElement('section')
        animal.classList.add('animal')

        const name = document.createElement('h1')
        name.innerText = this.name
        const type = document.createElement('h2')
        type.innerText = this.type

        animal.append(name)
        animal.append(type)

        return animal
    }
}