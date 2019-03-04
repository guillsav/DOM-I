const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png'
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png'
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io'
  },
  footer: {
    copyright: 'Copyright Great Idea! 2018'
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

// Navigation
const navItems = Object.values(siteContent.nav);
navItems.pop();
let navAnchors = document.querySelectorAll('a');
for (let i = 0; i < navAnchors.length; i++) {
  navAnchors[i].textContent = navItems[i];
  navAnchors[i].style.color = 'green';
}

const navItem1 = document.createElement('a');
navItem1.textContent;

// Section CTA
const header = document.querySelector('h1');
header.innerHTML = siteContent.cta.h1.split(' ').join('<br>');
const ctaText = document.querySelector('.cta-text');
const getStarted = ctaText.querySelector('button');
getStarted.textContent = 'Get Started';
const ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent.cta['img-src'];

// Main Content: top-content
const topContent = document.querySelector('.top-content');
const topH4 = topContent.querySelectorAll('h4');
topH4[0].textContent = siteContent['main-content']['features-h4'];
topH4[1].textContent = siteContent['main-content']['about-h4'];
const topText = topContent.querySelectorAll('p');
topText[0].textContent = siteContent['main-content']['features-content'];
topText[1].textContent = siteContent['main-content']['about-content'];

// Main Content: middle-img
const middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];

// Main Content: bottom-content
const bottomContent = document.querySelector('.bottom-content');
const bottomH4 = bottomContent.querySelectorAll('h4');
bottomH4[0].textContent = siteContent['main-content']['services-h4'];
bottomH4[1].textContent = siteContent['main-content']['product-h4'];
const bottomText = bottomContent.querySelectorAll('p');
bottomText[0].textContent = siteContent['main-content']['services-content'];
bottomText[1].textContent = siteContent['main-content']['product-content'];

// Contact
const contact = document.querySelector('.contact');
const contactHeader = contact.querySelector('h4');
contactHeader.textContent = siteContent.contact['contact-h4'];
const contactInfo = contact.getElementsByTagName('p');
contactInfo[0].textContent = siteContent.contact.address;
contactInfo[1].textContent = siteContent.contact.phone;
contactInfo[2].textContent = siteContent.contact.email;

// Footer
const footer = document.querySelector('footer');
const footerText = footer.querySelector('p');
footerText.textContent = siteContent.footer.copyright;
