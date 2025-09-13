home/victor-ibk/Programming/MyPortfolioWebsite/react-native-portfolio/src/js/animations.js
// Typing animation for hero title
function initTypingAnimation() {
    const heroTitle = document.querySelector('.hero-title');
    const text = 'React Native Developer';
    heroTitle.innerHTML = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            heroTitle.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            // Add cursor blink effect
            heroTitle.innerHTML += '<span class="cursor">|</span>';
            setTimeout(() => {
                const cursor = document.querySelector('.cursor');
                if (cursor) cursor.remove();
            }, 3000);
        }
    };
    
    setTimeout(typeWriter, 1000);
}

// Counter animation for stats
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat h3');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.textContent);
                const increment = target / 50;
                let current = 0;
                
                const updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        counter.textContent = Math.ceil(current) + (target === 100 ? '%' : '+');
                        setTimeout(updateCounter, 40);
                    } else {
                        counter.textContent = target + (target === 100 ? '%' : '+');
                    }
                };
                
                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// Parallax effect for hero section
function initParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const parallaxSpeed = 0.5;
        
        if (hero) {
            hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        }
    });
}

// Staggered animation for skill cards
function initStaggeredAnimations() {
    const skillCards = document.querySelectorAll('.skill-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });
    
    skillCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
}

// Floating animation for mobile mockup
function initFloatingAnimation() {
    const mobileMockup = document.querySelector('.mobile-mockup');
    if (mobileMockup) {
        mobileMockup.style.animation = 'float 3s ease-in-out infinite';
    }
}

// Add CSS for floating animation
const floatingStyles = `
    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
    }
    
    .cursor {
        animation: blink 1s infinite;
    }
    
    @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
    }
`;

// Inject styles
const styleSheet = document.createElement('style');
styleSheet.textContent = floatingStyles;
document.head.appendChild(styleSheet);

// Initialize all animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        initTypingAnimation();
        initCounterAnimation();
        initParallaxEffect();
        initStaggeredAnimations();
        initFloatingAnimation();
    }, 500);
});

// Smooth reveal animations for sections
function initSectionAnimations() {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        section.classList.add('section-hidden');
        observer.observe(section);
    });
}

// Add section animation styles
const sectionStyles = `
    .section-hidden {
        opacity: 0;
        transform: translateY(50px);
        transition: all 0.8s ease;
    }
    
    .section-visible {
        opacity: 1;
        transform: translateY(0);
    }
`;

const sectionStyleSheet = document.createElement('style');
sectionStyleSheet.textContent = sectionStyles;
document.head.appendChild(sectionStyleSheet);

// Initialize section animations
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initSectionAnimations, 100);
});