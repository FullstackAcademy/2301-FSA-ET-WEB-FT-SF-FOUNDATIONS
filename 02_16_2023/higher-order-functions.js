const array = [1, 5, 20, 300, 14, -5]; // 1 + 5 + 20 + 300 + 15 + -5 => 236

// forEach
for (let i = 0; i < array.length; ++i) {
  console.log(array[i]);
}

for (let element of array) {
  console.log(element);
}

array.forEach((element) => console.log(element));

// map
const mappedArray = array.map((element) => {
  return `<li>${element}</li>`;
});

console.log(mappedArray);
console.log(mappedArray.join(" | "));

// filter

const filteredArray = array.filter((element) => {
  // if (element % 2 === 0) {
  //   return true;
  // } else {
  //   return false;
  // }

  // this code below is the same as above
  return element % 2 === 0;
});

console.log(filteredArray);

// reduce

// 1 + 5 + 20 + 300 + 15 + -5 => 335
const sum = array.reduce((previousValue, currentValue) => {
  return previousValue + currentValue;
}, 75);

console.log(sum);
