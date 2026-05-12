// Back navigation (←)
document.addEventListener("DOMContentLoaded", () => {
  const backLink = document.querySelector(".logo a");
  if (backLink) {
    backLink.addEventListener("click", (e) => {
      e.preventDefault();
      window.history.back();
    });
  }
});

// View Pitch button placeholder
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("signup-btn")) {
    e.preventDefault();
    alert("Pitch deck will be available soon.");
  }
});
