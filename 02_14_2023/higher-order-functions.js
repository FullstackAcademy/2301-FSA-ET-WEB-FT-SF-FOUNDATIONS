const array = [1, 2, 3, 4, 5];

function looper(currentElementOfArray) {
  console.log(currentElementOfArray);
}

const looperArrow = (currentElementOfArray) => {
  console.log(currentElementOfArray);
};

// forEach allows us to loop through a list of elements using functional
//  syntax
array.forEach(looperArrow);
array.forEach((element) => console.log(element));

function createGreeter(name) {
  return function () {
    console.log("Hello: ", name);
  };
}

// the function createGreeter returns another function
const greeterFunc1 = createGreeter("Orlando");
const greeterFunc2 = createGreeter("Denisse");

greeterFunc1(); // Hello: Orlando
greeterFunc1(); // Hello: Orlando

greeterFunc2(); // Hello: Denisse
greeterFunc2(); // Hello: Denisse
