// Menu mobile
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.innerHTML = navLinks.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });

    // Fermer le menu en cliquant sur un lien
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
}

// Animation des barres de compétences
function animateSkills() {
    const skillProgresses = document.querySelectorAll('.skill-progress');
    
    skillProgresses.forEach(skill => {
        const width = skill.getAttribute('data-width');
        skill.style.width = width + '%';
    });
}

// Observer pour déclencher l'animation des compétences
const skillsSection = document.querySelector('.skills-detailed') || document.querySelector('.skills-page');
if (skillsSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
            }
        });
    }, { threshold: 0.3 });

    observer.observe(skillsSection);
}

// Bouton retour en haut
const scrollTop = document.getElementById('scrollTop');

if (scrollTop) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTop.classList.add('active');
        } else {
            scrollTop.classList.remove('active');
        }
    });

    scrollTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Formulaire de contact (si présent sur la page)
const contactForm = document.getElementById('contactForm') || document.getElementById('contactFormPage');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Récupération des valeurs du formulaire
        const formData = new FormData(contactForm);
        const formValues = Object.fromEntries(formData);
        
        // Simulation d'envoi
        console.log('Formulaire envoyé avec les données:', formValues);
        
        // Message de succès
        alert('Merci pour votre message ! Je vous répondrai dans les plus brefs délais.');
        
        // Réinitialisation du formulaire
        contactForm.reset();
    });
}

// Animation au chargement de la page
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Animer les barres de compétences si elles sont visibles au chargement
    const skillsVisible = document.querySelector('.skill-progress');
    if (skillsVisible) {
        const rect = skillsVisible.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            animateSkills();
        }
    }
});

// Animation des cartes au survol
document.querySelectorAll('.project-card-page, .service-card, .project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Navigation active
const currentPage = window.location.pathname.split('/').pop();
const navButtons = document.querySelectorAll('.nav-btn');

navButtons.forEach(button => {
    const buttonHref = button.getAttribute('href');
    if (buttonHref === currentPage || (currentPage === '' && buttonHref === 'index.html')) {
        button.classList.add('active');
    } else {
        button.classList.remove('active');
    }
});