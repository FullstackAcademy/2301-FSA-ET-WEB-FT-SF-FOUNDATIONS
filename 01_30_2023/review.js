

// Error conditionals

console.log(typeof(typeof 17)) // typeof returns a string that has the word "number"/'number'
if (typeof num === 'number')
typeof "Travis" != 'string'
// vs
typeof 'Travis' != "string"

// single quote and double quote are both strings (they just have to match)
let name = 'Travis'
"Don't stay up too late"
console.log(`${name}, don't stay up too late`) // string literals (template literals)



// Arrays 

let arr = [] // empty array

arr.push('A') // add the letter to the end of my array bucket

console.log(arr)

arr.push('B')
arr.push('C')

console.log(arr)

// SPLICE

arr.splice(1, 1, 'In-Between')

console.log(arr)

// SLICE

console.log(arr.slice(1)) // creates a COPY of the array starting at position 1 and going to the end
// slice ( starting point, up to but not including the ending point)
console.log(arr)

let numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(numArr.length)
console.log(numArr.slice(3, numArr.length))

let middle = numArr.slice(3,7)
console.log(middle.reverse())

console.log(numArr)

/**
 * 
 */
function myFunc() {

    return 42
}


let returnVal = myFunc()

// console.log(returnVal)


console.log('-------------------')
// For of loops

let exampleArr = ['Travis', 'Stratton']

// console.log(exampleArr[1])

for (let i = 0; i < exampleArr.length; i++) {
    let str = ''
    let toggleUpper = true;
    for (let letter = 0; letter < exampleArr[i].length; letter++) {
        if (toggleUpper){
            str += exampleArr[i][letter].toUpperCase()
        } else {
            str += exampleArr[i][letter].toLowerCase()
        }

        toggleUpper = !toggleUpper // flips the boolean from true to false to true ever loop
    }
    exampleArr[i] = str
}

// console.log(exampleArr)


let numArr2 = [42, 234, 1, 234, 12, 876]

for (let val of numArr2) {
    // console.log(val)
}

// Same as: for (let index = 0; index < numArr2; index++)
for (let index in numArr2) {
    // console.log(typeof index) // treated as string!
}


// 2D Arrays
let twoDArr = []


twoDArr.push( ['name', 'Travis'])
twoDArr.push( ['name', 'Orlando'])

console.log(twoDArr)
// To get to Orlando
console.log(twoDArr[1])
console.log(twoDArr[1][1])


let ticTacToe = [
    [ '', '', ''],
    [ '', '', ''],
    [ '', '', ''],
]

console.log(ticTacToe)
ticTacToe[0][0] = 'X'
console.log(ticTacToe)
ticTacToe[1][2] = 'O'
console.log(ticTacToe)

// Short Circuit Evals

/*
    P       |   Q       |   P && Q
    true        true        true
    true        false       false
    false       true        false
    false       false       false

    if the first value determines the answer, 
    you dont need the second value to be evaluated
*/