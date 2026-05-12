// Send Reset Email
function sendResetEmail() {
  const email = document.getElementById('resetEmail').value;
  
  if (!email) {
    alert('Please enter your email address');
    return;
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address');
    return;
  }
  
  // Show success message
  const btn = document.querySelector('.reset-btn');
  const originalText = btn.textContent;
  
  btn.textContent = '✓ Email Sent Successfully!';
  btn.style.background = 'linear-gradient(135deg, #4CAF50, #66BB6A)';
  btn.disabled = true;
  
  setTimeout(() => {
    alert(`Password reset instructions have been sent to ${email}. Please check your email and spam folder.`);
    btn.textContent = originalText;
    btn.style.background = 'linear-gradient(135deg, #ff6a00, #ff8a3d)';
    btn.disabled = false;
    document.getElementById('resetEmail').value = '';
  }, 1500);
}

// Allow Enter key to send email
document.getElementById('resetEmail').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    sendResetEmail();
  }
});

console.log('Forgot Password page loaded');
