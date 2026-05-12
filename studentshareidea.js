/**
 * ===== LOGOUT FUNCTION =====
 */
function handleLogout() {
  if (confirm("Are you sure you want to logout?")) {
    window.location.href = "index.html";
  }
}

/**
 * ===== PAGE INITIALIZATION =====
 */
document.addEventListener('DOMContentLoaded', function() {
  initializePageVisuals();
  initializeFormHandlers();
  initializeTagSelection();
  initializeFileUpload();
  initializeHamburgerMenu();
});

/**
 * ===== 1. UPDATE PAGE VISUALS (Hero & Background Images) =====
 */
function initializePageVisuals() {
  updatePageVisuals();
  setInterval(updatePageVisuals, 60000);
}

function updatePageVisuals() {
  const timestamp = new Date().getTime();

  const heroImg = document.getElementById('rotating-hero');
  if (heroImg) {
    heroImg.src = `https://source.unsplash.com/random/600x400?startup,entrepreneur,working,computer&sig=${timestamp}`;
  }

  const bgContainer = document.getElementById('app-wrapper');
  if (bgContainer) {
    const bgUrl = `https://source.unsplash.com/random/1920x1080?abstract,gradient,warm,office&sig=${timestamp}`;
    bgContainer.style.backgroundImage = `linear-gradient(rgba(255,245,230,0.92), rgba(255,245,230,0.92)), url('${bgUrl}')`;
  }
}

/**
 * ===== 2. FORM HANDLERS (Submit & Reset) =====
 */
function initializeFormHandlers() {
  const form = document.getElementById('startup-form');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const termsCheckbox = document.getElementById('terms-checkbox');
    if (termsCheckbox && !termsCheckbox.checked) {
      showMessage('Please accept Terms & Conditions to continue.', 'error');
      highlightTermsError();
      return;
    }

    const formData = {
      title: document.getElementById('idea-title')?.value || '',
      description: document.getElementById('idea-desc')?.value || '',
      category: document.getElementById('category')?.value || '',
      solution: document.getElementById('solution')?.value || '',
      team: document.querySelector('input[name="team"]:checked')?.value || '',
      stage: document.querySelector('input[name="stage"]:checked')?.value || '',
      visibility: document.querySelector('input[name="visibility"]:checked')?.value || '',
      technologies: getSelectedTechnologies(),
      termsAccepted: termsCheckbox ? termsCheckbox.checked : false
    };

    if (!validateForm(formData)) {
      showMessage('Please fill in all required fields correctly.', 'error');
      return;
    }

    showMessage(`Success! Your idea "${formData.title}" has been published.`, 'success');
    removeTermsError();

    setTimeout(() => {
      form.reset();
      hideMessage();
      resetTags();
    }, 2000);
  });

  form.addEventListener('reset', function() {
    resetTags();
    removeTermsError();
    showMessage('Form has been cleared.', 'success');
    setTimeout(hideMessage, 2000);
  });
}

/**
 * ===== 3. TAG SELECTION =====
 */
function initializeTagSelection() {
  const tags = document.querySelectorAll('.tag');
  tags.forEach(tag => {
    tag.addEventListener('click', function(e) {
      e.preventDefault();
      this.classList.toggle('selected');
    });
  });
}

function getSelectedTechnologies() {
  const selected = document.querySelectorAll('.tag.selected');
  return Array.from(selected).map(tag => tag.textContent.trim());
}

function resetTags() {
  document.querySelectorAll('.tag').forEach(tag => tag.classList.remove('selected'));
}

/**
 * ===== 4. FILE UPLOAD HANDLER =====
 */
function initializeFileUpload() {
  const uploadBox = document.getElementById('upload-box');
  const fileInput = document.getElementById('file-upload');
  const uploadLink = document.querySelector('.upload-link');

  if (!uploadBox || !fileInput || !uploadLink) return;

  uploadLink.addEventListener('click', (e) => {
    e.preventDefault();
    fileInput.click();
  });

  uploadBox.addEventListener('click', (e) => {
    if (e.target !== uploadLink) {
      fileInput.click();
    }
  });

  uploadBox.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadBox.classList.add('dragover');
  });

  uploadBox.addEventListener('dragleave', () => {
    uploadBox.classList.remove('dragover');
  });

  uploadBox.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadBox.classList.remove('dragover');
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelection(files[0]);
    }
  });

  fileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
      handleFileSelection(e.target.files[0]);
    }
  });
}

function handleFileSelection(file) {
  const validDocumentTypes = [
    'application/pdf',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ];

  const validImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml'];
  const isValidDocument = validDocumentTypes.includes(file.type);
  const isValidImage = validImageTypes.includes(file.type);

  if (!isValidDocument && !isValidImage) {
    showMessage('Invalid file type. Please upload PDF, PowerPoint, Word documents, or Images.', 'error');
    return;
  }

  const maxSize = 5 * 1024 * 1024;
  if (file.size > maxSize) {
    showMessage('File size exceeds 5MB limit.', 'error');
    return;
  }

  let fileIcon = '??';
  if (isValidImage) fileIcon = '???';
  else if (file.type.includes('presentation')) fileIcon = '??';
  else if (file.type.includes('word')) fileIcon = '??';

  const fileInfo = document.getElementById('file-info');
  const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);
  if (fileInfo) fileInfo.textContent = `${fileIcon} ${file.name} (${fileSizeMB} MB)`;

  showMessage(`File "${file.name}" uploaded successfully!`, 'success');
  setTimeout(hideMessage, 3000);
}

/**
 * ===== 5. HAMBURGER MENU (Mobile Navigation) =====
 */
function initializeHamburgerMenu() {
  const hamburger = document.getElementById('hamburger-menu');
  const navMenu = document.getElementById('nav-menu');
  if (!hamburger || !navMenu) return;

  const toggle = () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  };

  hamburger.addEventListener('click', toggle);
  hamburger.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' || e.key === ' ') toggle();
  });

  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
}

/**
 * ===== 6. FORM VALIDATION =====
 */
function validateForm(data) {
  if (!data.title || data.title.trim().length < 3) return false;
  if (!data.description || data.description.trim().length < 10) return false;
  if (!data.solution || data.solution.trim().length < 10) return false;
  return true;
}

/**
 * ===== 7. MESSAGE DISPLAY HELPERS =====
 */
function showMessage(message, type) {
  let messageDiv = document.getElementById('form-message');
  if (!messageDiv) {
    messageDiv = document.createElement('div');
    messageDiv.id = 'form-message';
    messageDiv.className = `form-message ${type}`;
    const formCard = document.querySelector('.form-card');
    if (formCard) formCard.insertBefore(messageDiv, formCard.firstChild);
  }
  messageDiv.textContent = message;
  messageDiv.className = `form-message ${type} show`;
}

function hideMessage() {
  const messageDiv = document.getElementById('form-message');
  if (messageDiv) messageDiv.classList.remove('show');
}

/**
 * ===== 8. TERMS ERROR HIGHLIGHTING =====
 */
function highlightTermsError() {
  const termsAgreement = document.querySelector('.terms-agreement');
  if (termsAgreement) termsAgreement.classList.add('error');
}

function removeTermsError() {
  const termsAgreement = document.querySelector('.terms-agreement');
  if (termsAgreement) termsAgreement.classList.remove('error');
}

document.addEventListener('DOMContentLoaded', function() {
  const termsCheckbox = document.getElementById('terms-checkbox');
  if (termsCheckbox) {
    termsCheckbox.addEventListener('change', removeTermsError);
  }
});
