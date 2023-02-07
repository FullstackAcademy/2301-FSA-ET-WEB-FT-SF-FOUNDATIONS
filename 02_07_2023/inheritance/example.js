// Class inheritance

class Vehicle {
    constructor(type, motor, model, make, year, cost) {
        this.type = type
        this.motor = motor
        this.model = model
        this.make = make
        this.year = year
        this.cost = cost
    }

    // shared by both CAR and AIRPLANE
    displayVehicle() {
        console.log(`Type of Vehicle: ${this.type}`)
        console.log(`Model of Vehicle: ${this.model}`)
        console.log(`Make of Vehicle: ${this.make}`)
        console.log(`Cost of Vehicle: ${this.cost}`)
    }

    // This function will be shared with child classes
    turnOnEngine(sound = 'put-put-put') {
        console.log(`***  ${sound} ***`)
    }
}

// let myCar = new Vehicle('car', 'v8', 'ford', 'bronco', 2023, 50000)

class Car extends Vehicle {
    constructor(motor, model, make, year, cost, color) {
        // All the things the parent needs to know
        super('car', motor, model, make, year, cost)
       
        // You can add anything specific to Car like normal
        this.color = color
    }

    // THESE FUNCTIONS ARE CAR ONLY
    changeColor(color) {
        this.color = color
    }

    showOffColor() {
        console.log(`Look at my awesome ${this.color} ${this.make}`)
    }
    // -----------------

    // Overwritting parent function
    turnOnEngine() {
        super.turnOnEngine('VROOM VROOM')
    }
}

class Airplane extends Vehicle {
    constructor(motor, model, make, year, cost, tailNumber) {
        super('airplane', motor, model, make, year, cost)

        this.tailNumber = tailNumber
    }

    turnOnEngine() {
        // start with the default from the parent
        super.turnOnEngine()
        // do extra stuff

        super.turnOnEngine('WHOOSH!')

    }
}



let myCar = new Car('v8', 'ford', 'bronco', 2023, 50000, 'black')
let myPlane = new Airplane('jet-engine', 'SR-71', 'Blackbird', 1964, 5000000)


myCar.displayVehicle()

myCar.showOffColor()
myCar.turnOnEngine()
console.log('\n\n')
myPlane.displayVehicle()
myPlane.turnOnEngine()
