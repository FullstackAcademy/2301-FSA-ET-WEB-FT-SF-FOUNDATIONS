// creates a counter with its own copy of count
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

// create 3 different counters
const counter1 = createCounter();
const counter2 = createCounter();
const counter3 = createCounter();

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3

console.log(counter2()); // 1
console.log(counter2()); // 2
console.log(counter2()); // 3
console.log(counter2()); // 4
console.log(counter2()); // 5

console.log(counter3()); // 1
console.log(counter3()); // 2
console.log(counter3()); // 3
console.log(counter3()); // 4
