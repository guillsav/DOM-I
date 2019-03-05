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
}

// Add new Items to Navigation & change Navigation's color
const navigation = document.querySelector('nav');
const navItem1 = document.createElement('a');
navItem1.textContent = 'Home';
navItem1.href = '#';
const navItem2 = document.createElement('a');
navItem2.textContent = 'Blog';
navItem2.href = '#';
navigation.prepend(navItem1);
navigation.append(navItem2);
const aTags = Array.from(navigation.children);
aTags.forEach(child => {
  child.style.color = 'green';
});

// console.log(Object.values(siteContent['main-content']));
// console.log(Object.keys(siteContent['main-content']));

// Section CTA
const header = document.querySelector('h1');
header.innerHTML = siteContent.cta.h1.split(' ').join('<br>');
const ctaText = document.querySelector('.cta-text');
const getStarted = ctaText.querySelector('button');
getStarted.textContent = 'Get Started';
getStarted.style.borderRadius = '3px';
const ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent.cta['img-src'];

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
// const contact = document.querySelector('.contact');
// const contactHeader = contact.querySelector('h4');
// contactHeader.textContent = siteContent.contact['contact-h4'];
// const contactInfo = contact.getElementsByTagName('p');
// contactInfo[0].textContent = siteContent.contact.address;
// contactInfo[1].textContent = siteContent.contact.phone;
// contactInfo[2].textContent = siteContent.contact.email;

// Footer
const footer = document.querySelector('footer');
const footerText = footer.querySelector('p');
footerText.textContent = siteContent.footer.copyright;
