// USER DATA
const userData = {
  name: "Amit Mehra",
  university: "Boston University",
  field: "Computer Science"
};

const startupsData = [
  {
    id: 1,
    name: "TechInnovate",
    description: "AI-powered education platform",
    views: 540,
    category: "tech"
  },
  {
    id: 2,
    name: "EcoCharge",
    description: "Sustainable electric vehicle charging station network",
    views: 370,
    category: "sustainability"
  }
];

const messagesData = [
  {
    id: 1,
    sender: "Rajesh Kapoor",
    message: "Interested in your AI startup",
    time: "2 hours ago",
    avatar: "👤"
  },
  {
    id: 2,
    sender: "Dr. Samantha Lee",
    message: "I'd like to discuss your new green energy project.",
    time: "5 hours ago",
    avatar: "👩"
  },
  {
    id: 3,
    sender: "Priya Singh",
    message: "Great work on the TechInnovate pitch",
    time: "1 day ago",
    avatar: "👩"
  },
  {
    id: 4,
    sender: "John Developer",
    message: "Want to collaborate on EcoCharge?",
    time: "2 days ago",
    avatar: "👨"
  }
];

const investorsData = [
  {
    id: 1,
    name: "Ajay Tandon",
    title: "Angel Investor. Funded 15 Startups",
    connections: "8 mutual connections",
    avatar: "👤"
  },
  {
    id: 2,
    name: "Lisa Chen",
    title: "VC at Seed Ventures",
    connections: "5 mutual connections",
    avatar: "👩"
  },
  {
    id: 3,
    name: "Michael Wong",
    title: "Venture Capitalist",
    connections: "12 mutual connections",
    avatar: "👨"
  },
  {
    id: 4,
    name: "Sarah Johnson",
    title: "Partner at Tech Fund",
    connections: "3 mutual connections",
    avatar: "👩"
  }
];

/* NAVIGATION HANDLER */
function handleNavClick(e, page) {
  // Direct navigation will happen automatically via href
  console.log("Navigating to: " + page);
}

/* LOGOUT HANDLER */
function handleLogout() {
  if (confirm("Are you sure you want to logout?")) {
    // Redirect to index.html (main home page)
    window.location.href = "index.html";
  }
}

/* TOGGLE MOBILE MENU */
function toggleMenu() {
  const nav = document.querySelector(".navbar-center");
  nav.classList.toggle("active");
}

/* EDIT PROFILE */
function editProfile(event) {
  if (event) event.preventDefault();
  
  const modal = document.getElementById("profileModal");
  document.getElementById("fullName").value = userData.name;
  document.getElementById("university").value = userData.university;
  document.getElementById("fieldOfStudy").value = userData.field;
  
  modal.classList.add("active");
}

function closeProfileModal() {
  const modal = document.getElementById("profileModal");
  modal.classList.remove("active");
}

document.getElementById("editProfileForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  userData.name = document.getElementById("fullName").value;
  userData.university = document.getElementById("university").value;
  userData.field = document.getElementById("fieldOfStudy").value;
  
  // Update UI
  document.querySelector(".name").textContent = userData.name;
  document.querySelector(".profile-info h2").textContent = userData.name;
  document.querySelector(".profile-info .university").textContent = userData.university;
  document.querySelector(".profile-info .field").textContent = userData.field;
  
  alert("✅ Profile updated successfully!");
  closeProfileModal();
});

/* CREATE STARTUP */
function createStartup(event) {
  if (event) event.preventDefault();
  
  const modal = document.getElementById("startupModal");
  document.getElementById("createStartupForm").reset();
  modal.classList.add("active");
}

function closeStartupModal() {
  const modal = document.getElementById("startupModal");
  modal.classList.remove("active");
}

document.getElementById("createStartupForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const name = document.getElementById("startupName").value;
  const description = document.getElementById("startupDescription").value;
  const category = document.getElementById("startupCategory").value;
  
  const newStartup = {
    id: startupsData.length + 1,
    name: name,
    description: description,
    views: 0,
    category: category
  };
  
  startupsData.push(newStartup);
  
  alert(`✅ Startup "${name}" created successfully!`);
  closeStartupModal();
  
  console.log("New startup:", newStartup);
});

/* EDIT STARTUP */
function editStartup(button) {
  const startupItem = button.closest(".startup-item");
  const startupName = startupItem.querySelector("h4").textContent;
  
  alert(`✏️ Editing startup: ${startupName}\n\nThis would open the startup editing interface.`);
  
  console.log("Edit startup:", startupName);
}

/* REPLY TO MESSAGE */
function replyMessage(messageId) {
  const message = messagesData.find(m => m.id === messageId);
  if (message) {
    alert(`📧 Replying to: ${message.sender}\n\nThis would open a reply interface.`);
    console.log("Reply to message:", message);
  }
}

/* VIEW ALL MESSAGES */
function viewAllMessages(event) {
  if (event) event.preventDefault();
  
  const modal = document.getElementById("messagesModal");
  const messagesContainer = document.getElementById("allMessages");
  
  messagesContainer.innerHTML = messagesData.map(msg => `
    <div class="message-item">
      <div class="message-avatar">${msg.avatar}</div>
      <div class="message-content">
        <h4>${msg.sender}</h4>
        <p>${msg.message}</p>
        <span class="message-time">${msg.time}</span>
      </div>
      <div class="status-dot"></div>
    </div>
  `).join("");
  
  modal.classList.add("active");
}

function closeMessagesModal() {
  const modal = document.getElementById("messagesModal");
  modal.classList.remove("active");
}

/* VIEW ALL INVESTORS */
function viewInvestors(event) {
  if (event) event.preventDefault();
  
  const modal = document.getElementById("investorsModal");
  const investorsContainer = document.getElementById("allInvestors");
  
  investorsContainer.innerHTML = investorsData.map(investor => `
    <div class="investor-item">
      <div class="investor-avatar">${investor.avatar}</div>
      <div class="investor-content">
        <h4>${investor.name}</h4>
        <p>${investor.title}</p>
        <span class="connections">${investor.connections}</span>
      </div>
      <div class="status-dot"></div>
    </div>
  `).join("");
  
  modal.classList.add("active");
}

function closeInvestorsModal() {
  const modal = document.getElementById("investorsModal");
  modal.classList.remove("active");
}

/* CLOSE MODALS ON OUTSIDE CLICK */
window.addEventListener("click", function(event) {
  const profileModal = document.getElementById("profileModal");
  const startupModal = document.getElementById("startupModal");
  const messagesModal = document.getElementById("messagesModal");
  const investorsModal = document.getElementById("investorsModal");
  
  if (event.target === profileModal) {
    closeProfileModal();
  }
  if (event.target === startupModal) {
    closeStartupModal();
  }
  if (event.target === messagesModal) {
    closeMessagesModal();
  }
  if (event.target === investorsModal) {
    closeInvestorsModal();
  }
});

/* KEYBOARD ESCAPE TO CLOSE MODALS */
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeProfileModal();
    closeStartupModal();
    closeMessagesModal();
    closeInvestorsModal();
  }
});

/* SMOOTH SCROLL FOR LINKS */
document.querySelectorAll('a[href="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    if (!this.onclick) {
      e.preventDefault();
    }
  });
});

/* LOG PAGE LOAD */
console.log("Student Dashboard loaded successfully");
console.log("User:", userData);
console.log("Startups:", startupsData);
console.log("Messages:", messagesData);
console.log("Investors:", investorsData);
