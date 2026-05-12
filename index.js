// ================= NAV ACTIVE =================
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop();

  document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});

// ================= NAV BUTTONS =================
function goStudent() {
  window.location.href = "login.html";
}

function goInvestor() {
  window.location.href = "login.html";
}

// ================= TOGGLE STEP DETAILS =================
function toggleStepDetails(button) {
  const howStep = button.parentElement;
  const content = howStep.querySelector('.step-content');
  
  if (content.classList.contains('expanded')) {
    content.classList.remove('expanded');
    button.textContent = 'Show More';
  } else {
    content.classList.add('expanded');
    button.textContent = 'Show Less';
  }
}

console.log("StartupCollab Home Page Loaded");
