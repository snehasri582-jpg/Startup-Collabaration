/* =====================================================
   ADMIN DASHBOARD PAGE - JAVASCRIPT
   ===================================================== */

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

function logout() {
  if (confirm("Are you sure you want to logout?")) {
    window.location.href = "index.html";
  }
}

function saveSettings() {
  alert("Settings saved successfully.");
}

let currentUser = "";
let currentUserDP = "";

function openChat(name, dpUrl) {
  currentUser = name;
  currentUserDP = dpUrl || "";

  const titleDiv = document.getElementById("chatName");
  const roleDiv = document.getElementById("chatRole");
  const dpImg = document.getElementById("chatDP");
  const messages = document.getElementById("chatMessages");

  if (!titleDiv || !messages) return;

  titleDiv.textContent = name;
  if (roleDiv) {
    roleDiv.textContent = name.includes("Patel") || name.includes("Verma") ? "Investor" : "Student";
  }
  if (dpImg) dpImg.src = dpUrl || "";
  messages.innerHTML = "";

  const greet = document.createElement("div");
  greet.className = "msg-received";
  greet.innerHTML = "<span>Hello! How can I help you?</span>";
  messages.appendChild(greet);
  messages.scrollTop = messages.scrollHeight;
}

function sendMessage() {
  const input = document.getElementById("chatInput");
  const messages = document.getElementById("chatMessages");

  if (!input || !messages) return;
  if (!currentUser) {
    alert("Please select a user to start messaging.");
    return;
  }

  const text = input.value.trim();
  if (!text) return;

  const msg = document.createElement("div");
  msg.className = "msg-sent";
  msg.innerHTML = `<span>${text}</span>`;
  messages.appendChild(msg);
  input.value = "";
  messages.scrollTop = messages.scrollHeight;

  setTimeout(() => {
    const reply = document.createElement("div");
    reply.className = "msg-received";
    reply.innerHTML = "<span>Thanks for your message!</span>";
    messages.appendChild(reply);
    messages.scrollTop = messages.scrollHeight;
  }, 800);
}

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("chatInput");
  if (input) {
    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        sendMessage();
      }
    });
  }

  const chartCanvas = document.getElementById("collabChart");
  if (chartCanvas && window.Chart) {
    const ctx = chartCanvas.getContext("2d");
    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
        datasets: [
          {
            label: "Partnerships",
            data: [5, 8, 12, 15, 18],
            borderColor: "#ff6a00",
            backgroundColor: "rgba(255, 106, 0, 0.1)",
            borderWidth: 3,
            fill: true,
            tension: 0.4,
            pointRadius: 5,
            pointBackgroundColor: "#ff6a00",
            pointBorderColor: "#fff",
            pointBorderWidth: 2,
          },
          {
            label: "Investments",
            data: [20, 35, 50, 75, 120],
            borderColor: "#0066ff",
            backgroundColor: "rgba(0, 102, 255, 0.1)",
            borderWidth: 3,
            fill: true,
            tension: 0.4,
            pointRadius: 5,
            pointBackgroundColor: "#0066ff",
            pointBorderColor: "#fff",
            pointBorderWidth: 2,
          }
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            display: true,
            position: "top",
            labels: {
              color: "#333",
              font: { size: 13, weight: "bold" },
              padding: 15,
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: { color: "#999", font: { size: 12 } },
            grid: { color: "rgba(0, 0, 0, 0.05)" }
          },
          x: {
            ticks: { color: "#999", font: { size: 12 } },
            grid: { color: "rgba(0, 0, 0, 0.05)" }
          }
        }
      }
    });
  }

  const cards = document.querySelectorAll(".animate, .animated-card");
  if (cards.length && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.2 });

    cards.forEach(card => observer.observe(card));
  }
});
