const array = [10, -1, 3, 5000, -43, 2];

const sortedArray = array.sort((num1, num2) => {
  if (num1 > num2) {
    return 1;
  } else if (num1 < num2) {
    return -1;
  } else {
    return 0;
  }
});

console.log(sortedArray);

const arrayOfStrings = ["ball", "Wall", "flOOr", "fRuit", "Cup", "reD"];

const sortedArrayOfStrings = arrayOfStrings.sort((num1, num2) => {
  if (num1 > num2) {
    // string1 belongs after string2
    return 1;
  } else if (num1 < num2) {
    // string2 belongs after string1
    return -1;
  } else {
    return 0;
  }
});

console.log(sortedArrayOfStrings);
