function showService(serviceId) {
  document.querySelectorAll('.service-section').forEach(section => {
    section.style.display = 'none';
  });

  const section = document.getElementById(serviceId);
  if (section) {
    section.style.display = 'block';
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

function openModal(type) {
  document.getElementById('modal').style.display = 'block';
  switchForm(type);
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

function switchForm(type) {
  document.getElementById('login-form').style.display = type === 'login' ? 'block' : 'none';
  document.getElementById('signup-form').style.display = type === 'signup' ? 'block' : 'none';
}

// Optional: Close modal on background click
window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    closeModal();
  }
};
