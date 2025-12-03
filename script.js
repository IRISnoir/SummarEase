document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }));
    }
});

// Update percentage when page loads
document.addEventListener('DOMContentLoaded', function () {
    const rangeSlider = document.getElementById('summaryLength');
    const percentageDisplay = document.getElementById('summaryPercentage');

    // Set initial value
    if (rangeSlider && percentageDisplay) {
        percentageDisplay.textContent = 'Summarization Ratio: ' + rangeSlider.value + '%';

        // Update percentage when slider is moved
        rangeSlider.addEventListener('input', function () {
            percentageDisplay.textContent = 'Summarization Ratio: ' + this.value + '%';
        });
    }
});