// Dark mode toggle
const toggleBtn = document.getElementById('darkToggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Simple scroll animation
window.addEventListener('scroll', () => {
  document.querySelectorAll('.reveal').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});
// ============ CONTACT FORM VALIDATION ============
function validateForm() {
  // Elements
  const nameEl = document.getElementById('name');
  const emailEl = document.getElementById('email');
  const messageEl = document.getElementById('message');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  const successEl = document.getElementById('formSuccess');

  // Clear previous messages
  [nameError, emailError, messageError, successEl].forEach(el => el.textContent = '');

  const name = nameEl.value.trim();
  const email = emailEl.value.trim();
  const message = messageEl.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let valid = true;

  if (!name) {
    nameError.textContent = 'Please enter your name.';
    valid = false;
  }

  if (!email) {
    emailError.textContent = 'Please enter your email address.';
    valid = false;
  } else if (!emailPattern.test(email)) {
    emailError.textContent = 'Enter a valid email address.';
    valid = false;
  }

  if (!message) {
    messageError.textContent = 'Please enter a message.';
    valid = false;
  } else if (message.length < 10) {
    messageError.textContent = 'Message should be at least 10 characters long.';
    valid = false;
  }

  if (valid) {
    successEl.textContent = '✅ Message sent successfully (demo)!';
    // If you want to prevent page reload, return false here
    // return false;
  }

  return valid;
}
