document.getElementById("investorForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("❌ Password and Confirm Password do not match");
    return;
  }

  alert("✅ Investor account created successfully!");
  this.reset();
});
