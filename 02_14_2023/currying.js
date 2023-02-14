function greetCurried(greeting) {
  // this is the function area

  // function innerFunc(name) {
  //   console.log(greeting + ", " + name);
  // }

  // return innerFunc;

  // the code below equivalent to the code above
  return function (name) {
    console.log(greeting + ", " + name);
  };
}

const greetHello = greetCurried("Hello");

greetHello("Orlando"); // greetCurried("Hello")("Orlando")
greetHello("Samuel"); // greetCurried("Hello")("Samuel")
greetHello("Veronica"); // greetCurried("Hello")("Veronica")

const greetGoodbye = greetCurried("Goodbye");

greetGoodbye("Orlando"); // greetCurried("Goodbye")("Orlando")
greetGoodbye("Samuel"); // greetCurried("Goodbye")("Samuel")
greetGoodbye("Veronica"); // greetCurried("Goodbye")("Veronica")
