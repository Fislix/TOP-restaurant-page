import { generateAboutPage } from './subpages/about-page.js';
import { generateMenuPage } from './subpages/menu-page.js';
import { generateContactPage } from './subpages/contact-page.js';

const aboutPage = generateAboutPage();
let currentPage = aboutPage;

function switchToPage(parent, newPage) {
  parent.removeChild(currentPage);
  parent.appendChild(newPage);
  currentPage = newPage;
}

export function getHeader() {
  let header = document.createElement('header');
  header.appendChild(getRestaurantName());
  header.appendChild(getNavigationBar());
  return header;
}

export function getStartingPage() {
  return aboutPage;
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
