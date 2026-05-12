// ================= LOGOUT FUNCTION =================
function handleLogout() {
  if (confirm("Are you sure you want to logout?")) {
    window.location.href = "index.html";
  }
}

// ================= MENU TOGGLE =================
function toggleMenu() {
  const nav = document.querySelector(".navbar-center");
  if (nav) {
    nav.classList.toggle("active");
  }
}

// ================= HELPERS =================
function showSuccess(message) {
  const msg = document.getElementById("successMsg");
  if (!msg) return;
  msg.textContent = message;
  msg.classList.add("show");
  setTimeout(() => msg.classList.remove("show"), 3000);
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// ================= CONTACT ACTIONS =================
function handleEmailClick() {
  window.location.href = "mailto:support@startupcollab.com?subject=Support Request";
}

function handleCallClick() {
  const message = "Calling support at (123) 456-7890

Dial this number to speak with our support team (Mon-Fri, 9 AM - 6 PM).";
  alert(message);
}

function handleChatClick() {
  alert("Live chat connected!

You are now connected with our support agent. How can we help you?");
}

// ================= FORM HANDLERS =================
function setupForm(formId, nameId, emailId, subjectId, messageId) {
  const form = document.getElementById(formId);
  if (!form) return;

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById(nameId)?.value.trim() || "";
    const email = document.getElementById(emailId)?.value.trim() || "";
    const subject = document.getElementById(subjectId)?.value.trim() || "";
    const message = document.getElementById(messageId)?.value.trim() || "";

    if (!name || !email || !subject || !message) {
      alert("Please fill in all required fields");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }

    showSuccess(`Thank you ${name}! Your message has been sent. We will get back to you at ${email}.`);
    form.reset();
  });
}

setupForm("contactForm", "name", "email", "subject", "message");
setupForm("bottomContactForm", "bottomName", "bottomEmail", "bottomSubject", "bottomMessage");

// ================= ENHANCED INTERACTIVITY =================
document.querySelectorAll(".form-input, .form-textarea").forEach(input => {
  input.addEventListener("focus", function() {
    this.style.background = "#fff";
  });

  input.addEventListener("blur", function() {
    if (!this.value) {
      this.style.background = "#f9f9f9";
    }
  });
});

document.querySelectorAll(".option-card").forEach(card => {
  card.addEventListener("mouseenter", function() {
    this.style.transform = "translateY(-4px)";
  });

  card.addEventListener("mouseleave", function() {
    this.style.transform = "translateY(0)";
  });
});

// ================= AUTO-SAVE MAIN FORM =================
const mainForm = document.getElementById("contactForm");
if (mainForm) {
  const saveFormData = () => {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const subjectInput = document.getElementById("subject");
    const messageInput = document.getElementById("message");
    if (!nameInput || !emailInput || !subjectInput || !messageInput) return;

    const formData = {
      name: nameInput.value,
      email: emailInput.value,
      subject: subjectInput.value,
      message: messageInput.value
    };
    localStorage.setItem("contactFormData", JSON.stringify(formData));
  };

  const loadFormData = () => {
    const saved = localStorage.getItem("contactFormData");
    if (!saved) return;
    const data = JSON.parse(saved);
    if (data.name) document.getElementById("name").value = data.name;
    if (data.email) document.getElementById("email").value = data.email;
    if (data.subject) document.getElementById("subject").value = data.subject;
    if (data.message) document.getElementById("message").value = data.message;
  };

  mainForm.addEventListener("input", saveFormData);
  mainForm.addEventListener("submit", () => localStorage.removeItem("contactFormData"));
  window.addEventListener("load", loadFormData);
}
