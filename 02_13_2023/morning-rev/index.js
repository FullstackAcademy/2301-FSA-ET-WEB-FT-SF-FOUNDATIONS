

let dog = new Animal('Spike', 'dog')

let myAnimal = dog.render()
// ADD animal to the page
document.querySelector('main').append(myAnimal)



let arrOfProps = [
    ['prop1', 'prop2', 'prop3','prop4'],
    ['prop1', 'prop2', 'prop3','prop4'],
    ['prop1', 'prop2', 'prop3','prop4'],
    ['prop1', 'prop2', 'prop3','prop4'],
]

let myObjArray = [
    {},
    {},
    {},
    {}
]

let exampleArr = ['prop1', 'prop2', 'prop3','prop4']
let keysArray = ['one', 'two', 'three', 'four'] // Object.keys()
let exampleObj = {}

for (let i = 0; i < keysArray.length; i++) {
    exampleObj[keysArray[i]] = exampleArr[i]

    // obj[ 'one' ] = 'prop1'
   
}

console.log(exampleObj)

[  { name: 'Travis'}, { name: 'Misael'} ]