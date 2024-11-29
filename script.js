// Menu Toggle
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll & Navigation Active State
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let header = document.querySelector('header');
    let top = window.scrollY;

    // Sticky header
    header.classList.toggle('sticky', top > 100);

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Close menu on scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// ScrollReveal
ScrollReveal({
    distance: '80px',
    duration: 1000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// Typed.js
const typed = new Typed('.multiple-text', {
    strings: ['BSC-CS Student at YCIS', 'Frontend developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Animate Progress Bars
const progressBars = document.querySelectorAll('.progress-done');

progressBars.forEach(bar => {
    setTimeout(() => {
        bar.style.width = bar.getAttribute('data-done') + '%';
        bar.style.opacity = 1;
    }, 500);
});

// Animate Circular Skills
const circles = document.querySelectorAll('.circle');

circles.forEach(circle => {
    let percent = circle.getAttribute('data-percent');
    circle.style.setProperty('--percent', percent);
});
