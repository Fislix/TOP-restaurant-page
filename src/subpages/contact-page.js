import CallIcon from '../../images/icons/call.png';
import LocationIcon from '../../images/icons/location.png';
import MailIcon from '../../images/icons/mail.png';

export function generateContactPage() {
  let contactPage = document.createElement('main');
  contactPage.id = 'contact-page';

  addHeading(contactPage);
  addContactInformation(contactPage);

  return contactPage;
}

function addHeading(parent) {
  let heading = document.createElement('h2');
  heading.innerText = 'Contact';
  parent.appendChild(heading);
}

function addContactInformation(parent) {
  parent.appendChild(createIconTextPair(CallIcon, '+49 314 1592653'));
  parent.appendChild(createIconTextPair(
    LocationIcon,
    'Fischerstraße 69, 77977 Rust, Germany'
  ));
  parent.appendChild(createIconTextPair(
    MailIcon,
    'mr.wasgehtsiedasan@coderscafe.com'
  ));
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
