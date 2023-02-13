

function countDown(n) {
    if ( n <= 0 ){
        return // ends function without returning a value
    }
    console.log(n)
    countDown(n-1)
}

function coundDownLoop(n) {
    for (let i = n; n > 0; n--) {
        console.log(i)
    }
}

// countDown(5)


// 5!  = 1 * 2 * 3 * 4 * 5

function factLoop(n) {
    let total = 1
    for (let i = 1; i <= n; i++) {
        total *= i
    }

    return total
}

// console.log(factLoop(5))


function factorial(n) {
    // 5! = 5 * 4 * 3 * 2 * 1
    // 5! = 5 * 4!
    // 4! = 4 * 3 * 2 * 1
    // 4! = 4 * 3!

    // ... 0! = 1

    if ( n === 0 ) {
        return 1
    }
    
    let nextFact = factorial(n-1)
    console.log(`${n} * fact(${n-1}) :`, n, ' * ', nextFact)
    return n * nextFact
}

// console.log(factorial(5))




/*

    Function Declarations

*/

function name1(parameters) {
    // body
    console.log('hi')
}

let name2 = function () {
    console.log('hi')
}

// name2()

// ARROW function
// { }  are optional if you only have 1 line
let name3 = (param) => console.log('hi', param)

// name3('Travis')

let arrowFn = () => { return 42 }
// function arrowFn() { return 42 }
let arrowFn2 = (r) => 2 * Math.PI * r
let arrowConsole = (input) => console.log(input)

console.log(arrowFn())

let cir = arrowFn2(4)
arrowConsole(cir)


