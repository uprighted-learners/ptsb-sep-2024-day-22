const title = document.getElementById('h1');
const titles = document.getElementsByClassName('text');
const paragraphs = document.getElementsByTagName('p');

console.log("h1 title", title);
console.log("by class name text", titles);
console.log("by tag name p", paragraphs);

console.log(titles[1].innerText);

// change to "see you later"
titles[1].innerText = "see you later";

console.log(titles[1].innerText);