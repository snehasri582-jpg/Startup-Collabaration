document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('investorForm');
  const msg = document.getElementById('successMsg');
  if (!form) return;

  const showSuccess = (text) => {
    if (!msg) return;
    msg.textContent = text;
    msg.classList.add('show');
    setTimeout(() => msg.classList.remove('show'), 3000);
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    showSuccess('Application received! Our team will contact you within 24 hours.');
    form.reset();
  });
});
