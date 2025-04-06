// Theme Toggle
const toggleButton = document.getElementById('theme-toggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    toggleButton.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Custom Cursor
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX - 10}px`;
    cursor.style.top = `${e.pageY - 10}px`;
});

// Parallax Scrolling
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    document.querySelectorAll('section').forEach(section => {
        const speed = 0.5;
        section.style.backgroundPositionY = `${scrollPosition * speed}px`;
    });
});

// Lazy Loading (Native support in modern browsers, no JS needed unless fallback required)