const caterpillar = '🐛'; // missing quotes

const leaf = '🌿';
const rock = '🪨'; // mismatched quotes

let forest = ""; // needs to be let since we add to it
/*
    FOR LOOP ISSUES:
    Let vs const
    needs semi-colons not commas
*/
for (let i = 0; i < 100; i++) { 
  if (Math.random() < 0.8) { // missing parens
    forest += leaf;
  } else {
    forest += rock;
  }
}

console.log(forest); // incorrect spelling

let numLeaves = 0; // needs to be let since we add to it
for (const emoji of forest) {
  if (emoji == leaf) { // == for comparison, leaf not leave
    numLeaves += 1; // should be +=1 not =+1
  }
} // missing closing bracket


console.log(`There are ${numLeaves} leaves in the forest.`); // log not l0g

if (numLeaves >= 80) {
  console.log("There are enough leaves to eat :)"); // missing closing paren
} else { // adding curley brackets around else statement
  console.log("There are not enough leaves to eat :("); // console missing 'e', missing open paren
  console.log(`${caterpillar} is hungry...`); // change to string literal with `
  process.exit();
}

const timerLabel = `${caterpillar} ate all the leaves in`;
console.time(timerLabel);

console.log(`${caterpillar} gets to feast!`); // spelling error on variable name

let leafLog = ""; // needs to be let
while (numLeaves > 0) {
  leafLog += `${numLeaves}.. `;
  numLeaves -= 1; // (not =-)
}
console.log(leafLog); // typo
console.log('0! YUM!'); // mismatch quotes

console.timeEnd(timerLabel);