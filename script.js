// Theme toggle button logic
const themeToggleBtn = document.getElementById('theme-toggle');
const rootElement = document.documentElement;

function setTheme(theme) {
  rootElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  themeToggleBtn.textContent = theme === 'light' ? '🌙' : '☀️';
}

themeToggleBtn.addEventListener('click', () => {
  const currentTheme = rootElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
});

// Initialize theme on page load based on saved preference or system
(function () {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }
})();

// Contact form validation and dummy submit handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const response = document.getElementById('formResponse');
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !message) {
      response.textContent = 'Please fill in all fields.';
      response.style.color = 'red';
      return;
    }

    // Simple email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      response.textContent = 'Please enter a valid email address.';
      response.style.color = 'red';
      return;
    }

    response.style.color = 'var(--clr-primary-dark)';
    response.textContent = 'Sending your message...';

    // Simulate async send
    setTimeout(() => {
      response.textContent = 'Thank you for contacting us! We will get back to you soon.';
      contactForm.reset();
    }, 1500);
  });
}
