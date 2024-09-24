const colors = [
    '#ff0000',
    '#000000' 
];
function hexToRgb(hex) {
    hex = hex.replace(/^#/, '');
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);
    return [r, g, b];
}
document.getElementById('enter-screen').addEventListener('click', function() {
    document.getElementById('enter-screen').style.display = 'none';
    document.getElementById('opacity-overlay').style.display = 'block';
    document.getElementById('main-content').style.display = 'flex'; 
    const bgVideo = document.getElementById('bg-video');
    bgVideo.muted = false; 
    bgVideo.play(); 
    startRGBGlow();
});
function startRGBGlow() {
    const textElements = [
        ...document.querySelectorAll('.tag'),
        ...document.querySelectorAll('.link')
    ];
    const glowingElements = [
        document.querySelector('.container'),
        document.querySelector('.pfp')
    ];

    const rgbColors = colors.map(hexToRgb);
    let colorIndex = 0;
    let step = 0;

    setInterval(() => {
        const [r1, g1, b1] = rgbColors[colorIndex];
        const [r2, g2, b2] = rgbColors[(colorIndex + 1) % rgbColors.length];
        const r = Math.round(r1 + (r2 - r1) * (step / 100));
        const g = Math.round(g1 + (g2 - g1) * (step / 100));
        const b = Math.round(b1 + (b2 - b1) * (step / 100));
        const rgbColor = `rgb(${r}, ${g}, ${b})`;
        textElements.forEach(el => {
            el.style.color = rgbColor;
            el.style.textShadow = `0 0 10px ${rgbColor}`;
        });
        glowingElements.forEach(el => {
            el.style.boxShadow = `0 0 15px ${rgbColor}, 0 0 30px ${rgbColor}`;
        });

        step++;
        if (step > 100) {
            step = 0;
            colorIndex = (colorIndex + 1) % rgbColors.length;
        }
    }, 50);
}
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('main-content').style.display = 'none'; 
});
