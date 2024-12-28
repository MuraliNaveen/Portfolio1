// Select DOM elements
const hamburger = document.querySelector('.header .nav-bar .hamburger');
const mobileMenu = document.querySelector('.header .nav-bar .nav-list');
const menuItems = document.querySelectorAll('.header .nav-bar .nav-list li a');
const header = document.querySelector('.header.container');

// Toggle mobile menu
if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });
}

// Smooth scrolling for navigation links
menuItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    if (item.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      const targetId = item.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      targetElement.scrollIntoView({ behavior: 'smooth' });
      // Close mobile menu on item click
      if (hamburger && mobileMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
      }
    }
  });
});

// Sticky header on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.backgroundColor = '#333';
    header.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
  } else {
    header.style.backgroundColor = 'transparent';
    header.style.boxShadow = 'none';
  }
});
