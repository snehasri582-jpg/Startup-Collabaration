// ==================== LOGOUT FUNCTION ==================== //
function handleLogout() {
  if (confirm("Are you sure you want to logout?")) {
    window.location.href = "index.html";
  }
}

const activeProjects = [
  {
    id: 1,
    name: "TechInnovate",
    category: "Tech",
    founder: "Amit Mehra",
    founderRole: "Founder",
    founderUniversity: "Boston University",
    description: "AI-powered education platform",
    investmentAmount: "$230,000",
    progress: 65,
    date: "May 5, 2024",
    status: "Pending Review",
    updates: 13,
    comments: 13,
    trending: true
  },
  {
    id: 2,
    name: "EcoCharge",
    category: "Sustainability",
    founder: "Sneha Patil",
    founderRole: "Founder",
    founderUniversity: "Stanford University",
    description: "Sustainable EV charging network",
    investmentAmount: "$100,000",
    progress: 45,
    date: "Apr 9, 2024",
    status: "Tomorrow",
    updates: 15,
    comments: 15,
    trending: false
  },
  {
    id: 3,
    name: "HealthNest",
    category: "Health",
    founder: "Mohit Agarwal",
    founderRole: "Founder",
    founderUniversity: "MIT",
    description: "Personalized health and wellness app",
    investmentAmount: "$50,000",
    progress: 80,
    date: "Mar 15, 2024",
    status: "6 days",
    updates: 12,
    comments: 10,
    trending: false
  },
  {
    id: 4,
    name: "SmartFarm",
    category: "Tech",
    founder: "Raj Patel",
    founderRole: "Founder",
    founderUniversity: "Stanford University",
    description: "IoT-based agricultural management system",
    investmentAmount: "$180,000",
    progress: 55,
    date: "Feb 20, 2024",
    status: "On Track",
    updates: 8,
    comments: 12,
    trending: false
  }
];

const previousProjects = [
  {
    id: 5,
    name: "FinFlow",
    category: "Fintech",
    founder: "Priya Singh",
    founderRole: "Founder",
    founderUniversity: "MIT",
    description: "Personal finance management app",
    investmentAmount: "$75,000",
    progress: 100,
    date: "Jan 10, 2024",
    status: "Completed",
    updates: 22,
    comments: 18,
    trending: false
  },
  {
    id: 6,
    name: "EduLearn",
    category: "Tech",
    founder: "Alex Chen",
    founderRole: "Founder",
    founderUniversity: "Harvard University",
    description: "Online learning platform with AI tutoring",
    investmentAmount: "$150,000",
    progress: 100,
    date: "Dec 5, 2023",
    status: "Completed",
    updates: 30,
    comments: 25,
    trending: false
  },
  {
    id: 7,
    name: "GreenGrow",
    category: "Sustainability",
    founder: "Lisa Wong",
    founderRole: "Founder",
    founderUniversity: "UC Berkeley",
    description: "Sustainable urban farming solutions",
    investmentAmount: "$95,000",
    progress: 100,
    date: "Nov 1, 2023",
    status: "Completed",
    updates: 20,
    comments: 16,
    trending: false
  }
];

let currentFilter = "active";
const projectsList = document.getElementById("projectsList");

function renderProjects(list) {
  if (!projectsList) return;
  projectsList.innerHTML = "";
  if (list.length === 0) {
    projectsList.innerHTML = '<p style="text-align: center; padding: 40px; color: #999;">No projects found</p>';
    return;
  }

  list.forEach(p => {
    projectsList.innerHTML += createProjectCard(p);
  });
}

