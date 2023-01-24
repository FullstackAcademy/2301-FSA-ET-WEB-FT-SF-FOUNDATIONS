/*
    What are conditionals?

    - Look at a condition (evaluate a set of values)
    - They will determine if its a true statement or a false one

*/

let num = 7

console.log(7 < 5) // true or false -- Boolean

let bool = true
console.log(bool)

/*

    less than/greater than -   <,  >
    less than or equal to:  <=,  >=
    Not operator:  !
    Is equal:  ==, ===
    Not Equal: !==

    LOGIC OPERATORS
    AND - &&
    OR  - ||

*/

console.log(!bool)

let myFavNum = 3
let aNum = 4

console.log('Are they the same?  ', (myFavNum == aNum))

myFavNum = myFavNum + 1

console.log('Are they the same, now?  ', (myFavNum == aNum))

let timeOfDay = "lunch"
let weather = "rainy"

//                  T                &&       F
let outside = (timeOfDay === "lunch" && weather ==="clear")
console.log("Should I go outside?", outside )

//                  T                ||       F
let outside2 = (timeOfDay === "lunch" || weather ==="clear")
console.log("Should I go outside?", outside2 )


/*  
    Conditional Statements

    if (condition) {
        do a true thing
    } else {
        do this thing for false
    }
*/

let score = 30

if ( score >= 90 ) {
    console.log('You got an A!')
} else if ( score >= 80) {
    console.log('You got a B!')
} else if ( score >= 70 ) {
    console.log('You got a C!')
} else if ( score >= 60 ) {
    console.log('You got a D...')
} else {
    console.log('You got a F...')
}
  

// let a=3, b=4, c=5

// !(a < b) && c + 27 > 42 

//             5 + false

// !(3 < 4)  && 32 > 42 || true

// ! (true) && false || true

// false && (false || true)

// false || true

// true

let x = 5
console.log(x)
x = x + 1
console.log(x)
x -= 7 // subracts 7 from x ( x = x - 7)

console.log(x)

x++
// x--

console.log(x)


/* Loops */

console.log('----- Loops')

// Starting Point
// How long does the loop run
// Body of the Loop (what the loop does)
// Tell the loop to move to the next pass


// Do this but in a loop:
// console.log('T-9..')
// console.log('T-8..')
// console.log('T-7..')
// console.log('T-6..')

let count = 10
while ( count > 0 ) {
    console.log(`T-${count}..`) // "T-" + count + ".."
    count-- // count = count - 1
}

// for ( starting point; condition; update)

for (let count = 10; count > 0; count--) {
    console.log("T-" + count + "..")
}