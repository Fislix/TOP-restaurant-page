export function generateContactPage() {
  let contactPage = document.createElement('main');
  contactPage.id = 'contact-page';
  let heading = document.createElement('h2');
  heading.innerText = 'Contact';
  contactPage.appendChild(heading);

  let phoneNumber = document.createElement('p');
  phoneNumber.innerText = 'Phone: +49 314 1592653';
  let address = document.createElement('p');
  address.innerText = 'Address: Fischerstraße 69, 77977 Rust, Germany';
  
  contactPage.appendChild(phoneNumber);
  contactPage.appendChild(address);

  return contactPage;
}
