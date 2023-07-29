import { getHeader } from './header.js';
import { getStartingPage } from './navbar.js';
import './style.css';

let currentPage = getStartingPage();

document.body.appendChild(getHeader());
document.body.appendChild(currentPage);

export function switchToPage(newPage) {
  document.body.removeChild(currentPage);
  document.body.appendChild(newPage);
  currentPage = newPage;
}

