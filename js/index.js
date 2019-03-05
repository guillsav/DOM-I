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
let nav = document.querySelectorAll('nav a');
nav = Array.from(nav);
const navData = Object.values(siteContent.nav);

for (let i = 0; i < nav.length; i++) {
  nav[i].textContent = navData[i];
}

let navigation = document.querySelector('nav');
const newNavItem1 = document.createElement('a');
newNavItem1.textContent = 'Home';
newNavItem1.href = '#';
navigation.prepend(newNavItem1);
const newNavItem2 = document.createElement('a');
newNavItem2.textContent = 'Blog';
newNavItem2.href = '#';
navigation.append(newNavItem2);

const aTags = Array.from(navigation.children);
aTags.forEach(a => (a.style.color = 'green'));

// console.log(Object.values(siteContent['main-content']));
// console.log(Object.keys(siteContent['main-content']));

// Section CTA
let cta = document.querySelectorAll('.cta h1, .cta button, .cta img');
cta = Array.from(cta);
const ctaData = Object.values(siteContent.cta);

for (let i = 0; i < cta.length; i++) {
  if (cta[i].tagName === 'H1') {
    cta[i].innerHTML = ctaData[i].split(' ').join('<br>');
  } else if (cta[i].id) {
    cta[i].src = ctaData[i];
  } else {
    cta[i].textContent = ctaData[i];
  }
}

const mainContent = document.querySelector('.main-content');
mainContent.style.borderTop = '1px solid gray';
mainContent.style.borderBottom = '1px solid gray';

// Main-content: top-content
let topMainContentAndMilldleContent = document.querySelectorAll(
  '.top-content h4, .top-content p, #middle-img'
);
topMainContentAndMilldleContent = Array.from(topMainContentAndMilldleContent);
const mainContentData = Object.values(siteContent['main-content']);

for (let i = 0; i < topMainContentAndMilldleContent.length; i++) {
  if (topMainContentAndMilldleContent[i].className) {
    topMainContentAndMilldleContent[i].src = mainContentData[i];
  }
  topMainContentAndMilldleContent[i].textContent = mainContentData[i];
}

let bottomContent = document.querySelectorAll(
  '.bottom-content h4, .bottom-content p'
);
bottomContent = Array.from(bottomContent);

for (let i = 0; i < bottomContent.length; i++) {
  bottomContent[i].textContent = mainContentData[i + 5];
}

// Contact
let contact = document.querySelectorAll('.contact h4, .contact p');
contact = Array.from(contact);
const contactData = Object.values(siteContent.contact);

for (let i = 0; i < contact.length; i++) {
  contact[i].textContent = contactData[i];
}

// Footer
let footer = document.querySelectorAll('footer p');
footer = Array.from(footer);
const footerData = Object.values(siteContent.footer);

for (let i = 0; i < footer.length; i++) {
  footer[i].textContent = footerData[i];
}
