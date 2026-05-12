// ==================== LOGOUT FUNCTION ==================== //
function handleLogout() {
  if (confirm("Are you sure you want to logout?")) {
    window.location.href = "index.html";
  }
}

// ==================== NAVIGATION ==================== //
function toggleMenu() {
  const navMenu = document.querySelector('.nav-menu') || document.querySelector('header nav');
  if (navMenu) {
    navMenu.classList.toggle('active');
  }
}

document.querySelectorAll('header nav a').forEach(link => {
  link.addEventListener('click', () => {
    const navMenu = document.querySelector('.nav-menu') || document.querySelector('header nav');
    if (navMenu) navMenu.classList.remove('active');
  });
});

// ==================== HERO BUTTONS ==================== //
function exploreIdeas() {
  const section = document.getElementById('recommended');
  if (section) section.scrollIntoView({ behavior: 'smooth' });
}

function howItWorks() {
  showModal(
    'How It Works',
    'Our platform connects innovative startup ideas with potential investors. Browse vetted startups, review details, and invest in the ones that align with your portfolio.'
  );
}

// ==================== STAT BUTTONS ==================== //
function viewIdeas() {
  showModal(
    'Promising Startups',
    'You have 12 promising startups in your recommendation list. These startups have been selected based on your preferences.'
  );
}

function viewPortfolio() {
  showModal(
    'Your Portfolio',
    'Your current portfolio shows $230,000 invested across multiple startups. Average ROI is 18.5%.'
  );
}

function viewSchedule() {
  showModal(
    'Upcoming Meetings',
    'You have 3 upcoming meetings scheduled:

1. TechInnovate - March 15, 2024 at 10:00 AM
2. EcoCharge - March 16, 2024 at 2:00 PM
3. HealthNest - March 18, 2024 at 3:30 PM'
  );
}

// ==================== CATEGORY FILTERING ==================== //
function filterByCategory(category, evt) {
  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(btn => btn.classList.remove('active'));

  const activeBtn = evt?.currentTarget || Array.from(buttons).find(btn => btn.textContent.toLowerCase().includes(category));
  if (activeBtn) activeBtn.classList.add('active');

  const cards = document.querySelectorAll('.startup-card');
  cards.forEach(card => {
    if (category === 'all') {
      card.style.display = 'block';
    } else {
      const cardCategory = card.getAttribute('data-category');
      card.style.display = cardCategory === category ? 'block' : 'none';
    }
  });
}

// ==================== CARD ACTIONS ==================== //
function investNow(startupName) {
  showModal(
    `Invest in ${startupName}`,
    `Ready to invest in ${startupName}?

Minimum investment: $5,000
Expected return: 15-25% annually`
  );
}

// ==================== MODAL FUNCTIONS ==================== //
function showModal(title, message) {
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modalTitle');
  const modalMessage = document.getElementById('modalMessage');

  if (!modal || !modalTitle || !modalMessage) return;
  modalTitle.textContent = title;
  modalMessage.textContent = message;
  modal.style.display = 'block';
}

function closeModal() {
  const modal = document.getElementById('modal');
  if (modal) modal.style.display = 'none';
}

function confirmAction() {
  alert('Action confirmed! Processing your request...');
  closeModal();
}

window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if (modal && event.target === modal) {
    closeModal();
  }
};

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});

// ==================== HERO IMAGE ROTATION ==================== //
const heroImages = [
  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1552664730-d307cb884970?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1518070695728-2835edd6afb2?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1618477388954-0922f82eff11?w=1200&h=600&fit=crop'
];

function changeHeroImage() {
  const heroSection = document.getElementById('heroSection');
  if (!heroSection) return;
  const randomImage = heroImages[Math.floor(Math.random() * heroImages.length)];
  heroSection.style.backgroundImage = `linear-gradient(135deg, rgba(255, 245, 230, 0.9) 0%, rgba(255, 240, 217, 0.9) 100%), url('${randomImage}')`;
}

window.addEventListener('load', changeHeroImage);
setInterval(changeHeroImage, 10000);
