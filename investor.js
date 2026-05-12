// ================= SIDEBAR FUNCTIONS =================
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const backdrop = document.querySelector('.sidebar-backdrop');

  if (sidebar && backdrop) {
    sidebar.classList.toggle('open');
    backdrop.classList.toggle('open');
    document.body.classList.toggle('sidebar-open');
  }
}

function closeSidebar() {
  const sidebar = document.getElementById('sidebar');
  const backdrop = document.querySelector('.sidebar-backdrop');

  if (sidebar && backdrop) {
    sidebar.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.classList.remove('sidebar-open');
  }
}

// Close sidebar when clicking on backdrop or menu items
document.addEventListener('DOMContentLoaded', function() {
  const backdrop = document.querySelector('.sidebar-backdrop');
  if (backdrop) {
    backdrop.addEventListener('click', closeSidebar);
  }

  const menuItems = document.querySelectorAll('.menu-item');
  menuItems.forEach(item => {
    item.addEventListener('click', function() {
      menuItems.forEach(i => i.classList.remove('active'));
      this.classList.add('active');
      closeSidebar();
    });
  });
});

// ================= LOGOUT FUNCTION =================
function logout() {
  if (confirm('Are you sure you want to logout?')) {
    window.location.href = 'index.html';
  }
}

// ================= EXISTING INVESTOR PAGE FUNCTIONS =================
function goHome() {
  window.location.href = 'index.html';
}

function applyInvestor() {
  alert('Thank you for your interest! Your application will be reviewed shortly.');
}

function sendMessage() {
  const input = document.getElementById('chatInput');
  const box = document.getElementById('chatBox');
  if (!input || !box) return;

  if (input.value.trim()) {
    const div = document.createElement('div');
    div.className = 'msg';
    div.innerHTML = `<img src="https://randomuser.me/api/portraits/men/11.jpg"><p><b>You:</b> ${input.value}</p>`;
    box.appendChild(div);
    input.value = '';
  }
}

// ================= CTA BUTTONS =================
const applyBtn = document.getElementById('applyInvestor');
if (applyBtn) {
  applyBtn.addEventListener('click', () => {
    window.location.href = 'apply-investor.html';
  });
}

const viewPitches = document.getElementById('viewPitches');
if (viewPitches) {
  viewPitches.addEventListener('click', () => {
    const link = viewPitches.getAttribute('href') || 'startup-pitches.html';
    window.location.href = link;
  });
}
