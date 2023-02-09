

let fsa = new Classroom('2301-FSA')

let studentA = new Student('Bob')
let studentB = new Student('Jenny')

let staffA = new Staff('Travis', 'Instructor')
let staffB = new Staff('Kwame', 'Mentor')

fsa.addPersonToClass(studentA)
fsa.addPersonToClass(studentB)
fsa.addPersonToClass(staffA)
fsa.addPersonToClass(staffB)

console.log(fsa)

console.log(studentA.render())
console.log(staffA.render())

let classRoomContainer = document.querySelector('main.classes')
let fsaRender = fsa.render() // get the rendered section
classRoomContainer.append(fsaRender) // Adds to the ACTUAL page
