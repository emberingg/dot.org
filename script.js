function autoScaleContent() {
    const scaleRatio = Math.min(
        window.innerWidth / document.body.offsetWidth,
        window.innerHeight / document.body.offsetHeight
    );
    document.body.style.transform = `scale(${scaleRatio})`;
    document.body.style.transformOrigin = 'top center';
    if (window.pJSDom && window.pJSDom.length > 0) {
        window.pJSDom[0].pJS.fn.particlesRefresh();
    }
}


function typeText(text, element) {
    let index = 0;
    const speed = 250; 
    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }
    type();
}
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.style.display = 'none'; 
    initializeVideoPlayer(); 
}
function initializeVideoPlayer() {
    const videos = [
        "https://github.com/astriids/wintrss.github.io/releases/download/beetleguese/vid1.mp4",
        "https://github.com/astriids/wintrss.github.io/releases/download/beetleguese/vid2.mp4",
        "https://github.com/astriids/wintrss.github.io/releases/download/beetleguese/vid3.mp4",
        "https://github.com/astriids/wintrss.github.io/releases/download/beetleguese/vid4.mp4",
        "https://github.com/astriids/wintrss.github.io/releases/download/beetleguese/vid5.mp4"
    ];
    let currentVideoIndex = 0;
    const videoElement = document.getElementById('video');
    const volume = 0.5; 
    videoElement.volume = volume;
    function playNextVideo() {
        currentVideoIndex++;
        if (currentVideoIndex >= videos.length) {
            currentVideoIndex = 0; 
        }
        videoElement.src = videos[currentVideoIndex];
        videoElement.play();
    }
    videoElement.addEventListener('ended', playNextVideo);
    videoElement.src = videos[currentVideoIndex];
    videoElement.play();
}
window.onload = function() {
    autoScaleContent();
    typeText("[ CLICK TO ENTER ]", document.querySelector('.loading-text'));
    document.getElementById('loadingScreen').addEventListener('click', hideLoadingScreen);
};
window.onresize = function() {
    autoScaleContent();
    if (window.pJSDom && window.pJSDom.length > 0) {
        window.pJSDom[0].pJS.fn.particlesRefresh();
    }
};
