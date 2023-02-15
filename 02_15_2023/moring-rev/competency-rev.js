const callCounter = () => {
    let callCount = 0;
    return function () {
      callCount++;
      console.log(`Number of calls: ${callCount}`);
    };
  };
  
  const counter1 = callCounter();
  const counter2 = counter1;
  const counter3 = counter1;

// Similar to this
//   let arr = [1,2,3]
//   let arr2 = arr

//   arr2.push(4)
//   console.log(arr)

//  counter1()
//  counter2() // counter1()
//  counter3() // counter1()


function Person(str, func) {
    this.counter = func(); // counter1 = callCounter()
    this.name = str;
    this.intro = function () {
      console.log(`hello, my name is ${this.name}`);
      this.counter();
    };
    this.farewell = function () {
      console.log('farewell, friend, I\'ve got to be off now.');
      this.counter();
    };
  }

  const calliope = new Person("Calliope", callCounter);
  calliope.intro();
  calliope.farewell();