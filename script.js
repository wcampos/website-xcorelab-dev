// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// App Details Modal
const modal = document.getElementById('appModal');
const modalContent = document.getElementById('modalContent');
const closeBtn = document.querySelector('.close');

// App data for the modal
const appDetails = {
    worktrax: {
        name: 'WorkTrackX',
        icon: 'imgs/worktrax-app-icon.png',
        description: 'WorkTrackX is a powerful time tracking and expense management application designed for freelancers, contractors, and small businesses. It helps you track work hours, manage expenses, and monitor payment statuses across multiple projects and clients.',
        features: [
            'Track work hours with flexible time increments',
            'Comprehensive expense management with categories',
            'Multiple payment types (hourly, project, task, per mile)',
            'Calendar view with daily, weekly, and monthly modes',
            'Real-time dashboard with payment summaries',
            'Multiple job profiles with custom rates',
            'Payment tracking with due dates and status',
            'Data sharing and syncing across devices',
            'Export and reporting for accounting',
            'iCloud integration for secure data storage'
        ],
        screenshots: [
            'Time tracking interface',
            'Calendar view with entries',
            'Expense management dashboard',
            'Payment tracking overview'
        ],
        requirements: 'iOS 15.0 or later, iPhone, iPad, and iPod touch',
        price: 'Available on the App Store'
    },
    tipper: {
        name: 'TipperX',
        icon: 'imgs/tipper-app-icon.png',
        description: 'TipperX is a modern, lightning-fast tip calculation app for iOS that focuses on clarity, convenience, and customization. Whether you\'re dining solo, with friends, or traveling abroad, TipperX helps you calculate tips and share bills effortlessly.',
        features: [
            'Real-time tip calculation with smooth slider',
            'Flexible rounding options for easy payment',
            'Multiple bill splitting modes (equal, proportional, custom)',
            'Save and recall favorite tip rates',
            'Pre-tax calculation mode for variable tax regions',
            'Global tipping guide with country-specific customs',
            'Currency converter with offline support',
            'Save, export, and share calculations',
            'Clean, ad-minimal interface',
            'Freemium model with ad-free option'
        ],
        screenshots: [
            'Main tip calculator interface',
            'Bill splitting options',
            'Global tipping guide',
            'Settings and preferences'
        ],
        requirements: 'iOS 17.0 or later, iPhone, iPad, and iPod touch',
        price: 'Free with ads, premium ad-free version available'
    }
};

// Function to show app details in modal
function showAppDetails(appId) {
    const app = appDetails[appId];
    if (!app) return;

    modalContent.innerHTML = `
        <div class="app-modal-header">
            <div class="app-modal-icon">
                ${app.icon.startsWith('imgs/') ? `<img src="${app.icon}" alt="${app.name} App Icon">` : `<i class="${app.icon}"></i>`}
            </div>
            <h2>${app.name}</h2>
        </div>
        
        <div class="app-modal-description">
            <p>${app.description}</p>
        </div>
        
        <div class="app-modal-features">
            <h3>Key Features</h3>
            <ul>
                ${app.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        </div>
        
        <div class="app-modal-screenshots">
            <h3>App Screenshots</h3>
            <div class="screenshot-grid">
                ${app.screenshots.map(screenshot => `
                    <div class="screenshot-item">
                        <div class="screenshot-placeholder">
                            <i class="fas fa-mobile-alt"></i>
                        </div>
                        <p>${screenshot}</p>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="app-modal-info">
            <div class="info-item">
                <strong>System Requirements:</strong> ${app.requirements}
            </div>
            <div class="info-item">
                <strong>Price:</strong> ${app.price}
            </div>
        </div>
        
        <div class="app-modal-actions">
            <button class="btn btn-primary" onclick="downloadApp('${appId}')">
                <i class="fas fa-download"></i> Download
            </button>
            <button class="btn btn-outline" onclick="shareApp('${app.name}')">
                <i class="fas fa-share"></i> Share
            </button>
        </div>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal when clicking the close button
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Download app function
function downloadApp(appId) {
    // This would typically redirect to the App Store
    // For demo purposes, we'll show an alert
    const app = appDetails[appId];
    alert(`Redirecting to App Store to download ${app.name}...`);
    
    // In a real implementation, you would redirect to the App Store URL
    // window.open(`https://apps.apple.com/app/${appId}`, '_blank');
}

// Share app function
function shareApp(appName) {
    if (navigator.share) {
        navigator.share({
            title: `Check out ${appName}`,
            text: `I found this amazing app called ${appName} by XCoreLab!`,
            url: window.location.href
        });
    } else {
        // Fallback for browsers that don't support Web Share API
        const shareText = `Check out ${appName} by XCoreLab! ${window.location.href}`;
        if (navigator.clipboard) {
            navigator.clipboard.writeText(shareText).then(() => {
                alert('App link copied to clipboard!');
            });
        } else {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = shareText;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            alert('App link copied to clipboard!');
        }
    }
}

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Basic validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Simulate form submission
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        
        // Simulate API call delay
        setTimeout(() => {
            alert(`Thank you for your message, ${name}! We'll get back to you soon.`);
            this.reset();
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }, 2000);
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.app-card, .contact-item, .eula-section-block');
    animatedElements.forEach(el => observer.observe(el));
});

// Active navigation highlighting
function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Update active navigation on scroll
window.addEventListener('scroll', updateActiveNav);

// Initialize active navigation
document.addEventListener('DOMContentLoaded', updateActiveNav);

// Smooth reveal animation for elements
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Add reveal class to elements that should animate
document.addEventListener('DOMContentLoaded', () => {
    const elementsToReveal = document.querySelectorAll('.app-card, .contact-item, .eula-section-block');
    elementsToReveal.forEach(el => el.classList.add('reveal'));
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(revealOnScroll, 100));
window.addEventListener('scroll', throttle(updateActiveNav, 100));

// Add loading states to buttons
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.type === 'submit' || this.onclick) {
                this.classList.add('loading');
                setTimeout(() => {
                    this.classList.remove('loading');
                }, 2000);
            }
        });
    });
});

// Console welcome message
console.log(`
%cWelcome to XCoreLab! 🚀
%c
%cWe're excited to have you explore our Apple apps website.
%cFeel free to check out our apps, read the EULA, or get in touch!
%c
%cFor support: contact@xcorelab.dev
`,
'color: #1f2937; font-size: 20px; font-weight: bold;',
'',
'color: #6b7280; font-size: 14px;',
'color: #6b7280; font-size: 14px;',
'',
'color: #1f2937; font-size: 12px; font-weight: bold;'
);
