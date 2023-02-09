

class Classroom {
    constructor(name) {

        this.name = name
        this.maxCapacity = 100
        this.people = []
    }

    addPersonToClass(person) {
        this.people.push(person)
    }

    render() {

        // classroom section
        let classroomSection = document.createElement('section')
        classroomSection.classList.add('classroom') // gives us something to target in css

        let className = document.createElement('h2')
        className.innerText = this.name

        let personLabel = document.createElement('label')
        personLabel.innerText = 'People in class'

        // We need to render all the PEOPLE cards for the class

        let peopleSection = document.createElement('section')
        peopleSection.classList.add('people')

        for (let i = 0; i < this.people.length; i++) {
            let person = this.people[i]
            let card = person.render() // call the RENDER of that person and make a card for them

            peopleSection.append(card)
        }

        // ----------

        classroomSection.appendChild(className)
        classroomSection.appendChild(personLabel)
        classroomSection.appendChild(peopleSection)
        

        return classroomSection
    }
}
