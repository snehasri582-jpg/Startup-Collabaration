/**
 * ===== LOGOUT FUNCTION =====
 */
function handleLogout() {
  if (confirm("Are you sure you want to logout?")) {
    window.location.href = "index.html";
  }
}

/**
 * ===== CHAT APPLICATION - COMPLETE FUNCTIONALITY =====
 * Features: Contact switching, search, messaging, schedule meeting, zoom controls
 */

let currentContact = null;
let zoomControlStates = {
    mute: false,
    video: false,
    participants: false,
    share: false,
    record: false
};

// ===== 1. INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    initializeContacts();
    initializeMessages();
    initializeModal();
    initializeHamburgerMenu();
    initializeSearch();
    initializeFeaturedIdeas();
    initializeSuggestedContacts();
    initializeInvestorProfiles();
});

// ===== 2. HAMBURGER MENU =====
function initializeHamburgerMenu() {
    const hamburger = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when link is clicked
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// ===== 3. CONTACT SWITCHING =====
function initializeContacts() {
    const contacts = document.querySelectorAll('.contact');
    const messagesContainer = document.getElementById('messagesContainer');

    contacts.forEach(contact => {
        contact.addEventListener('click', function() {
            // Remove active class from all contacts
            contacts.forEach(c => c.classList.remove('active'));
            this.classList.add('active');

            // Get contact data
            const contactName = this.getAttribute('data-contact');
            const contactRole = this.getAttribute('data-role');
            const contactSchool = this.getAttribute('data-school');
            const contactImg = this.getAttribute('data-img');

            currentContact = {
                name: contactName,
                role: contactRole,
                school: contactSchool,
                img: contactImg
            };

            // Update chat header
            updateChatHeader(contactName, contactSchool, contactImg);

            // Clear previous messages and add sample messages
            messagesContainer.innerHTML = '';
            addSampleMessages(contactName, contactImg);
        });
    });

    // Set initial contact
    const firstContact = document.querySelector('.contact.active');
    if (firstContact) {
        firstContact.click();
    }
}

function updateChatHeader(name, role, img) {
    document.getElementById('chatUserName').textContent = name;
    document.getElementById('chatUserRole').textContent = role;
    document.getElementById('chatUserImg').src = img;
}

function addSampleMessages(contactName, contactImg) {
    const messagesContainer = document.getElementById('messagesContainer');
    const messages = [
        { type: 'received', text: `Hi! Great to connect with you on Startup Collab.`, time: '10:30 AM' },
        { type: 'sent', text: `Thanks! I'm excited to collaborate.`, time: '10:32 AM' },
        { type: 'received', text: `I'm very interested in your project ideas.`, time: '10:35 AM' },
        { type: 'sent', text: `Let's schedule a meeting to discuss further.`, time: '10:37 AM' }
    ];

    messages.forEach(msg => {
        const chatRow = document.createElement('div');
        chatRow.className = `chat-row ${msg.type}`;

        if (msg.type === 'received') {
            chatRow.innerHTML = `
                <img src="${contactImg}" alt="${contactName}">
                <div class="message-content">
                    <div class="bubble">${msg.text}</div>
                    <span class="timestamp">${msg.time}</span>
                </div>
            `;
        } else {
            chatRow.innerHTML = `
                <div class="message-content">
                    <div class="bubble">${msg.text}</div>
                    <span class="timestamp">${msg.time}</span>
                </div>
                <img src="https://randomuser.me/api/portraits/men/11.jpg" alt="You">
            `;
        }

        messagesContainer.appendChild(chatRow);
    });

    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// ===== 4. SEARCH FUNCTIONALITY =====
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const contacts = document.querySelectorAll('.contact');

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();

        contacts.forEach(contact => {
            const contactName = contact.getAttribute('data-contact').toLowerCase();
            const contactSchool = contact.getAttribute('data-school').toLowerCase();

            if (contactName.includes(searchTerm) || contactSchool.includes(searchTerm)) {
                contact.style.display = 'flex';
            } else {
                contact.style.display = 'none';
            }
        });
    });
}

// ===== 5. MESSAGE SENDING =====
function initializeMessages() {
    const msgInput = document.getElementById('msgInput');
    const sendBtn = document.getElementById('sendBtn');
    const messagesContainer = document.getElementById('messagesContainer');

    // Send on button click
    sendBtn.addEventListener('click', () => sendMessage());

    // Send on Enter key
    msgInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });

    function sendMessage() {
        const messageText = msgInput.value.trim();
        if (!messageText) return;

        // Create message element
        const chatRow = document.createElement('div');
        chatRow.className = 'chat-row sent';

        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

        chatRow.innerHTML = `
            <div class="message-content">
                <div class="bubble">${messageText}</div>
                <span class="timestamp">${timeString}</span>
            </div>
            <img src="https://randomuser.me/api/portraits/men/11.jpg" alt="You">
        `;

        messagesContainer.appendChild(chatRow);
        msgInput.value = '';
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        // Simulate response after 1 second
        setTimeout(() => {
            addReceivedMessage('Got it! Thanks for the message. 😊');
        }, 1000);
    }

    function addReceivedMessage(text) {
        const chatRow = document.createElement('div');
        chatRow.className = 'chat-row received';

        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

        const contactImg = currentContact ? currentContact.img : 'https://randomuser.me/api/portraits/women/44.jpg';
        const contactName = currentContact ? currentContact.name : 'Contact';

        chatRow.innerHTML = `
            <img src="${contactImg}" alt="${contactName}">
            <div class="message-content">
                <div class="bubble">${text}</div>
                <span class="timestamp">${timeString}</span>
            </div>
        `;

        messagesContainer.appendChild(chatRow);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
}

