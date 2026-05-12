// ==================== LOGOUT FUNCTION ==================== //
function handleLogout() {
  if (confirm("Are you sure you want to logout?")) {
    window.location.href = "index.html";
  }
}

const projects = [
  {
    id: 1,
    title: "AI-Powered Education Platform",
    category: "Tech",
    description: "An AI-powered platform providing personalized learning experiences for students using adaptive teaching methods and data-driven insights",
    funding: "$200,000",
    investments: 14,
    comments: 23,
    postedDaysAgo: 2,
    trending: true,
    student: {
      name: "Amit Mehra",
      university: "Boston University",
      bio: "AI & EdTech enthusiast",
      skills: "ML, NLP, React"
    }
  },
  {
    id: 2,
    title: "EcoCharge",
    category: "Sustainability",
    description: "A network of sustainable EV charging stations designed to support green energy",
    funding: "$150,000",
    investments: 10,
    comments: 15,
    postedDaysAgo: 5,
    trending: false,
    student: {
      name: "Sneha Patil",
      university: "Stanford University",
      bio: "Sustainable energy innovator",
      skills: "IoT, Energy Systems"
    }
  },
  {
    id: 3,
    title: "HealthSync AI",
    category: "Health",
    description: "An AI-driven platform for personalized health monitoring and early disease detection",
    funding: "$300,000",
    investments: 8,
    comments: 10,
    postedDaysAgo: 7,
    trending: false,
    student: {
      name: "Mohit Agarwal",
      university: "MIT",
      bio: "Healthcare innovator",
      skills: "ML, Healthcare Tech"
    }
  },
  {
    id: 4,
    title: "FinFlow",
    category: "Fintech",
    description: "A personal finance app with smart budgeting and goal-based investing",
    funding: "$180,000",
    investments: 11,
    comments: 9,
    postedDaysAgo: 3,
    trending: false,
    student: {
      name: "Priya Singh",
      university: "Carnegie Mellon University",
      bio: "Fintech product builder",
      skills: "Payments, Risk, Analytics"
    }
  },
  {
    id: 5,
    title: "ShopSmart",
    category: "E-commerce",
    description: "A smart marketplace for local brands with AI-driven demand forecasting",
    funding: "$120,000",
    investments: 7,
    comments: 6,
    postedDaysAgo: 6,
    trending: false,
    student: {
      name: "Neha Patel",
      university: "NYU",
      bio: "Marketplace growth strategist",
      skills: "E-commerce, Growth, Data"
    }
  }
];

let currentFilter = "All";
const ideaList = document.getElementById("ideaList");

function renderProjects(list) {
  if (!ideaList) return;
  ideaList.innerHTML = "";
  if (list.length === 0) {
    ideaList.innerHTML = '<p style="text-align: center; padding: 40px; color: #999;">No projects found</p>';
    return;
  }
  list.forEach(p => {
    ideaList.innerHTML += createProjectCard(p);
  });
}

function createProjectCard(p) {
  const trendingBadge = p.trending ? `<span class="trending-badge">?? Trending</span>` : "";
  return `
  <div class="project-card">
    <div class="card-left">
      <div class="card-header">
        <h2 class="card-title">${p.title}</h2>
        ${trendingBadge}
      </div>

      <div class="card-creator">
        <div class="creator-avatar">??</div>
        <div class="creator-info">
          <div class="creator-name">${p.student.name}</div>
          <div class="creator-university">?? ${p.student.university}</div>
        </div>
      </div>

      <p class="card-description">${p.description}</p>
      <div class="card-funding">Funding Requested: ${p.funding}</div>

      <div class="card-meta">
        <div class="meta-item">
          <span class="meta-label">??</span>
          <span class="meta-value">${p.investments}</span>
          <span class="meta-label">investments interested</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">??</span>
          <span class="meta-value">${p.comments}</span>
          <span class="meta-label">Comments</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">??</span>
          <span class="meta-label">Posted ${p.postedDaysAgo} ${p.postedDaysAgo === 1 ? 'day' : 'days'} ago</span>
        </div>
      </div>

      <div class="card-actions">
        <button class="action-btn btn-primary" onclick='openModal(${JSON.stringify(p).replace(/'/g, "&apos;")})'>View Details</button>
        <button class="action-btn btn-secondary">? Shortlist</button>
        <button class="action-btn btn-secondary">?? Schedule Meeting</button>
      </div>
    </div>

    <div class="card-right">
      <div class="avatar-group">
        <div class="small-avatar">??</div>
        <div class="small-avatar">??</div>
        <div class="small-avatar">??</div>
        <div class="small-avatar">??</div>
      </div>
    </div>
  </div>`;
}

