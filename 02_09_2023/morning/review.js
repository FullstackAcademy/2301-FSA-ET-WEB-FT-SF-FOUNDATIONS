

// a() // invoke the function
// let b = new B()
// console.log(b)

function a() {
    console.log('A')
}

class B {
    constructor(){ 
    }
}



function dog(name, breed, age) {
    const dog = {};
    dog.name = name;
    dog.breed = breed;
    dog.age = age;
    return dog;
  }
  
  const myDog = dog('Ace', 'Poodle', 8)
  const myDogClone = dog('Ace', 'Poodle', 8)
  
  console.log(myDog === myDogClone)
  console.log(myDog == myDogClone)

  console.log(JSON.stringify(myDog) === JSON.stringify(myDogClone))

  function compareFn(ob1, ob2) {
    if (Object.keys(ob1).length != Object.keys(ob2).length) {
        return false // dont have same number of keys
    }

    for (let key in ob1) {
        if (!(key in ob2)) {
            return false
        }
        if (ob1[key] !== obj2[key]) {
            return false
        }
    }

    return true
  }

  console.log(myDog)
  console.log(myDogClone)