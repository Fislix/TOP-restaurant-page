import { getNavigationBar } from "./navbar.js";

export function getHeader() {
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

