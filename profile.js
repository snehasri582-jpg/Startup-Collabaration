// ================= PROFILE DATA =================
const profileData = {
  'rajesh-kapoor': {
    name: 'Rajesh Kapoor',
    role: 'Angel Investor',
    type: 'Investor',
    about: 'Serial entrepreneur and angel investor with 15+ years of experience in venture capital. Passionate about supporting innovative startups in tech and AI space.',
    investment: '💰 $100K - $500K',
    interests: ['Tech', 'AI', 'Startups', 'SaaS'],
    experience: '15+ years in venture capital and startup ecosystem. Successfully invested in 12+ companies with 8 successful exits.',
    portfolio: '12',
    success: '8',
    funding: '$50M',
    email: 'rajesh.kapoor@investors.com',
    phone: '+91 98765 43210',
    linkedin: 'https://linkedin.com/in/rajesh-kapoor',
    image: 'https://randomuser.me/api/portraits/men/68.jpg'
  },
  'lisa-chen': {
    name: 'Lisa Chen',
    role: 'VC Partner',
    type: 'Venture Capitalist',
    about: 'Seed Ventures VC Partner focused on early-stage investments. Experienced in scaling FinTech, SaaS, and E-commerce startups with global reach.',
    investment: '💰 $500K - $2M',
    interests: ['FinTech', 'SaaS', 'E-commerce', 'Web3'],
    experience: 'VP of Investments at Seed Ventures. Led 20+ successful funding rounds. Portfolio includes unicorns in Asian markets.',
    portfolio: '20',
    success: '15',
    funding: '$150M',
    email: 'lisa.chen@seedventures.com',
    phone: '+1-415-555-0100',
    linkedin: 'https://linkedin.com/in/lisa-chen',
    image: 'https://randomuser.me/api/portraits/women/65.jpg'
  },
  'ajay-tandon': {
    name: 'Ajay Tandon',
    role: 'Serial Entrepreneur',
    type: 'Investor',
    about: 'Serial entrepreneur who founded and exited 3 successful startups. Now focusing on investing in healthcare, education, and AI-driven solutions.',
    investment: '💰 $50K - $300K',
    interests: ['Healthcare', 'Education', 'AI', 'Deep Tech'],
    experience: 'Founder of 3 tech startups. 1 successful exit for $50M. Active mentor to 30+ founders. Board member of tech incubators.',
    portfolio: '15',
    success: '10',
    funding: '$75M',
    email: 'ajay.tandon@entrepreneurs.com',
    phone: '+91 99876 54321',
    linkedin: 'https://linkedin.com/in/ajay-tandon',
    image: 'https://randomuser.me/api/portraits/men/75.jpg'
  },
  'naveen-sharma': {
    name: 'Naveen Sharma',
    role: 'Corporate Venture Lead',
    type: 'Strategic Investor',
    about: 'Head of Corporate Ventures at a Fortune 500 company. Focus on strategic investments in B2B, Climate Tech, and Renewable Energy sectors.',
    investment: '💰 $200K - $1M',
    interests: ['B2B', 'Climate Tech', 'Energy', 'Sustainability'],
    experience: 'Led corporate venture division for 8 years. Deployed $500M+ in strategic investments. Strong network across Fortune 500.',
    portfolio: '25',
    success: '18',
    funding: '$250M',
    email: 'naveen.sharma@corporate-ventures.com',
    phone: '+91 98765 12345',
    linkedin: 'https://linkedin.com/in/naveen-sharma',
    image: 'https://randomuser.me/api/portraits/women/72.jpg'
  }
};

// ================= LOAD PROFILE =================
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const profileId = params.get('id') || 'rajesh-kapoor';
  
  const profile = profileData[profileId];
  
  if (profile) {
    loadProfile(profile);
  }
});

// ================= DISPLAY PROFILE =================
function loadProfile(profile) {
  // Set avatar as image
  const avatarEl = document.getElementById('profileAvatar');
  avatarEl.innerHTML = `<img src="${profile.image}" alt="${profile.name}" style="width: 100%; height: 100%; border-radius: 8px; object-fit: cover;">`;
  
  // Set basic info
  document.getElementById('profileName').textContent = profile.name;
  document.getElementById('profileRole').textContent = profile.role;
  document.getElementById('profileType').textContent = profile.type;
  
  // Set about sections
  document.getElementById('profileAbout').textContent = profile.about;
  document.getElementById('profileInvestment').textContent = profile.investment;
  document.getElementById('profileExperience').textContent = profile.experience;
  
  // Set interests
  const interestsEl = document.getElementById('profileInterests');
  interestsEl.innerHTML = profile.interests.map(interest => `<span class="tag">${interest}</span>`).join('');
  
  // Set stats
  document.getElementById('statPortfolio').textContent = profile.portfolio;
  document.getElementById('statSuccess').textContent = profile.success;
  document.getElementById('statFunding').textContent = profile.funding;
  
  // Set contact info
  document.getElementById('profileEmail').textContent = profile.email;
  document.getElementById('profilePhone').textContent = profile.phone;
  document.getElementById('profileLinkedin').innerHTML = `<a href="${profile.linkedin}" target="_blank">View Profile</a>`;
}

// ================= ACTION BUTTONS =================
function connectProfile() {
  alert('Connection request sent! You will be notified when they accept.');
}

function messageProfile() {
  const name = document.getElementById('profileName').textContent;
  alert(`Opening chat with ${name}...`);
  // Redirect to chat page
  window.location.href = 'chat.html';
}

function pitchProfile() {
  const name = document.getElementById('profileName').textContent;
  alert(`Opening pitch composer for ${name}...`);
  // Redirect to share idea page
  window.location.href = 'shareidea.html';
}

// ================= LOGOUT =================
function handleLogout() {
  alert('Logging out...');
  window.location.href = 'login.html';
}

console.log('Profile Page Loaded');
