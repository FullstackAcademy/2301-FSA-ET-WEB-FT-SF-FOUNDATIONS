// const num1 = 10;
// const num2 = 30;

// const sum1 = num1 + num2;

// console.log(sum1);

// const num3 = 70;
// const num4 = 100;

// const sum2 = num3 + num4;

// console.log(sum2);

// ---------------------------

// functions give us the ability to avoid writing code like above ☝
//  we can reuse the same behavior yet allow the values being calculated
//  to be different

// function definition example
function displayWordsToScreen(word1, word2) {
  // word1 and word2 are parameters in this function
  console.log(word1, word2);
}

// function invocation / execute examples

// "something" and "else" are arguments being passed into the function
displayWordsToScreen("something", "else");
displayWordsToScreen("number 1");
displayWordsToScreen("hello");
displayWordsToScreen("😁");

// function return values
function add(parameterA, parameterB) {
  // const sum = parameterA + parameterB;
  // return sum;

  // the line below and the two lines above are equivalent
  return parameterA + parameterB;
}

// here we add 1 and 2 together and store the result in newSum
const newSum = add(1, 2);

// the following two lines are equivalent
console.log(newSum);
console.log(add(1, 2));

const newSum2 = add(-90, 10);

console.log(newSum2);
console.log(add(-90, 10));
