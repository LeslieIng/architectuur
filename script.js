// Minimalist interactions
document.addEventListener('DOMContentLoaded', () => {
    // Header scroll effect
    const header = document.getElementById('main-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Fade up animations for sections
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        observer.observe(section);
    });

    // Language Toggle Logic
    const langBtn = document.getElementById('lang-toggle');
    const translations = {
        en: {
            'nav-about': 'About',
            'nav-work': 'Work',
            'nav-contact': 'Contact',
            'hero-title': 'I am an architect',
            'hero-subtitle': 'Minimalist design. Functional spaces.',
            'projects-title': 'Selected Projects',
            'proj-1-cat': 'Residential',
            'proj-2-cat': 'Interior',
            'proj-3-cat': 'Concept',
            'proj-4-cat': 'Public Space',
            'proj-5-cat': 'Cultural',
            'proj-6-cat': 'Renovation',
            'about-title': 'About',
            'about-text': 'I am an architect. I believe in the power of simplicity, focusing on pure forms, natural light, and authentic materials to create spaces that inspire quiet confidence.',
            'contact-title': 'Let\'s Talk',
            'contact-subtitle': 'Have a project in mind?',
            'footer-rights': 'All rights reserved.'
        },
        nl: {
            'nav-about': 'Over',
            'nav-work': 'Werk',
            'nav-contact': 'Contact',
            'hero-title': 'Ik ben een architect',
            'hero-subtitle': 'Minimalistisch ontwerp. Functionele ruimtes.',
            'projects-title': 'Geselecteerde Projecten',
            'proj-1-cat': 'Residentieel',
            'proj-2-cat': 'Interieur',
            'proj-3-cat': 'Concept',
            'proj-4-cat': 'Openbare Ruimte',
            'proj-5-cat': 'Cultureel',
            'proj-6-cat': 'Renovatie',
            'about-title': 'Over',
            'about-text': 'Ik ben een architect. Ik geloof in de kracht van eenvoud, met de nadruk op pure vormen, natuurlijk licht en authentieke materialen om ruimtes te creëren die rustige zelfverzekerdheid uitstralen.',
            'contact-title': 'Laten we praten',
            'contact-subtitle': 'Heeft u een project in gedachten?',
            'footer-rights': 'Alle rechten voorbehouden.'
        }
    };

    let currentLang = 'nl';

    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'nl' ? 'en' : 'nl';
        document.documentElement.lang = currentLang;
        langBtn.textContent = currentLang === 'nl' ? 'EN' : 'NL';
        
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[currentLang][key]) {
                el.textContent = translations[currentLang][key];
            }
        });
    });
});
