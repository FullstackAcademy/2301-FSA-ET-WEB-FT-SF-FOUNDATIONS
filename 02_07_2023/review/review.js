// Scope

// global scope

// document // from html and always global
// window

let x = 5

function first() {
    console.log(x) // can always read values at a higher level than the function you are in
}

// function scope

function parent() {
    let x = 5 
    let y = 7
    function one() {
        x *= 5
    }

    function two() {
       console.log(x)
    }

    one()
    two()

    // console.log(x+y)
}


// block scope

for (let i = 0; i < 100; i++){
    // do stuff

    // console.log(i)
}


for (let i = 0; i < 100; i++){
    // do stuff

    // console.log(i) // this i is not the same as the loop above
}


/*
    Classes
*/

// writing a class as a constructor function
function StudentFn(name, cohort) {
    this.name = name
    this.cohort = cohort
}

// this is the way to write using the class keywords
class Student {
    constructor(name, cohort) {
        this.name = name
        this.cohort = cohort
        this.grade = 0

        this.projects = []
    }

    greeting() {
        console.log('Hello,', this.name)
        // console.log(this) // WHAT IS THIS?!
    }

    capitalizeName() {
        let firstLetter = this.name[0].toUpperCase()
        let restOfName = this.name.slice(1).toLowerCase()

        this.name = firstLetter + restOfName
    }

    setGrade(number) {
        this.grade = number
    }
}

let bob = new Student('bob', '2301')

// console.log(bob)
// console.log(bob.name)

let jenny = new Student('jeNNy', '2301')

console.log(jenny)
// console.log(jenny.name)


// bob.greeting()

jenny.greeting() // name starts lowercase

jenny.capitalizeName() // updates name to capitalized

jenny.greeting() // now the name is capitalized

let studentList = []

studentList.push(bob)
studentList.push(jenny)

console.log(jenny.grade)

