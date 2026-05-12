 
 /* =====================================================
   STUDENT IDEA PAGE - JAVASCRIPT
   ===================================================== */

/* ---------------- SIDEBAR TOGGLE WITH ANIMATION ---------------- */
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const backdrop = document.querySelector(".sidebar-backdrop");
  const body = document.body;
  
  if (sidebar && backdrop) {
    sidebar.classList.toggle("open");
    backdrop.classList.toggle("open");
    body.classList.toggle("sidebar-open");
  }
}

/* ---------------- CLOSE SIDEBAR ---------------- */
function closeSidebar() {
  const sidebar = document.getElementById("sidebar");
  const backdrop = document.querySelector(".sidebar-backdrop");
  const body = document.body;
  
  if (sidebar && backdrop) {
    sidebar.classList.remove("open");
    backdrop.classList.remove("open");
    body.classList.remove("sidebar-open");
  }
}

/* ---------------- LOGOUT FUNCTION ---------------- */
function logout() {
  if (confirm("Are you sure you want to logout?")) {
    window.location.href = "index.html";
  }
}

/* ---------------- CHAT STATE ---------------- */
let currentUser = "";

/* ---------------- TOGGLE CHAT PANEL ---------------- */
function toggleChat() {
  const overlay = document.getElementById("chatOverlay");

  if (!overlay) return;

  overlay.style.display =
    overlay.style.display === "flex" ? "none" : "flex";
}

/* ---------------- OPEN CHAT WITH USER ---------------- */
function openChat(name) {
  currentUser = name;

  const header = document.getElementById("chatHeader");
  const messages = document.getElementById("chatMessages");

  if (!header || !messages) return;

  header.textContent = name;
  messages.innerHTML = "";

  // Initial greeting message
  const greet = document.createElement("div");
  greet.className = "msg-received";
  greet.innerHTML = "<span>Hello 👋 How can I help you?</span>";
  messages.appendChild(greet);

  messages.scrollTop = messages.scrollHeight;
}

/* ---------------- SEND MESSAGE ---------------- */
function sendMessage() {
  const input = document.getElementById("msg");
  const messages = document.getElementById("chatMessages");

  if (!input || !messages) return;

  if (!currentUser) {
    alert("Please select a user to start chatting.");
    return;
  }

  const text = input.value.trim();
  if (text === "") return;

  // Sent message
  const msg = document.createElement("div");
  msg.className = "msg-sent";
  msg.innerHTML = `<span>${text}</span>`;
  messages.appendChild(msg);

  input.value = "";
  messages.scrollTop = messages.scrollHeight;

  // Auto-reply (demo)
  setTimeout(() => {
    const reply = document.createElement("div");
    reply.className = "msg-received";
    reply.innerHTML = "<span>Thanks for your message 👍</span>";
    messages.appendChild(reply);
    messages.scrollTop = messages.scrollHeight;
  }, 800);
}

/* ---------------- SUBMIT IDEA ---------------- */
function submitIdea() {
  alert("🎉 Your startup idea has been submitted successfully!");
}

/* ---------------- ENTER KEY SUPPORT & PAGE INITIALIZATION ---------------- */
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("msg");

  if (input) {
    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        sendMessage();
      }
    });
  }

  /* DEMO: Submit Idea Button */
  const submitBtn = document.querySelector(".btn.full");
  if (submitBtn) {
    submitBtn.addEventListener("click", () => {
      alert("Startup idea submitted successfully! (Demo)");
    });
  }

  // Card animation on scroll
  const cards = document.querySelectorAll(".animated-card");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));
});


