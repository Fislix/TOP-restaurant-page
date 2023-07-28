export default function load() {
  let body = document.body;
  let header = document.createElement('header');
  let restaurantName = document.createElement('h1');
  restaurantName.innerText = 'Coder\'s Café';
  header.appendChild(restaurantName);
  body.appendChild(header)
}
