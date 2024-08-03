document.querySelectorAll('.logos-container').forEach(container => {
    container.addEventListener('mouseover', () => {
        container.classList.add('paused');
    });

    container.addEventListener('mouseout', () => {
        container.classList.remove('paused');
    });
});

window.addEventListener('scroll', () => {
    const newProject = document.getElementById('newProject');
    const projectLogos = document.querySelector('.reverse-slide');
    const projectLogosRect = projectLogos.getBoundingClientRect();

    if (projectLogosRect.top <= window.innerHeight && projectLogosRect.bottom >= 0) {
        newProject.classList.add('visible');
    } else {
        newProject.classList.remove('visible');
    }
});





document.addEventListener("DOMContentLoaded", function() {
    const logos = document.querySelectorAll('.outer-circle .logo');
    const centerLogo = document.getElementById('center-logo');
    const outerCircle = document.querySelector('.outer-circle');

    function positionLogos() {
        const circleRadius = outerCircle.offsetWidth / 2;
        const isMobileView = window.innerWidth <= 768;
        const logoRadius = isMobileView ? 15 : 35; // 15 for mobile, 35 for desktop

        // Position the logos evenly around the circle's circumference
        logos.forEach((logo, index) => {
            const angle = (index / logos.length) * 2 * Math.PI;
            const distanceFromCenter = circleRadius - logoRadius - 10; // Adjust 10px as needed for spacing
            const x = circleRadius + distanceFromCenter * Math.cos(angle) - logoRadius;
            const y = circleRadius + distanceFromCenter * Math.sin(angle) - logoRadius;
            logo.style.left = `${x}px`;
            logo.style.top = `${y}px`;
        });
    }

    // Reposition logos on window resize to ensure responsiveness
    window.addEventListener('resize', positionLogos);

    let currentIndex = 0;

    function highlightLogo() {
        // Remove highlight from all logos
        logos.forEach(logo => logo.classList.remove('highlight'));

        // Add highlight to the current logo
        logos[currentIndex].classList.add('highlight');
        centerLogo.src = logos[currentIndex].src;

        // Move to the next logo
        currentIndex = (currentIndex + 1) % logos.length;
    }

    // Highlight a new logo every 2 seconds
    setInterval(highlightLogo, 2000);

    // Initial positioning and highlight
    positionLogos();
    highlightLogo();
});





