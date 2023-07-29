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
  for (const item of menuItems) {
    let wrapper = document.createElement('div');
    wrapper.classList.add('menu-item');

    let image = new Image();
    image.src = item.photo;
    wrapper.appendChild(image);
    
    let description = getItemDescription(item.name, item.price);
    wrapper.appendChild(description);

    parent.appendChild(wrapper);
  }
}

function getItemDescription(name, price) {
  let textWrapper = document.createElement('div');

  let nameElement = document.createElement('span');
  nameElement.innerText = name;
  textWrapper.appendChild(nameElement);

  let priceElement = document.createElement('span')
  priceElement.innerText = price;
  textWrapper.appendChild(priceElement);

  return textWrapper;
}