function createProjectCard(p) {
  return `
  <div class="project-card">
    <div class="project-left">
      <div class="project-header">
        <h2 class="project-title">${p.name}</h2>
        <span class="project-badge">${getCategoryIcon(p.category)} ${p.category}</span>
      </div>

      <div class="project-founder">
        <div class="founder-avatar">${getAvatarEmoji(p.founder)}</div>
        <div class="founder-info">
          <div class="founder-name">${p.founder}</div>
          <div class="founder-university">${p.founderUniversity}</div>
          <span class="founder-role">${p.founderRole}</span>
        </div>
      </div>

      <p class="project-description">${p.description}</p>
      <div class="project-amount">Invested: ${p.investmentAmount}</div>

      <div class="progress-section">
        <div class="progress-label">
          <span>Project Progress</span>
          <span>${p.progress}%</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${p.progress}%"></div>
        </div>
      </div>

      <div class="project-meta">
        <div class="meta-item">
          <span>??</span>
          <span>${p.date}</span>
        </div>
        <div class="meta-item">
          <span>${p.status === 'Pending Review' ? '?' : p.status === 'Tomorrow' ? '?' : p.status === 'On Track' ? '?' : '?'}</span>
          <span>${p.status}</span>
        </div>
      </div>

      <div class="project-meta">
        <div class="meta-item">
          <span>??</span>
          <span>${p.updates} updates</span>
        </div>
        <div class="meta-item">
          <span>??</span>
          <span>${p.comments} Comments</span>
        </div>
        <div class="meta-item">
          <span>${p.category}</span>
        </div>
      </div>

      <div class="project-actions">
        <button class="action-btn" onclick="viewUpdates(${p.id})">View Updates ?</button>
      </div>
    </div>

    <div class="project-right">
      <div class="avatar-group">
        <div class="small-avatar">??</div>
        <div class="small-avatar">??</div>
        <div class="small-avatar">??</div>
        <div class="small-avatar">??</div>
        <div class="small-avatar">??</div>
      </div>
      <div class="update-info">?? ${p.updates} updates</div>
      <div class="update-info" style="margin-top: 4px;">?? ${p.comments} Comments</div>
      <div class="update-info" style="margin-top: 4px;">? Due in ${p.status === 'Tomorrow' ? '1 day' : '3 days'}</div>
    </div>
  </div>`;
}

function getCategoryIcon(category) {
  const icons = {
    'Tech': '??',
    'Health': '??',
    'Sustainability': '??',
    'Fintech': '??',
    'Education': '??'
  };
  return icons[category] || '??';
}

function getAvatarEmoji(name) {
  const avatars = {
    'Amit Mehra': '??',
    'Sneha Patil': '??',
    'Mohit Agarwal': '??',
    'Raj Patel': '??',
    'Priya Singh': '??',
    'Alex Chen': '??',
    'Lisa Wong': '??'
  };
  return avatars[name] || '??';
}

function showProjects(type, evt) {
  currentFilter = type;
  document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
  const buttons = Array.from(document.querySelectorAll(".tab-btn"));
  const activeBtn = evt?.currentTarget || buttons.find(btn => btn.textContent.toLowerCase().includes(type));
  if (activeBtn) activeBtn.classList.add("active");

  const data = type === "active" ? activeProjects : previousProjects;
  renderProjects(data);
}

const sortFilter = document.getElementById("sortFilter");
if (sortFilter) {
  sortFilter.addEventListener("change", (e) => {
    const sortValue = e.target.value;
    const data = currentFilter === "active" ? activeProjects : previousProjects;
    let sorted = [...data];

    switch (sortValue) {
      case "progress":
        sorted = sorted.sort((a, b) => b.progress - a.progress);
        break;
      case "amount":
        sorted = sorted.sort((a, b) => {
          const amountA = parseInt(a.investmentAmount.replace(/[$,]/g, ''));
          const amountB = parseInt(b.investmentAmount.replace(/[$,]/g, ''));
          return amountB - amountA;
        });
        break;
      default:
        sorted = sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    renderProjects(sorted);
  });
}

const searchInput = document.querySelector(".search-input");
if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const data = currentFilter === "active" ? activeProjects : previousProjects;
    const filtered = data.filter(p =>
      p.name.toLowerCase().includes(searchTerm) ||
      p.description.toLowerCase().includes(searchTerm) ||
      p.founder.toLowerCase().includes(searchTerm)
    );
    renderProjects(filtered);
  });
}

function viewUpdates(projectId) {
  const project = [...activeProjects, ...previousProjects].find(p => p.id === projectId);
  if (project) {
    alert(`Viewing updates for ${project.name}. This would open a detailed updates page.`);
  }
}

function toggleMenu() {
  const nav = document.querySelector(".navbar-center");
  if (nav) nav.classList.toggle("active");
}

renderProjects(activeProjects);
