const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.navbar-links');

// Toggle navbar open/close
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Close navbar when clicking outside
document.addEventListener('click', (event) => {
  if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
    navLinks.classList.remove('show');
  }
});

// Close navbar on Escape key press
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    navLinks.classList.remove('show');
  }
});
