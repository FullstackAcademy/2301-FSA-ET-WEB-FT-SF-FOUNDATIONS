// let's select some elements from the html file
const textField = document.querySelector("input");
const croissantButton = document.querySelector("#croissant-button");
const entriesList = document.querySelector("ul");
const h1 = document.querySelector("h1");

const entriesArray = [];
const correctAnswer = "tea";

console.log(textField, croissantButton, entriesList, h1);

// let's set what happens when you click the button
croissantButton.addEventListener("click", function () {
  const textFieldValue = textField.value;

  console.log(textFieldValue);

  if (textFieldValue === correctAnswer) {
    h1.textContent = "Your answer is correct!";
    console.log("Your answer is correct!");
  } else {
    h1.textContent = "Wrong answer";
    console.log("Wrong answer");
  }

  // add the value to the unordered list
  const listItem = document.createElement("li");
  listItem.textContent = textFieldValue;
  entriesList.appendChild(listItem);

  entriesArray.push(textFieldValue);
  console.log(entriesArray);
});
