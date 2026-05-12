// ================= LOGOUT FUNCTION =================
function handleLogout() {
  if (confirm("Are you sure you want to logout?")) {
    window.location.href = "index.html";
  }
}

const fileInput = document.getElementById("fileInput");
const fileInfo = document.getElementById("fileInfo");

function navigate(page) {
  alert("Navigating to " + page + " page");
}

function viewIdeas() {
  alert("Opening My Ideas page");
}

function resubmit() {
  alert("Resubmit request sent");
}

function selectFile() {
  if (fileInput) fileInput.click();
}

if (fileInput) {
  fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
    if (!file) return;

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ];

    if (!allowedTypes.includes(file.type)) {
      alert("Only PDF, DOC, DOCX files are allowed");
      fileInput.value = "";
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      alert("File size must be under 10 MB");
      fileInput.value = "";
      return;
    }

    if (fileInfo) {
      fileInfo.innerHTML = `?? ${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)`;
    }
  });
}

function submitUpdate() {
  if (!fileInput || !fileInput.files.length) {
    alert("Please upload a file first");
    return;
  }
  alert("Project update submitted successfully");
}
