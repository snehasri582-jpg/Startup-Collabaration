// ===== NAV ACTIVE =====
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop();

  document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});

// ===== TOGGLE DETAILS =====
function toggleDetails(button) {
  const featureCard = button.parentElement;
  const details = featureCard.querySelector('.feature-details');
  
  if (details.classList.contains('expanded')) {
    details.classList.remove('expanded');
    button.textContent = 'Show More';
  } else {
    details.classList.add('expanded');
    button.textContent = 'Show Less';
  }
}

console.log("About page loaded");
