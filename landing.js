// access the main div in our landing.html page
const app = document.getElementById('app');

// create a main container
const mainContainer = document.createElement('div');
mainContainer.style.margin = 0;
mainContainer.style.padding = 0;
mainContainer.style.boxSizing = 'border-box';

// Navbar
const navbar = document.createElement('nav')
navbar.style.backgroundColor = '#333';
navbar.style.color = "white";
navbar.style.width = "100%";
navbar.style.padding = '1rem';
navbar.style.textAlign = 'center';

const navLinks = ["Home", "About", "Contact", "Services", "Portfolio"];
navLinks.forEach(linkText => {
    const link = document.createElement('a');
    link.textContent = linkText;
    link.href = '#';
    link.style.margin = "0 15px"
    link.style.textDecoration = 'none';
    link.style.color = "white";
    link.style.fontWeight = "bold";

    navbar.appendChild(link);
})

// Hero Section
const heroSection = document.createElement('section');
heroSection.style.padding = "100px 20px";
heroSection.style.textAlign = 'center';
heroSection.style.backgroundColor = '#f5f5f5';

const heroTitle = document.createElement('h1');
heroTitle.textContent = "Welcome to our website!";
heroTitle.style.fontSize = '36px';
heroTitle.style.marginBottom = '20px';
heroTitle.classList.add("title-text")

const heroSubtitle = document.createElement('p');
heroSubtitle.textContent = "Discover amazing things with us.";
heroSubtitle.style.fontSize = '18px';
heroSubtitle.style.color = '#555';

const heroButton = document.createElement('button');
heroButton.textContent = "Learn More";
heroButton.style.padding = '10px 20px';
heroButton.style.backgroundColor = '#333';
heroButton.style.color = 'white';

heroSection.appendChild(heroTitle);
heroSection.appendChild(heroSubtitle);
heroSection.appendChild(heroButton);

// About Section
const aboutSection = document.createElement('section');
aboutSection.style.padding = "50px 20px";
aboutSection.style.textAlign = 'center';

const aboutTitle = document.createElement('h2');
aboutTitle.textContent = "About Us";
aboutTitle.style.fontSize = '24px';
aboutTitle.style.marginBottom = '20px';

const aboutText = document.createElement('p');
aboutText.textContent = "We are a team of passionate individuals dedicated to creating amazing things.";
aboutText.style.fontSize = '16px';
aboutText.style.color = '#555';


aboutSection.appendChild(aboutTitle);
aboutSection.appendChild(aboutText);

// Footer Section
const footer = document.createElement('footer');
footer.style.backgroundColor = '#333';
footer.style.color = 'white';
footer.style.padding = '20px';
footer.style.textAlign = 'center';

const footerText = document.createElement('p');
footerText.textContent = "© 2024 All rights reserved.";

footer.appendChild(footerText);

// append everything to the main container
mainContainer.appendChild(navbar);
mainContainer.appendChild(heroSection);
mainContainer.appendChild(aboutSection);
mainContainer.appendChild(footer);

// append the main container to the main div
app.appendChild(mainContainer);