// ===== 6. MODAL - SCHEDULE MEETING =====
function initializeModal() {
    const modal = document.getElementById('meetingModal');
    const scheduleBtn = document.getElementById('scheduleBtn');
    const closeModal = document.getElementById('closeModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const meetingForm = document.getElementById('meetingForm');
    const successMessage = document.getElementById('successMessage');

    // Open modal
    scheduleBtn.addEventListener('click', () => {
        modal.classList.add('show');
        setMinimumDate();
    });

    // Close modal
    closeModal.addEventListener('click', () => modal.classList.remove('show'));
    closeModalBtn.addEventListener('click', () => modal.classList.remove('show'));

    // Close modal on background click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });

    // Form submission
    meetingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const date = document.getElementById('meetingDate').value;
        const startTime = document.getElementById('startTime').value;
        const endTime = document.getElementById('endTime').value;
        const topic = document.getElementById('meetingTopic').value;

        // Validate times
        if (startTime >= endTime) {
            showFormError('End time must be after start time!');
            return;
        }

        // Show success message
        meetingForm.style.display = 'none';
        successMessage.style.display = 'block';

        console.log('Meeting Scheduled:', {
            contact: currentContact.name,
            date: date,
            startTime: startTime,
            endTime: endTime,
            topic: topic
        });

        // Reset after 2 seconds
        setTimeout(() => {
            meetingForm.reset();
            meetingForm.style.display = 'block';
            successMessage.style.display = 'none';
            modal.classList.remove('show');
        }, 2000);
    });

    function setMinimumDate() {
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('meetingDate').min = today;
    }

    function showFormError(message) {
        alert(message);
    }
}

// ===== 7. FEATURED IDEAS - CARD ACTIONS =====
function initializeFeaturedIdeas() {
    const cardButtons = document.querySelectorAll('.card-actions button');

    cardButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const card = this.closest('.idea-card');
            const ideaName = card.querySelector('h3').textContent;

            if (this.classList.contains('btn-primary')) {
                console.log('Viewing deal:', ideaName);
                alert(`Viewing: ${ideaName}\nMore details coming soon!`);
            } else if (this.classList.contains('btn-secondary')) {
                this.textContent = '✓ Shortlisted';
                this.style.background = '#c8e6c9';
                this.style.color = '#27ae60';
                this.disabled = true;
            }
        });
    });
}

// ===== 8. ZOOM CONTROLS =====
function toggleZoomControl(controlType) {
    zoomControlStates[controlType] = !zoomControlStates[controlType];

    const controlBtn = {
        'mute': document.getElementById('muteBtn'),
        'video': document.getElementById('videoBtn'),
        'participants': document.getElementById('participantsBtn'),
        'share': document.getElementById('shareBtn'),
        'record': document.getElementById('recordBtn')
    }[controlType];

    if (controlBtn) {
        if (zoomControlStates[controlType]) {
            controlBtn.style.opacity = '0.6';
            controlBtn.style.background = '#555';
        } else {
            controlBtn.style.opacity = '1';
            controlBtn.style.background = '';
        }
    }

    const actionMessages = {
        'mute': zoomControlStates[controlType] ? '🔇 Microphone muted' : '🎤 Microphone unmuted',
        'video': zoomControlStates[controlType] ? '📹 Video stopped' : '📹 Video started',
        'participants': 'Showing participants list',
        'share': zoomControlStates[controlType] ? '🖥 Screen sharing started' : '🖥 Screen sharing stopped',
        'record': zoomControlStates[controlType] ? '⏺ Recording started' : '⏺ Recording stopped'
    };

    console.log('Zoom Action:', actionMessages[controlType]);
}

function endMeeting() {
    const confirmEnd = confirm('Are you sure you want to end the meeting for everyone?');
    if (confirmEnd) {
        const zoomSection = document.getElementById('zoomSection');
        zoomSection.style.display = 'none';
        alert('✅ Meeting ended successfully');
        console.log('Meeting ended');
    }
}

// Uncomment below to start meeting (for testing)
// function startZoomMeeting() {
//     document.getElementById('zoomSection').style.display = 'block';
// }

// ===== 10. SUGGESTED CONTACTS - CONNECT BUTTON =====
function initializeSuggestedContacts() {
    const connectButtons = document.querySelectorAll('.btn-connect');

    connectButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const card = this.closest('.suggested-card');
            const name = card.querySelector('h4').textContent;

            this.textContent = '✓ Connected';
            this.style.background = '#27ae60';
            this.disabled = true;

            console.log('Connected with:', name);

            setTimeout(() => {
                this.textContent = 'Connect';
                this.style.background = '';
                this.disabled = false;
            }, 2000);
        });
    });
}

// ===== 11. INVESTOR NETWORK - PROFILE BUTTON =====
function initializeInvestorProfiles() {
    // Investor profiles now open directly via onclick handlers on buttons
    // No modal/alert needed - direct navigation to profile page
}
