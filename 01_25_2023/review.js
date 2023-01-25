const num = 20;
const value = 20;

// the following loops are equivalent

// loops
for (let i = 1; i <= 10; i++) {
  console.log("The value of i is: ", i);
}

let i = 1;
while (i <= 10) {
  console.log("The value of i is: ", i);
  ++i;
}

// conditionals
if (num < value) {
  console.log("number is less than value");
} else if (num > value) {
  console.log("number is greater than value");
} else {
  console.log("number is equal to value");
}
