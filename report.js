// ================= REPORT DATA =================
const reportData = {
  'week5': {
    week: 'Week 5',
    date: 'January 15, 2026',
    status: 'approved',
    viewed: 22,
    projectName: 'AI-Powered Education Platform',
    teamLead: 'Cheerio Balakrishna',
    currentStatus: 'Development Phase 2',
    fundingGoal: '₹50,00,000',
  },
  'week4': {
    week: 'Week 4',
    date: 'January 8, 2026',
    status: 'approved',
    viewed: 18,
    projectName: 'AI-Powered Education Platform',
    teamLead: 'Cheerio Balakrishna',
    currentStatus: 'Development Phase 2',
    fundingGoal: '₹50,00,000',
  },
  'week3': {
    week: 'Week 3',
    date: 'January 1, 2026',
    status: 'approved',
    viewed: 15,
    projectName: 'AI-Powered Education Platform',
    teamLead: 'Cheerio Balakrishna',
    currentStatus: 'Development Phase 1',
    fundingGoal: '₹50,00,000',
  },
  'week2': {
    week: 'Week 2',
    date: 'December 25, 2025',
    status: 'approved',
    viewed: 12,
    projectName: 'AI-Powered Education Platform',
    teamLead: 'Cheerio Balakrishna',
    currentStatus: 'Planning & Development',
    fundingGoal: '₹50,00,000',
  },
  'week1': {
    week: 'Week 1',
    date: 'December 18, 2025',
    status: 'approved',
    viewed: 8,
    projectName: 'AI-Powered Education Platform',
    teamLead: 'Cheerio Balakrishna',
    currentStatus: 'Ideation Phase',
    fundingGoal: '₹50,00,000',
  }
};

// ================= LOAD REPORT =================
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const reportId = params.get('id') || 'week5';
  
  const report = reportData[reportId];
  
  if (report) {
    loadReport(report);
  } else {
    loadReport(reportData['week5']); // Default to week 5
  }
});

// ================= DISPLAY REPORT =================
function loadReport(report) {
  document.getElementById('reportWeek').textContent = report.week + ' Progress Report';
  document.getElementById('reportDate').textContent = 'Submitted on: ' + report.date;
  
  const statusEl = document.getElementById('reportStatus');
  statusEl.textContent = report.status === 'approved' ? '✓ APPROVED' : '⏳ PENDING';
  statusEl.className = 'status-badge ' + report.status;
  
  document.querySelector('.status-info').textContent = 'Viewed by ' + report.viewed + ' investors';
  
  // Overview
  document.getElementById('projectName').textContent = report.projectName;
  document.getElementById('teamLead').textContent = report.teamLead;
  document.getElementById('currentStatus').textContent = report.currentStatus;
  document.getElementById('fundingGoal').textContent = report.fundingGoal;
}

// ================= ACTION BUTTONS =================
function downloadReport() {
  alert('Downloading report as PDF...');
  // In a real app, this would generate and download a PDF
}

function shareReport() {
  alert('Opening share dialog...');
  // In a real app, this would open a share modal
}

function requestFeedback() {
  alert('Opening feedback request form...');
  // In a real app, this would navigate to a feedback form
}

// ================= LOGOUT =================
function handleLogout() {
  if (confirm("Are you sure you want to logout?")) {
    window.location.href = "index.html";
  }
}

console.log("Report Page Loaded");
