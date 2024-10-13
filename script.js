// Get elements
const blackScreen = document.getElementById('black-screen');
const enterAudio = document.getElementById('enter-audio');
const volumeSlider = document.getElementById('volume-slider');

// Set initial volume to match slider value
enterAudio.volume = volumeSlider.value;

// Click event to remove black screen and play audio
blackScreen.addEventListener('click', function() {
    // Play the audio file
    enterAudio.play();
    
    // Fade out the black screen
    blackScreen.style.transition = 'opacity 1s ease';
    blackScreen.style.opacity = '0';

    // After the fade-out, remove the black screen from view
    setTimeout(() => {
        blackScreen.style.display = 'none';
    }, 1000); // 1 second matches the opacity transition

    // Start the fire animation
    createFire();
});

// Update volume when the slider is changed
volumeSlider.addEventListener('input', function() {
    enterAudio.volume = volumeSlider.value;
});

