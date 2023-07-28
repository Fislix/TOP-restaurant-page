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
  addAbout(main);
  addMenu(main);
  addContact(main);
  document.body.appendChild(main);
}

function addAbout(parent) {
  let aboutSection = document.createElement('section');
  let description = document.createElement('p');
  description.innerText = 'Welcome to Coder\'s Café! Every coder will find ' +
    'something to enjoy here, no matter how bad their taste in programming ' + 
    'languages is!';
  aboutSection.appendChild(description)
  parent.appendChild(aboutSection);
}

function addMenu(parent) {
  let menuSection = document.createElement('section');
  let heading = document.createElement('h2');
  heading.innerText = 'Menu';
  menuSection.appendChild(heading);
  menuSection.appendChild(generateItemsList());
  parent.appendChild(menuSection);
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

function addContact(parent) {
  let contactSection = document.createElement('section');
  let heading = document.createElement('h2');
  heading.innerText = 'Contact';
  contactSection.appendChild(heading);

  let phoneNumber = document.createElement('p');
  phoneNumber.innerText = 'Phone: +49 314 1592653';
  let address = document.createElement('p');
  address.innerText = 'Address: Fischerstraße 69, 77977 Rust, Germany';
  
  contactSection.appendChild(phoneNumber);
  contactSection.appendChild(address);

  parent.appendChild(contactSection);
}