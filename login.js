 let selectedRole = 'student';

// Select Role Tab
function selectRole(element, role) {
  document.querySelectorAll('.role-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  element.classList.add('active');
  selectedRole = role;
  
  // Trigger animation
  element.style.animation = 'none';
  setTimeout(() => {
    element.style.animation = 'fadeScale 0.4s ease';
  }, 10);
}

// Create Account Redirect based on role
function createAccountRedirect(event) {
  event.preventDefault();
  if (selectedRole === "student") {
    window.location.href = "studentregisteration.html";
  } else if (selectedRole === "investor") {
    window.location.href = "investorregisteration.html";
  } else if (selectedRole === "admin") {
    alert("Admin accounts can only be created by administrators.");
  }
}

// Switch Auth Tab
function switchTab(element, tab) {
  document.querySelectorAll('.auth-tab').forEach(t => {
    t.classList.remove('active');
  });
  element.classList.add('active');
  
  // Redirect to create account page when Sign Up is clicked
  if (tab === 'signup') {
    setTimeout(() => {
      if (selectedRole === "student") {
        window.location.href = "studentregisteration.html";
      } else if (selectedRole === "investor") {
        window.location.href = "investorregisteration.html";
      } else if (selectedRole === "admin") {
        alert("Admin accounts can only be created by administrators.");
      }
    }, 300);
    return;
  }
  
  // Trigger animation    
  element.style.animation = 'none';
  setTimeout(() => {
    element.style.animation = 'fadeScale 0.4s ease';
  }, 10);
  
  // Animate form fields
  document.querySelectorAll('.input-group').forEach((input, index) => {
    input.style.animation = 'none';
    setTimeout(() => {
      input.style.animation = `slideIn 0.3s ease ${index * 0.1}s backwards`;
    }, 10);
  });
}

// Login Button
document.getElementById("loginBtn").addEventListener("click", () => {
  const btn = document.getElementById("loginBtn");
  btn.style.animation = 'fadeScale 0.5s ease';
  
  setTimeout(() => {
    if (selectedRole === "student") {
      window.location.href = "studenthome.html";
    } else if (selectedRole === "investor") {
      window.location.href = "investorhome.html";
    } else if (selectedRole === "admin") {
      window.location.href = "admin.html";
    }
  }, 300);
});
