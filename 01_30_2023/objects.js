/* What are objects in Javascript? */

let arr = ["a", "b","c"] // group these strings together

let people = [ ['Travis', 42, 'Instructor'], [1337, 'IronMan' , 'SuperHero'] ]

// need to remember indexes
// not repeatable * (Hard to read)
// inner array, elements need to be in a specific order
        // if I switch name and favNumber, it could cause issues in code

let travis = {
    "favNum": 3,
    "name": "Travis",
    "role": "Instructor"
} // we use {} for objects

// Objects have KEY:VALUE pairs (property:value)

console.log('The name is:', travis["name"])

let ironman = {
    "name": "Iron Man",
    "role": "Superhero",
}

people = [ travis, ironman ]

console.log(people)




// How to use Object Notation

console.log(travis['favNum']) // bracket-notation

console.log(travis.favNum) // dot-notation

travis['age'] = 17

travis.age = 31 // add properties

travis.favNum = 42 // update properties

console.log(travis)

delete travis.favNum // to remove properties

console.log(travis)

console.log('------------')


// [ { name: "Travis"}, { name: "Ironman"}]
// Person: { name: "Travis" }
        // props: ['name', 'role']
        // p: 'name'
    
    // person[p] -> person['name'] -> 'Travis'



// for-of (for arrays only)
// go through each element in the array, and set the element to the variable 'person'
// people = [ travis, ironman ]

for (let person of people) {
    // uppercase the names of each person
    let props = ['name', 'role']
    for (let p of props) {
        person[p] = person[p].toUpperCase()  // variables require bracket notation
    }
}

console.log(people)




// JSON - Javascript Object Notation
console.log(travis)

console.log(JSON.stringify(travis))
let travisStr = JSON.stringify(travis) // makes it a string

let objTravis = JSON.parse(travisStr) // makes string an object again

console.log(objTravis)




// Looping over objects

// FOR - IN Loop
console.log('----- FOR IN ------')
for ( let key in travis) {
    console.log(key, ':', travis[key])
}

// Error : Not itterable
// for (let something of travis) {
//     console.log(something)
// }

let myArr = [42, 32, 643, 6321, 2342]

for (let i in myArr) {
    // console.log(typeof i) // usually you want numbers not strings
}

console.log('------------')
const weather = {
    latitude: 40.75,
    longitude: -74,
    elevation: 27,
    temperature: 23.4,
};

for (let key in weather){
    console.log(weather[key])
    console.log(`The ${key} is ${weather[key]}`);
 }
 

 if ("elevation" in weather){
    console.log(`The elevation is ${weather.elevation}`);
 }else {
    console.log("Elevation not available.");
 }

 /*
 Write the boolean expressions to check if:
`weight` key exists in `pet`


`product` contains `price`


`book` has a `title`

*/

// let bool = 'weight' in pet

// if ('price' in product) {}

// if (book.hasOwnProperty('title')){}
// if (book.title){}


'The elevation is ' + weather.elevation // C-8