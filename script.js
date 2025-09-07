document.querySelector('.hero-text button').addEventListener('click', () => {
    const solutionsSection = document.getElementById('solutions');
    solutionsSection.scrollIntoView({ behavior: 'smooth' });
});

const backToTopButton = document.getElementById('backToTop');

// Show button when scrolling down 300px
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

// Scroll to top when button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add tilt effect to client cards
const cards = document.querySelectorAll('.client-card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Calculate position relative to center (in percentage)
        const xPercent = (x / rect.width) * 100;
        const yPercent = (y / rect.height) * 100;

        // Calculate tilt based on cursor position
        // Multiply by 0.15 for subtle effect
        const tiltX = -(yPercent - 50) * 0.15;
        const tiltY = (xPercent - 50) * 0.15;

        // Add transform with pushing effect
        card.style.transform = `
            perspective(1000px) 
            rotateX(${tiltX}deg) 
            rotateY(${tiltY}deg)
            translateZ(-20px)
            scale3d(0.98, 0.98, 0.98)
        `;

        // Dynamic shadow based on tilt
        card.style.boxShadow = `
            ${tiltY / 2}px 
            ${-tiltX / 2}px 
            15px rgba(0, 0, 0, 0.15)
        `;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'none';
        card.style.boxShadow = '0 3px 10px rgba(0, 0, 0, 0.1)';
        card.style.transition = 'all 0.5s ease';
    });
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});