let currentSlide = 1;

function showSlide(n) {
    // Hide all slides
    document.querySelectorAll('.slide').forEach(slide => {
        slide.style.display = 'none';
    });
    
    // Remove active class from all dots
    document.querySelectorAll('.nav-dot').forEach(dot => {
        dot.classList.remove('active');
    });
    
    // Show current slide
    document.getElementById('slide' + n).style.display = 'flex';
    document.querySelectorAll('.nav-dot')[n-1].classList.add('active');
    
    currentSlide = n;
}

// Initialize - show first slide
showSlide(1);

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight' && currentSlide < 6) {
        showSlide(currentSlide + 1);
    } else if (e.key === 'ArrowLeft' && currentSlide > 1) {
        showSlide(currentSlide - 1);
    }
});

// Auto-advance slides every 8 seconds (optional)
setInterval(() => {
    if (currentSlide < 6) {
        showSlide(currentSlide + 1);
    } else {
        showSlide(1);
    }
}, 1000000);