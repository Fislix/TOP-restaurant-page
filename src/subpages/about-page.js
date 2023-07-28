export function generateAboutPage() {
  let aboutPage = document.createElement('div');
  let description = document.createElement('p');
  description.innerText = 'Welcome to Coder\'s Café! Every coder will find ' +
    'something to enjoy here, no matter how bad their taste in programming ' + 
    'languages is!';
  aboutPage.appendChild(description)
  return aboutPage;
}

