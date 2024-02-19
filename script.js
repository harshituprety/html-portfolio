// Simulate a delay for loading the answer
setTimeout(() => {
    // Hide the loading animation
    const loadingAnimation = document.querySelector('.loading-animation');
    loadingAnimation.style.display = 'none';

    // Fade in the answer content
    const answerContent = document.querySelector('.answer-content');
    answerContent.style.opacity = 1;
}, 2000); // Delay for 2 seconds
