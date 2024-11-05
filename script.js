const title = document.getElementById('h1');
const titles = document.getElementsByClassName('text');
const paragraphs = document.getElementsByTagName('p');
const btn = document.getElementById('btn');
const paragraphContainer = document.getElementById('paragraph-container');
const navigateBtn = document.getElementById('navigate-btn');

console.log("h1 title", title);
console.log("by class name text", titles);
console.log("by tag name p", paragraphs);

title.addEventListener("click", () => {
    title.style.color = "red";
    title.style.backgroundColor = "yellow";
    title.innerText = "Pulp Fiction is a great film."
});

console.log(titles[1].innerText);

// change to "see you later"
titles[1].innerText = "see you later";

console.log(titles[1].innerText);

// create a new element
let newParagraph = document.createElement(`p`)
console.log(newParagraph);
newParagraph.innerText = "the last of us with bananas!";

document.body.appendChild(newParagraph);

// remove an element
document.body.removeChild(newParagraph);

// add event listener to the button
btn.addEventListener("click", changeBox);

function changeBox() {
    alert("you clicked me!");
    paragraphContainer.style.border = "6px solid black";
    paragraphContainer.style.backgroundColor = "yellow";
    paragraphs[0].style.color = "blue";
    paragraphs[1].style.color = "red";
}

// navigate to a new page with the button
navigateBtn.addEventListener("click", () => {
    window.location.href = "https://www.yourwebpage.com/about.html";
})