// ==================== LOGOUT FUNCTION ==================== //

function handleLogout() {
  if (confirm("Are you sure you want to logout?")) {
    window.location.href = "index.html";
  }
}

const modal = document.getElementById("meetingModal");
const openBtn = document.getElementById("scheduleBtn");
const closeBtn = document.querySelector(".close");
const input = document.getElementById("msgInput");
const messages = document.querySelector(".messages");
const chatMsgInput = document.querySelector(".chat-msg-input");
const sendBtn = document.querySelector(".send-btn");
const liveChat = document.querySelector(".live-chat");

// Modal Controls
openBtn.onclick = () => modal.style.display = "block";
closeBtn.onclick = () => modal.style.display = "none";

window.onclick = e => {
  if (e.target === modal) modal.style.display = "none";
};

// Chat Message Sending (Main Chat)
function sendMessage() {
  if (!input.value.trim()) return;

  const row = document.createElement("div");
  row.className = "chat-row sent";

  row.innerHTML = `
    <div class="bubble">${input.value}</div>
    <img src="https://randomuser.me/api/portraits/men/11.jpg">
  `;

  messages.appendChild(row);
  input.value = "";
  messages.scrollTop = messages.scrollHeight;
}

// Live Chat Sending (Zoom Chat)
if (sendBtn) {
  sendBtn.onclick = () => {
    if (!chatMsgInput.value.trim()) return;

    const chatMsg = document.createElement("div");
    chatMsg.className = "chat-message speaker";
    chatMsg.innerHTML = `
      <img src="https://randomuser.me/api/portraits/men/11.jpg" alt="You">
      <div class="message-content">
        <strong>You</strong>
        <p>${chatMsgInput.value}</p>
      </div>
      <span class="time">Just now</span>
    `;

    liveChat.appendChild(chatMsg);
    chatMsgInput.value = "";
    liveChat.scrollTop = liveChat.scrollHeight;
  };

  // Send message on Enter key
  chatMsgInput.onkeypress = (e) => {
    if (e.key === "Enter") {
      sendBtn.click();
    }
  };
}

// Zoom Controls
function zoomAction(action) {
  console.log(action + " clicked");
  
  switch(action) {
    case "Mute":
      alert("🎤 Mute toggled");
      break;
    case "Stop Video":
      alert("📹 Video stopped");
      break;
    case "Chat":
      alert("💬 Chat opened");
      break;
    case "Share Screen":
      alert("🖥️ Screen sharing started");
      break;
    case "Record":
      alert("⏺️ Recording started");
      break;
    default:
      alert(action);
  }
}

function endZoom() {
  if (confirm("Are you sure you want to end the meeting?")) {
    alert("📞 Zoom meeting ended");
  }
}

// Tab Switching
const tabs = document.querySelectorAll(".tab");
if (tabs.length > 0) {
  tabs.forEach(tab => {
    tab.onclick = (e) => {
      tabs.forEach(t => t.classList.remove("active"));
      e.target.classList.add("active");
    };
  });
}

// Upload button functionality
const uploadBtn = document.querySelector(".upload-btn");
if (uploadBtn) {
  uploadBtn.onclick = () => {
    alert("File upload dialog would open here");
  };
}

// View Report buttons
const viewBtns = document.querySelectorAll(".view-btn");
viewBtns.forEach(btn => {
  btn.onclick = () => {
    alert("Opening progress report...");
  };
});

// Scroll live chat to bottom on load
window.addEventListener("load", () => {
  if (liveChat) {
    liveChat.scrollTop = liveChat.scrollHeight;
  }
});
