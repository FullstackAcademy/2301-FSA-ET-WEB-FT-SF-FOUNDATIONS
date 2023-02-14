// this is a factory function
function createCounter() {
  let count = 0;

  return {
    name: "newCounter",
    increment: function () {
      count++;
      // the value of this IS pointing to the object
      console.log(this.name);
    },
    decrement: () => {
      count--;
      // the value of this IS NOT pointing to the object
      console.log(this.name);
    },
    getValue: function () {
      return count;
    },
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

counter1.increment(); // count === 1
counter1.increment(); // count === 2
counter1.increment(); // count === 3
counter1.decrement(); // count === 2
counter1.decrement(); // count === 1

console.log(counter1.getValue());

counter2.increment(); // count === 1
counter2.increment(); // count === 2
counter2.increment(); // count === 3
counter2.increment(); // count === 4
counter2.increment(); // count === 5

console.log(counter2.getValue());
