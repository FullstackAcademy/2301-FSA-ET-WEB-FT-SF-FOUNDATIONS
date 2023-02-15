

let nums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// Add one to each value
// for (let i = 0; i < nums.length; i++) {
//     nums[i] = nums[i] + 1
// }


// let forEachRtn = nums.forEach((element, index, array) => {
//     array[index] = element + 1
// })

/*
   ------- MAP Function ------------
*/
let numsPlus = nums.map((element, index, array) => element + 1)

 // [2, 3, 4, 5, 6, ...]
console.log('Map returns:', numsPlus)
console.log('Original Array:', nums)

// Multiply each value by 7

let multBy7 = nums.map((val) => val * 7)
console.log(multBy7)


// Create a string for each value that says "My favorite number is: ___"

let favNums = nums.map((num) => `My Favorite number is: ${num}`)
console.log(favNums)

console.log('Original Array:', nums)

// let htmls = nums.map(num => {
//     let node = document.createElement('option')
//     node.innerText = num
// })


/*
   ------- FILTER Function ------------
*/

nums = [1,3,5,7,2,4,6,8]

let evens = nums.filter((element) => element % 2 === 0)
let odds = nums.filter((element) => element % 2 === 1)

console.log('Filtered Even:', evens)
console.log('Filtered Odds:', odds)

const getRelevantSentences = (criteriaFn, sentences) => {
    return sentences.filter(sentence => criteriaFn(sentence))
};

const getRelevantSentencesOrig = (criteriaFn, sentences) => {
    const relevantSentences = [];
    for (const sentence of sentences) {
      if (criteriaFn(sentence)) {
        relevantSentences.push(sentence);
      }
    }
    return relevantSentences;
};


/*  ----- REDUCE  ----------- */

console.log(nums)
let total = nums.reduce((acc, curr ) => {
    console.log('Acc + curr:', acc, ' + ', curr)
    return acc + curr
}, 0)

console.log(total)

let arrOfObj = [ { total: 120}, {total: 37}]

total = arrOfObj.reduce((acc, curr) => acc + curr.total, 0)

console.log(total)