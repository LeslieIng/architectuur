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
            'footer-rights': 'All rights reserved.',
            // Project 1: Forum Boerhaave
            'p1-title': 'Forum Boerhaave',
            'p1-meta-loc-label': 'Location',
            'p1-meta-loc': 'Haarlem, NL',
            'p1-meta-cat-label': 'Category',
            'p1-meta-cat': 'Contemporary Architecture / Forum',
            'p1-meta-status-label': 'Status',
            'p1-meta-status': 'Graduation Project',
            'p1-meta-year-label': 'Year',
            'p1-desc-title': 'Everything Under One Roof',
            'p1-desc-1': 'Forum Boerhaave is a response to the contemporary issues of the post-war Boerhaavewijk in Haarlem. The project aims for an iconic and sustainable forum that is ready for the future, as a beating heart for the community.',
            'p1-desc-2': 'The design is situated at the intersection of the district, where the Floris van Adrichemlaan and the Professor Eijkmanlaan cross. The building connects the neighborhood with the underlying Poelpolder via a central atrium that cuts through the volume.',
            'p1-desc-3': 'Sustainability is central through the use of local materials, such as sludge from the Spaarne and reed fibers from the Poelpolder, processed with innovative 3D printing techniques. The construction is based on \'Open Building\' principles, with a wooden column structure that offers maximum flexibility for future adjustments.',
            'p1-cap-1': 'Water Square & West Facade - Spring',
            'p1-cap-2': 'Urban Context',
            'p1-cap-3': 'Central Atrium - Ground Floor',
            'p1-cap-4': 'Interior Void',
            'p1-cap-5': 'Market Square & West Facade - Summer',
            'p1-cap-6': 'Architectural Section',
            'p1-cap-7': 'Support Structure & Open Building',
            'p1-cap-8': 'Skating Rink & West Facade - Winter',
            'p1-back': 'Back to Work',
            'p1-slider-1-title': 'Structure vs. Interior',
            'p1-slider-before': 'Structure',
            'p1-slider-after': 'Interior',
            'p1-slider-2-title': 'Flexibility: Presentation vs. Sport',
            'p1-slider-2-before': 'Presentation',
            'p1-slider-2-after': 'Sport'
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
            'footer-rights': 'Alle rechten voorbehouden.',
            // Project 1: Forum Boerhaave
            'p1-title': 'Forum Boerhaave',
            'p1-meta-loc-label': 'Locatie',
            'p1-meta-loc': 'Haarlem, NL',
            'p1-meta-cat-label': 'Categorie',
            'p1-meta-cat': 'Huidige Architectuur / Forum',
            'p1-meta-status-label': 'Status',
            'p1-meta-status': 'Graduatie Project',
            'p1-meta-year-label': 'Jaar',
            'p1-desc-title': 'Alles Onder Eén Dak',
            'p1-desc-1': 'Forum Boerhaave is een antwoord op de hedendaagse vraagstukken van de naoorlogse Boerhaavewijk in Haarlem. Het project streeft naar een iconisch en duurzaam forum dat klaar is voor de toekomst, als een kloppend hart voor de gemeenschap.',
            'p1-desc-2': 'Het ontwerp is gesitueerd op het knooppunt van de wijk, waar de Floris van Adrichemlaan en de Professor Eijkmanlaan elkaar kruisen. Het gebouw verbindt de wijk met de achterliggende Poelpolder via een centraal atrium dat het volume doorsnijdt.',
            'p1-desc-3': 'Duurzaamheid staat centraal door het gebruik van lokale materialen, zoals bagger uit de Spaarne en rietvezels uit de Poelpolder, verwerkt met innovatieve 3D-printtechnieken. De constructie is gebaseerd op \'Open Bouwen\' principes, met een houten kolommenstructuur die maximale flexibiliteit biedt voor toekomstige aanpassingen.',
            'p1-cap-1': 'Waterplein & Westgevel - Lente',
            'p1-cap-2': 'Stedenbouwkundige Context',
            'p1-cap-3': 'Centraal Atrium - Begane Grond',
            'p1-cap-4': 'Interieur Vide',
            'p1-cap-5': 'Marktplein & Westgevel - Zomer',
            'p1-cap-6': 'Architectonische Doorsnede',
            'p1-cap-7': 'Draagstructuur & Open Bouwen',
            'p1-cap-8': 'Schaatsplein & Westgevel - Winter',
            'p1-back': 'Terug naar Werk',
            'p1-slider-1-title': 'Draagstructuur vs. Inrichting',
            'p1-slider-before': 'Structuur',
            'p1-slider-after': 'Interieur',
            'p1-slider-2-title': 'Flexibiliteit: Presentatie vs. Sport',
            'p1-slider-2-before': 'Presentatie',
            'p1-slider-2-after': 'Sport'
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

    // Image Comparison Slider Logic
    function initComparisons() {
        const sliders = document.querySelectorAll('.comparison-slider');

        sliders.forEach(slider => {
            const overlay = slider.querySelector('.img-overlay');
            const inner = slider.querySelector('.img-overlay-inner');
            const handle = slider.querySelector('.slider-handle');
            let clicked = false;

            function setFixedInnerWidth() {
                if (inner) {
                    inner.style.width = slider.offsetWidth + "px";
                }
            }
            
            setFixedInnerWidth();
            window.addEventListener('resize', setFixedInnerWidth);

            function slide(x) {
                let pos = x - slider.getBoundingClientRect().left;
                if (pos < 0) pos = 0;
                if (pos > slider.offsetWidth) pos = slider.offsetWidth;

                const percentage = (pos / slider.offsetWidth) * 100;
                overlay.style.width = percentage + "%";
                handle.style.left = percentage + "%";
            }

            function onMove(e) {
                if (!clicked) return;
                const x = e.type.includes('touch') ? e.touches[0].pageX : e.pageX;
                slide(x);
            }

            handle.addEventListener('mousedown', (e) => {
                e.preventDefault();
                clicked = true;
            });
            window.addEventListener('mouseup', () => clicked = false);
            window.addEventListener('mousemove', onMove);

            handle.addEventListener('touchstart', (e) => {
                clicked = true;
            });
            window.addEventListener('touchend', () => clicked = false);
            window.addEventListener('touchmove', onMove);
        });
    }

    initComparisons();
});
