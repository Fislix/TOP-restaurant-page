import { generateAboutPage } from './subpages/about-page.js';
import { generateMenuPage } from './subpages/menu-page.js';
import { generateContactPage } from './subpages/contact-page.js';

let aboutPage = generateAboutPage();
let menuPage = generateMenuPage();
let contactPage = generateContactPage();

let body = document.body;
let header = document.createElement('header');

let restaurantName = document.createElement('h1');
restaurantName.innerText = 'Coder\'s Café';
header.appendChild(restaurantName);

let navigation = document.createElement('nav');
function addNavigationButtons() {
  let about = document.createElement('span');
  about.innerText = 'About';
  let menu = document.createElement('span');
  menu.innerText = 'Menu';
  let contact = document.createElement('span');
  contact.innerText = 'Contact';

  about.addEventListener('click', () => {
    switchToPage(aboutPage);
  });
  menu.addEventListener('click', () => {
    switchToPage(menuPage);
  });
  contact.addEventListener('click', () => {
    switchToPage(contactPage);
  });

  navigation.appendChild(about);
  navigation.appendChild(menu);
  navigation.appendChild(contact);
};
addNavigationButtons();
header.appendChild(navigation);


body.appendChild(header);

let currentPage = aboutPage;
function switchToPage(page) {
  document.body.removeChild(currentPage);
  document.body.appendChild(page);
  currentPage = page;
}

document.body.appendChild(aboutPage);

