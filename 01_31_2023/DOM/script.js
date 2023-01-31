// to select one element, returns an HTMLElement
const firstP = document.querySelector("p");

// to select all elements, returns a NodeList
const paragraphs = document.querySelectorAll("p");

// modify a style property
firstP.style.color = "red";

// display the content of paragraphs
console.log(paragraphs);

// create elements
const newParagraph1 = document.createElement("p");
const newParagraph2 = document.createElement("p");

// when you create elements, they are not placed within the DOM
//  yet

// modify the text inside the element
newParagraph1.textContent = "This is the last p";

// this code would add the new paragraph to the end of the body
// document.body.appendChild(newParagraph1);

// select the first div on the document
const div = document.querySelector("div");

// adds new paragraph to beginning of the div to
div.prepend(newParagraph2);

// selects an element with id of larger
const largerP = document.querySelector("p#larger");

// modifies the paragraph with the new font size
largerP.style.fontSize = "2em";
