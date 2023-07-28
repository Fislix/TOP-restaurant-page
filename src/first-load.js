export default function load() {
  addHeader();
  addMainContent();
}

function addHeader() {
  let body = document.body;
  let header = document.createElement('header');
  let restaurantName = document.createElement('h1');
  restaurantName.innerText = 'Coder\'s Café';
  header.appendChild(restaurantName);
  body.appendChild(header)
}

function addMainContent() {
  let main = document.createElement('main');
  let description = document.createElement('p');
  description.innerText = 'Welcome to Coder\'s Café! Every coder will find ' +
    'something to enjoy here, no matter how bad their taste in programming ' + 
    'languages is!';
  main.appendChild(description);
  document.body.appendChild(main);
}
