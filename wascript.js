// Link WhatsApp Channel
const whatsappLink = "https://whatsapp.com/channel/0029VbBzqyz1yT2DrU0wCU1w";

// Set link di elemen
document.getElementById('waLink').textContent = whatsappLink;
document.getElementById('joinBtn').href = whatsappLink;

// Fungsi untuk menyalin link
document.getElementById('copyBtn').addEventListener('click', function() {
    const linkText = document.getElementById('waLink').textContent;
    
    navigator.clipboard.writeText(linkText).then(function() {
        const successMessage = document.getElementById('copySuccess');
        successMessage.style.display = 'block';
        
        setTimeout(function() {
            successMessage.style.display = 'none';
        }, 3000);
        
    }).catch(function(err) {
        const textArea = document.createElement("textarea");
        textArea.value = linkText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        
        const successMessage = document.getElementById('copySuccess');
        successMessage.style.display = 'block';
        setTimeout(function() {
            successMessage.style.display = 'none';
        }, 3000);
    });
});

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', function() {
    const icon = this.querySelector('i');
    const icons = ['fab fa-whatsapp', 'fas fa-comment', 'fas fa-paper-plane', 'fas fa-mobile-alt'];
    const currentIcon = icon.className;
    let newIcon;
    
    do {
        newIcon = icons[Math.floor(Math.random() * icons.length)];
    } while (newIcon === currentIcon);
    
    icon.className = newIcon;
});

// Particle Animation
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 15;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random properties
        const size = Math.random() * 10 + 5;
        const posX = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        
        particlesContainer.appendChild(particle);
    }
}

// Number Counting Animation
function animateNumbers() {
    const resourceCount = document.getElementById('resourceCount');
    const updateCount = document.getElementById('updateCount');
    const memberCount = document.getElementById('memberCount');
    
    // Animate numbers
    animateValue(resourceCount, 0, 700, 2000);
    animateValue(updateCount, 0, 20, 2000);
    animateValue(memberCount, 0, 18000, 2000);
}

function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value.toLocaleString() + '+';
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Initialize animations when page loads
window.addEventListener('load', function() {
    createParticles();
    animateNumbers(); // Langsung jalankan animasi angka tanpa perlu scroll
});