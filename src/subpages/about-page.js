import EntrancePhoto from '../../images/entrance.jpeg';
import InsidePhoto from '../../images/inside.jpeg';
import OutsidePhoto from '../../images/outside.jpeg';

export function generateAboutPage() {
  let aboutPage = document.createElement('main');
  aboutPage.id = 'about-page';
  
  addAboutText(aboutPage);
  addPhotos(aboutPage);

  return aboutPage;
}

function addAboutText(parent) {
  let greeting = document.createElement('h2');
  greeting.innerText = 'Welcome to Coder\'s Café!';
  parent.appendChild(greeting);

  let description = document.createElement('p');
  description.innerText = 'Every coder will find something to enjoy here, ' +
    'no matter how bad their taste in programming languages is!';
  parent.appendChild(description);
}

function addPhotos(parent) {
  let photos = document.createElement('div');
  photos.id = 'restaurant-photos';

  for (const photo of [EntrancePhoto, InsidePhoto, OutsidePhoto]) {
    const image = new Image();
    image.src = photo;
    photos.appendChild(image);
  }

  parent.appendChild(photos);
}

