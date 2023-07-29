import { generateAboutPage } from './subpages/about-page.js';
import { generateMenuPage } from './subpages/menu-page.js';
import { generateContactPage } from './subpages/contact-page.js';
import { switchToPage } from './index.js';

export function getStartingPage() {
  return generateAboutPage();
}

export function getNavigationBar() {
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

