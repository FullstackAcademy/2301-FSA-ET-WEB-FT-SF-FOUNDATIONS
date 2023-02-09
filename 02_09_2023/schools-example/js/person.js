

class Person {
    constructor(name) { //skip contact info
        this.name = name
        // We can add contact info in futre
    }

    render() {

        // creating a "card" for the person
        let card = document.createElement('section')
        card.classList.add('card')

        // Add the person's info to the card
        let namePlate = document.createElement('h3')
        namePlate.innerText = this.name


        // Append to the card
        card.append(namePlate)

        return card
    }
}


class Student extends Person {
    constructor(name) {
        super(name)

        this.grades = []
        this.attendance = []
    }

    getGrade() {
        if (!this.grades.length) {
            return 'No Grades Yet'
        }
        let total = 0

        for (let i = 0; i < this.grades.length; i++) {
            total += this.grades[i]
        }

        return total / this.grades.length
    }

    render() {
        // start by rendering the PERSON parts
        let card = super.render()

        // Add the STUDENT SPECIFICS
        let grades = this.getGrade()
        let grade = document.createElement('p')
        grade.innerText = `Grade: ${grades}`

        card.append(grade)

        return card

    }
}

class Staff extends Person {
    constructor(name, role) {
        super(name)

        this.role = role
        this.startDate = new Date() // set it to whenever this instance of Staff is created
    }

    render() {
        // start by rendering the PERSON parts
        let card = super.render()

        let role = document.createElement('p')
        role.innerText = `Role: ${this.role}`

        let start = document.createElement('p')
        start.innerText = `Been here since: ${this.startDate}`

        card.append(role)
        card.append(start)

        return card
    }
}