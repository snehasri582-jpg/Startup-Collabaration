// Navbar back button
document.addEventListener("DOMContentLoaded", () => {
  const backBtn = document.querySelector(".logo a");
  if (backBtn) {
    backBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.history.back();
    });
  }
});

// Optional: Pitch button click
const pitchBtn = document.querySelector(".signup-btn");
if (pitchBtn) {
  pitchBtn.addEventListener("click", () => {
    alert("Pitch deck will open here.");
  });
}
