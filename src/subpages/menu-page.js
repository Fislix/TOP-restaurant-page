export function generateMenuPage() {
  let menuPage = document.createElement('main');
  menuPage.id = 'menu-page';

  addHeading(menuPage);
  addItemsList(menuPage);  

  return menuPage;
}

function addHeading(parent) {
  let heading = document.createElement('h2');
  heading.innerText = 'Menu';
  parent.appendChild(heading);
}

function addItemsList(parent) {
  let menuItems = ['Java Beans Coffee', 'Crab Plate', 'Snake Meat Stew', 'C-food'];
  let list = document.createElement('ul');
  for (const itemName of menuItems) {
    let menuItem = document.createElement('li');
    menuItem.innerText = itemName;
    list.appendChild(menuItem);
  }

  parent.appendChild(list);
}

