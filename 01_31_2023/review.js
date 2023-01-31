// objects
const person = {
  name: "orlando c",
  age: 39,
  "-address": "jersey city",
};

const keyToLookFor = "name";

// modifying a value of a key
person.age = 29 // 😉 orlando's visible age

console.log(person.name);
console.log(person.age);

// the following code is invalid
// console.log(person.-address)

// alternative syntax
console.log(person["name"]);
console.log(person["age"]);

// this code however is valid
console.log(person["-address"]);
console.log(person[keyToLookFor]);

// looping thru object
for (const property in person) {
  console.log("Property -> ", property, ", value -> ", person[property]);
}
