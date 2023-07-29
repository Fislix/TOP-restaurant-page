import CallIcon from '../../images/icons/call.png';
import LocationIcon from '../../images/icons/location.png';

export function generateContactPage() {
  let contactPage = document.createElement('main');
  contactPage.id = 'contact-page';
  let heading = document.createElement('h2');
  heading.innerText = 'Contact';
  contactPage.appendChild(heading);

  contactPage.appendChild(createIconTextPair(CallIcon, '+49 314 1592653'));
  contactPage.appendChild(createIconTextPair(
    LocationIcon,
    'Fischerstraße 69, 77977 Rust, Germany'
  ));
  
  return contactPage;
}

function createIconTextPair(icon, text) {
  let wrapper = document.createElement('div');
  let iconElement = new Image();
  iconElement.src = icon;
  wrapper.appendChild(iconElement);

  let label = document.createElement('span');
  label.innerText = text;
  wrapper.appendChild(label);

  return wrapper;
}
