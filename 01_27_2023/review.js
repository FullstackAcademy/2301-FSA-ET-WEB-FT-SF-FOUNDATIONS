// let vs const
let num = 5;
// num = 11;

let nameString = "jglay";

// the following will not work because nameString is a constant
// nameString = "JP";

// DO NOT DO THIS
// var otherString = "dfsdfs";
// otherString = "dfsdfs";

// data types
const numA = 10;
const str = "Some sort of string";
const floatA = 4.5;
const arrayOfNumbers = [1, 2, 3, 4, 5];

// this will check the data type
typeof str;

// conditionals
if (num > 10) {
  console.log("Number is greater than 10");
} else if (num < 10) {
  console.log("Number is less than 10");
} else {
  console.log("Number is equal to 10");
}

// always use strict equality to compare values
console.log(0 === 1);

// loops
// const counter = 4;

// while (nameString === "jglay") {
//   console.log("nameString is set to jglay");

//   if (counter === 3) {
//     nameString = "orlando";
//   }
// }

// let counter = 0;

// while (counter < 10) {
//   console.log("Counter is: ", counter);
//   counter++;
// }

// for
for (let counter = 0; counter < 10; ++counter) {
  console.log("Counter is: ", counter);
}

// arrays
const emptyArray = [];
const arrayOfSize1 = ["sdklfjkdslfj"];

// indices start at 0... so orlando is in index 0 and gina is in index 3
const array = ["orlando", "daniel", "susan", "gina"];

emptyArray.push(11);
emptyArray.push(-43);

console.log(emptyArray);

emptyArray[0] = 90;
emptyArray[1] = 43;

// go thru an array in reverse
for (let i = emptyArray.length - 1; i >= 0; --i) {
  console.log(
    "The current element of within the empty array is: ",
    emptyArray[i]
  );
}

// functions
function greet(names) {
  // console.log("Hello ", name, "!");
  for (let i = 0; i < names.length; ++i) {
    console.log("Hello ", names[i], "!");
  }
}

greet(["Michael", "Orlando", "Elisha"]);

function subtract(argA, argB) {
  return argA - argB;
}

console.log(subtract(10, 9));