function filterByCategory(category, evt) {
  currentFilter = category;
  const filtered = category === "All" ? projects : projects.filter(p => p.category === category);
  renderProjects(filtered);
  updateActiveButton(evt, category);
}

function updateActiveButton(evt, category) {
  document.querySelectorAll(".category-btn").forEach(btn => btn.classList.remove("active"));
  const buttons = Array.from(document.querySelectorAll(".category-btn"));
  const activeBtn = evt?.currentTarget || buttons.find(btn => btn.textContent.toLowerCase().includes(category.toLowerCase()));
  if (activeBtn) activeBtn.classList.add("active");
}

const sortFilter = document.getElementById("sortFilter");
if (sortFilter) {
  sortFilter.addEventListener("change", (e) => {
    const sortValue = e.target.value;
    let sorted = [...projects];

    switch (sortValue) {
      case "trending":
        sorted = sorted.sort((a, b) => b.trending - a.trending);
        break;
      case "funding":
        sorted = sorted.sort((a, b) => {
          const fundA = parseInt(a.funding.replace(/[$,]/g, ''));
          const fundB = parseInt(b.funding.replace(/[$,]/g, ''));
          return fundB - fundA;
        });
        break;
      case "investments":
        sorted = sorted.sort((a, b) => b.investments - a.investments);
        break;
      default:
        sorted = sorted.sort((a, b) => a.postedDaysAgo - b.postedDaysAgo);
    }

    const filtered = currentFilter === "All" ? sorted : sorted.filter(p => p.category === currentFilter);
    renderProjects(filtered);
  });
}

const searchInput = document.getElementById("searchInput");
if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = projects.filter(p =>
      p.title.toLowerCase().includes(searchTerm) ||
      p.description.toLowerCase().includes(searchTerm) ||
      p.student.name.toLowerCase().includes(searchTerm)
    );
    const finalFiltered = currentFilter === "All" ? filtered : filtered.filter(p => p.category === currentFilter);
    renderProjects(finalFiltered);
  });
}

function openModal(p) {
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modalBody");
  if (!modal || !modalBody) return;
  modal.style.display = "block";

  modalBody.innerHTML = `
    <h2>${p.title}</h2>
    <p style="margin: 16px 0; color: #666;">${p.description}</p>
    <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;">
    <h3 style="margin-top: 20px; margin-bottom: 12px;">?? Student Profile</h3>
    <p><strong>${p.student.name}</strong></p>
    <p style="color: #666;">${p.student.university}</p>
    <p style="color: #999; margin-bottom: 12px;">${p.student.bio}</p>
    <p style="color: #666;"><strong>Skills:</strong> ${p.student.skills}</p>
    <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;">
    <div style="margin-top: 20px;">
      <p style="margin-bottom: 10px;"><strong>Funding Requested:</strong> ${p.funding}</p>
      <p style="margin-bottom: 10px;"><strong>Investments Interested:</strong> ${p.investments}</p>
      <p><strong>Comments:</strong> ${p.comments}</p>
    </div>
  `;
}

function closeModal() {
  const modal = document.getElementById("modal");
  if (modal) modal.style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("modal");
  if (modal && event.target == modal) {
    modal.style.display = "none";
  }
};

function toggleMenu() {
  const nav = document.querySelector(".navbar-center");
  if (nav) nav.classList.toggle("active");
}

renderProjects(projects);
