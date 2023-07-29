export function generateAboutPage() {
  let aboutPage = document.createElement('main');
  aboutPage.id = 'about-page';

  let greeting = document.createElement('h2');
  greeting.innerText = 'Welcome to Coder\'s Café!';
  aboutPage.appendChild(greeting);

  let description = document.createElement('p');
  description.innerText = 'Every coder will find something to enjoy here, ' +
    'no matter how bad their taste in programming languages is!';
  aboutPage.appendChild(description);

  return aboutPage;
}

