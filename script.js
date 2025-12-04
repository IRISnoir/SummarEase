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

// Typing animation for tagline with colored "Let SummarEase help you" part
document.addEventListener('DOMContentLoaded', function () {
    const mainText = "Need help understanding something? Studying for an exam? Trying to find a better way to explain something? ";
    const highlightText = "Let SummarEase help you!";
    const typingElement = document.getElementById('typing-text');
    const cursorElement = document.querySelector('.cursor');

    let i = 0;
    const speed = 35; // typing speed in milliseconds

    function typeWriter() {
        if (i < mainText.length) {
            // Typing main text
            typingElement.textContent += mainText.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else if (i >= mainText.length && i < mainText.length + highlightText.length) {
            // Typing highlighted text character by character
            const highlightIndex = i - mainText.length;

            if (highlightIndex === 0) {
                // Add opening span tags at the beginning of highlighted text
                typingElement.innerHTML += '<span class="highlight">Let SummarEase help <span class="bold-you">you</span>!</span>';
                // We'll build the actual text character by character in the highlight container
            }

            // Get the highlight span elements
            const highlightSpan = typingElement.querySelector('.highlight');
            const boldSpan = typingElement.querySelector('.bold-you');

            // Update the text content character by character
            if (highlightIndex < "Let SummarEase help ".length) {
                // Regular text (before "you")
                highlightSpan.textContent = highlightText.substring(0, highlightIndex + 1);
            } else if (highlightIndex < "Let SummarEase help you".length) {
                // "you" part (should be bold)
                const regularPart = "Let SummarEase help ";
                const boldPart = "you".substring(0, highlightIndex - regularPart.length + 1);
                highlightSpan.innerHTML = regularPart + '<span class="bold-you">' + boldPart + '</span>';
            } else {
                // After "you" (the exclamation mark and closing tags)
                const regularAndBoldPart = "Let SummarEase help <span class=\"bold-you\">you</span>";
                const remainingPart = highlightText.substring(highlightIndex);
                highlightSpan.innerHTML = regularAndBoldPart + remainingPart;
            }

            i++;
            setTimeout(typeWriter, speed);
        } else if (i === mainText.length + highlightText.length) {
            // Animation completed - hide cursor
            cursorElement.style.display = 'none';
            i++; // Prevent re-entry
        }
    }

    // Start the typing animation
    typeWriter();
});