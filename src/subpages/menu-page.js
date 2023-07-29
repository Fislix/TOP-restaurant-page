import CoffeePhoto from '../../images/meals/coffee.jpg';
import CrabPlatePhoto from '../../images/meals/crab-plate.jpg';
import MeatStewPhoto from '../../images/meals/meat-stew.jpg';
import SeafoodPhoto from '../../images/meals/seafood.jpg';

const menuItems = [
  {
    name: 'Java Beans Coffee',
    price: '$3.99',
    photo: CoffeePhoto,
  },
  {
    name: 'Crab Plate',
    price: '$24.99',
    photo: CrabPlatePhoto,
  },
  {
    name: 'Snake Meat Stew',
    price: '14.99',
    photo: MeatStewPhoto,
  },
  {
    name: 'C-food Bowl',
    price: '$19.99',
    photo: SeafoodPhoto,
  },
];

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

