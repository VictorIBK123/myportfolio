// Theme Management
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');
const themeText = themeToggle.querySelector('.theme-text');

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);
updateThemeButton(currentTheme);

themeToggle.addEventListener('click', function() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeButton(newTheme);
});

function updateThemeButton(theme) {
    if (theme === 'dark') {
        themeIcon.className = 'fas fa-sun';
        themeText.textContent = 'Light';
    } else {
        themeIcon.className = 'fas fa-moon';
        themeText.textContent = 'Dark';
    }
}

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    // Load projects dynamically
    loadProjects();

    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', handleFormSubmission);

    // Initialize scroll animations
    initScrollAnimations();
});

// Project data
const projectsData = [
    {
        title: "Tech Gadget Store",
        description: "A scalable React Native e-commerce application designed for seemless browsing, shopping cart functionality and secure user authentication.",
        technologies: ["React Native", "Expo", "Typescript", "Firebase","Cloudinary"],
        image: "./assets/images/tech.png",
        github: "https://github.com/VictorIBK123/TechhGadgetStore.git",
        demo: "https://drive.google.com/file/d/1Wwgeq6kkBiA3ZFFmAGuylGNfphj9W1lf/view?usp=drive_link"
    },
    {
        title: "AI Quiz App",
        description: "An AI-powered quiz app integrated with Gemini AI to dynamically generate quizzes based on user preferences. Unlike traditional quiz apps with a fixed set of questions, AI Quiz ensures fresh and engaging content every time.",
        technologies: ["React Native", "Expo", "Gemini API"],
        image: "./assets/images/quiz.png",
        github: "https://github.com/VictorIBK123/AIQuiz.git",
        demo: "https://drive.google.com/file/d/1bpUiu2BCd8QZAV85AZc9LRAie3peD8zK/view?usp=drive_link"
    },
    {
        title: "AI Chatbot App",
        description: "An intelligent and responsive mobile AI chatbot that leverages Gemini API for natural language understanding. The app offers seamless conversation, a modern user interface, and persistent chat history ideal for users seeking personalized interaction. ",
        technologies: ["React Native", "Expo", "Gemini API"],
        image: "./assets/images/chatbot.png",
        github: "https://github.com/VictorIBK123/aichatbot.git",
        demo: "https://drive.google.com/file/d/1TnfrcsDYNY2XlSksOLiSfKacJRI-1GiW/view?usp=drive_link"
    },
    
];

// Load projects into the DOM
function loadProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    
    projectsData.forEach((project, index) => {
        const projectCard = createProjectCard(project);
        projectCard.style.animationDelay = `${index * 0.1}s`;
        projectsGrid.appendChild(projectCard);
    });
}

// Create project card element
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card animate-on-scroll';
    
    card.innerHTML = `
        <div class="project-image">
            <img height="200" width="100" src="${project.image}" alt="${project.title}" />
        </div>
        <div class="project-content">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tags">
                ${project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.github}" class="project-link" target="_blank">
                    <i class="fab fa-github"></i> GitHub
                </a>
                <a href="${project.demo}" class="project-link" target="_blank">
                    <i class="fas fa-external-link-alt"></i> Demo
                </a>
            </div>
        </div>
    `;
    
    return card;
}

// Handle contact form submission
function handleFormSubmission(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    const name = e.target.querySelector('input[type="text"]').value;
    const email = e.target.querySelector('input[type="email"]').value;
    const message = e.target.querySelector('textarea').value;
    
    // Simple validation
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Simulate form submission
    const submitButton = e.target.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    setTimeout(() => {
        alert('Thank you for your message! I\'ll get back to you soon.');
        e.target.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 2000);
}

// Initialize scroll animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = document.documentElement.getAttribute('data-theme') === 'dark' 
            ? 'rgba(45, 45, 45, 0.95)' 
            : 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'var(--white)';
        navbar.style.backdropFilter = 'none';
    }
});

// Active navigation link highlighting
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});