// ================= LOGOUT FUNCTION =================
function handleLogout() {
  if (confirm("Are you sure you want to logout?")) {
    window.location.href = "index.html";
  }
}

// ================= NAV ACTIVE =================
document.addEventListener("DOMContentLoaded", () => {
  const page = window.location.pathname.split("/").pop();
  document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === page) {
      link.classList.add("active");
    }
  });
});

// ================= CONTACT FORM =================
const form = document.getElementById("contactForm");
const msg = document.getElementById("successMsg");

function showSuccess(text) {
  if (!msg) return;
  msg.textContent = text;
  msg.classList.add("show");
  setTimeout(() => msg.classList.remove("show"), 3000);
}

if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    showSuccess("Message sent successfully!");
    form.reset();
  });
}

// ================= FAQ TOGGLE =================
document.querySelectorAll(".faq-question").forEach(q => {
  q.addEventListener("click", () => {
    const ans = q.nextElementSibling;
    if (!ans) return;
    ans.style.display = ans.style.display === "block" ? "none" : "block";
  });
});
