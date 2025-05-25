// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const section = document.querySelector(link.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });

        // Highlight Active Link
        document.querySelectorAll('nav ul li a').forEach(item => item.classList.remove('active'));
        link.classList.add('active');
    });
});

// Form Submission Alert
document.getElementById('contact-form').addEventListener('submit', event => {
    event.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
    event.target.reset();
});

// Sticky Header Effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.style.background = window.scrollY > 50 ? 'rgba(51, 51, 51, 1)' : 'rgba(51, 51, 51, 0.9)';
});
// education
// Animate timeline items on scroll
const timelineItems = document.querySelectorAll('.timeline-item');

const animateOnScroll = () => {
    timelineItems.forEach(item => {
        const itemPosition = item.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (itemPosition < screenPosition) {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }
    });
};

// Set initial state
window.addEventListener('DOMContentLoaded', () => {
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transition = `all 0.5s ease ${index * 0.2}s`;
        
        if (window.innerWidth > 768) {
            item.style.transform = index % 2 === 0 ? 'translateX(-50px)' : 'translateX(50px)';
        } else {
            item.style.transform = 'translateX(-50px)';
        }
    });
    
    // Trigger once on load
    animateOnScroll();
});

window.addEventListener('scroll', animateOnScroll);
// Achievement cards animation
const achievementCards = document.querySelectorAll('.achievement-card');

const animateAchievements = () => {
    achievementCards.forEach((card, index) => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (cardPosition < screenPosition) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
};

// Set initial state
window.addEventListener('DOMContentLoaded', () => {
    achievementCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
    });
    
    animateAchievements();
});

window.addEventListener('scroll', animateAchievements);
// Experience items animation
const experienceItems = document.querySelectorAll('.experience-item');

const animateExperience = () => {
    experienceItems.forEach((item, index) => {
        const itemPosition = item.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (itemPosition < screenPosition) {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }
    });
};

// Set initial state
window.addEventListener('DOMContentLoaded', () => {
    experienceItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transition = `all 0.5s ease ${index * 0.2}s`;
        
        if (window.innerWidth > 768) {
            item.style.transform = index % 2 === 0 ? 'translateX(-50px)' : 'translateX(50px)';
        } else {
            item.style.transform = 'translateX(-50px)';
        }
    });
    
    // Trigger once on load
    animateExperience();
});

window.addEventListener('scroll', animateExperience);