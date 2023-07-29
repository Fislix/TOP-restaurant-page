import { generateAboutPage } from './subpages/about-page.js';
import { generateMenuPage } from './subpages/menu-page.js';
import { generateContactPage } from './subpages/contact-page.js';
import './style.css';

let aboutPage = generateAboutPage();

document.body.appendChild(getHeader());
document.body.appendChild(aboutPage);

let currentPage = aboutPage;
function switchToPage(page) {
  document.body.removeChild(currentPage);
  document.body.appendChild(page);
  currentPage = page;
}

function getHeader() {
  let header = document.createElement('header');
  header.appendChild(getRestaurantName());
  header.appendChild(getNavigationBar());
  return header;
}

function getRestaurantName() {
  let restaurantName = document.createElement('h1');
  restaurantName.innerText = 'Coder\'s Café';
  return restaurantName;
}

function getNavigationBar() {
  let navBar = document.createElement('nav');
  let subpages = [
    { name: 'About', node: generateAboutPage() },
    { name: 'Menu', node: generateMenuPage() },
    { name: 'Contact', node: generateContactPage() },
  ];
  for (const page of subpages) {
    navBar.appendChild(createNavItem(page.name, page.node));
  }

  return navBar;
}

function createNavItem(name, node) {
  let navItem = document.createElement('span');
  navItem.innerText = name;
  navItem.addEventListener('click', () => switchToPage(node));
  return navItem;
}

