// Back navigation
document.addEventListener("DOMContentLoaded", () => {
  const backBtn = document.querySelector(".logo a");
  if (backBtn) {
    backBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.history.back();
    });
  }
});

// Pitch button action (placeholder)
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("signup-btn")) {
    e.preventDefault();
    alert("Pitch deck will be available soon.");
  }
});
