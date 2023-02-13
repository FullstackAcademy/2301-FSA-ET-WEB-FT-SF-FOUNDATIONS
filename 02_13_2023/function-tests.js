

function a() {
    console.log('Inside A')
}

// a()

const b = function () {
    console.log('Inside B')
}

// b()

const greetC = (name) => console.log(`Hello ${name}!`)

// let returnVal = greetC('Travis')

// console.log(returnVal)

const fnA = () => {
    return "A" + fnB() // ABC
  };
  
  const fnB = () => {
    return "B" + fnC() // BC
  };
  
  const fnC = () => {
    return "C";
  };
  
  let fnCAnswer = fnC() // C
  let fnBAnswer = fnB()
  let answer = fnA();

  console.log(answer)

