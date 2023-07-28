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
  addDescription();
  addMenu();
}

function addDescription() {
  let main = document.createElement('main');
  let description = document.createElement('p');
  description.innerText = 'Welcome to Coder\'s Café! Every coder will find ' +
    'something to enjoy here, no matter how bad their taste in programming ' + 
    'languages is!';
  main.appendChild(description);
  document.body.appendChild(main);
}

function addMenu() {
  let menuSection = document.createElement('section');
  let heading = document.createElement('h2');
  heading.innerText = 'Menu';
  menuSection.appendChild(heading);
  menuSection.appendChild(generateItemsList());
  document.body.appendChild(menuSection);
}

function generateItemsList() {
  let menuItems = ['Java Beans Coffee', 'Crab Plate', 'Snake Meat Stew', 'C-food'];
  let list = document.createElement('ul');
  for (const itemName of menuItems) {
    let menuItem = document.createElement('li');
    menuItem.innerText = itemName;
    list.appendChild(menuItem);
  }
  return list;
}
