function toggleMenu() {
    const menuContainer = document.getElementById('menu-container');
    menuContainer.classList.toggle('open');
}

function hoverEffect(element) {
    const bands = document.querySelectorAll('.band');
    bands.forEach(band => {
        if (band !== element) {
            band.style.transform = 'scale(0.95)';
        }
    });
    element.style.transform = 'scale(1.1)';
}

function resetEffect(element) {
    const bands = document.querySelectorAll('.band');
    bands.forEach(band => {
        band.style.transform = 'scale(1)';
    });
}

// Optional: Smooth scroll functionality if you want to scroll to a specific band
function scrollToBand(bandElement) {
    const container = document.querySelector('.bands-container');
    container.scroll({
        top: bandElement.offsetTop,
        behavior: 'smooth'
    });
}
