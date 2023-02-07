class Animal {
    constructor(name) {
      this.name = name;
    }
  
    shout() {
      console.log("AAAAA");
    }
  }
  
  class Goat extends Animal {
    constructor() {
      super("Goat");
    }
  }
  
  class Bird extends Animal {
    constructor() {
      super("Bird");
    }
  
    shout() {
      console.log("tweet!");
    }
  }
  
  
class Fox extends Animal {
    constructor() {
      super("Fox");
    }
}

class Dog extends Animal {
    constructor() {
        super('Dog')
    }
}
  
const f1 = new Fox();
const f2 = new Fox();

const b = new Bird();
b.shout();
const g = new Goat();
g.shout();


// EXAMPLE OF CLASSES IN OTHER CLASSES

class Person {
    constructor(name) {
        this.name
    }

    greeting() { console.log('hello', this.name) }
}

class Student extends Person {
    constructor(name, grade) {
        super(name)
        this.grade = grade
    }
}

class School {
    constructor(name, listOfPeople) {
        this.name = name
        this.listOfPeople = listOfPeople // array of students
    }
}


let person = new Student('Bob', 98)
let person2 = new Student('Ann', 76)

new School('FSA', [person, person2])