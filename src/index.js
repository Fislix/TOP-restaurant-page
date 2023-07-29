import { getHeader } from './header.js';
import { getStartingPage } from './navbar.js';
import './style.css';

let currentPage = getStartingPage();

let mainGrid = document.createElement('div');
mainGrid.id = 'main-grid';
mainGrid.appendChild(currentPage);

document.body.appendChild(getHeader());
document.body.appendChild(mainGrid);

export function switchToPage(newPage) {
  mainGrid.removeChild(currentPage);
  mainGrid.appendChild(newPage);
  currentPage = newPage;
}

