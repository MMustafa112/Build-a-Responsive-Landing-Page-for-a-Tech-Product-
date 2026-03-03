// 1. Mobile Menu Toggle Logic
const menuBtn = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('#nav-list');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// 2. Scroll Animation Logic
const observerOptions = { threshold: 0.1 };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.card, .price-card').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
    observer.observe(el);
});
