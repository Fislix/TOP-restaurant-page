export function generateMenuPage() {
  let menuPage = document.createElement('main');
  menuPage.id = 'menu-page';
  let heading = document.createElement('h2');
  heading.innerText = 'Menu';
  menuPage.appendChild(heading);
  menuPage.appendChild(generateItemsList());
  return menuPage;
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

