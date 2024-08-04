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


// document.addEventListener("DOMContentLoaded", function() {
//     const outerCircle = document.querySelector('.outer-circle');
//     const logos = document.querySelectorAll('.logo');

//     function getRandomPosition(radius) {
//         let angle = Math.random() * 2 * Math.PI;
//         let r = Math.sqrt(Math.random()) * radius;
//         let x = r * Math.cos(angle);
//         let y = r * Math.sin(angle);
//         return { x, y };
//     }

//     function placeLogos() {
//         const radius = outerCircle.clientWidth / 2 - 35; // Adjust for logo size
//         logos.forEach(logo => {
//             let pos = getRandomPosition(radius);
//             logo.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
//         });

//         // Highlight one random logo
//         const randomIndex = Math.floor(Math.random() * logos.length);
//         logos[randomIndex].classList.add('highlight');
//     }

//     placeLogos();
// });


// document.addEventListener("DOMContentLoaded", function() {
//     const outerCircle = document.querySelector('.outer-circle');
//     const logos = document.querySelectorAll('.logo');
//     const outerCircleRadius = outerCircle.offsetWidth / 2;
//     const logoRadius = logos[0].offsetWidth / 2;
//     const minDistance = 15 + logoRadius;

//     function getRandomPosition(angle, radius) {
//         let x = radius * Math.cos(angle);
//         let y = radius * Math.sin(angle);
//         return { x, y };
//     }

//     function isValidPosition(newPos, positions) {
//         for (let pos of positions) {
//             let distance = Math.sqrt(Math.pow(newPos.x - pos.x, 2) + Math.pow(newPos.y - pos.y, 2));
//             if (distance < minDistance * 2) { // Check distance between logos
//                 return false;
//             }
//         }
//         return true;
//     }

//     function placeLogos() {
//         let positions = [];
//         const angleStep = (2 * Math.PI) / logos.length; // Divide circle into equal segments

//         logos.forEach((logo, index) => {
//             let pos;
//             let attempts = 0;
//             do {
//                 let angle = index * angleStep + Math.random() * angleStep; // Add some randomness within the segment
//                 let radius = Math.random() * (outerCircleRadius - minDistance);
//                 pos = getRandomPosition(angle, radius);
//                 attempts++;
//             } while (!isValidPosition(pos, positions) && attempts < 100); // Max 100 attempts to find a valid position

//             // Only place the logo if a valid position is found
//             if (attempts < 100) {
//                 positions.push(pos);
//                 logo.style.position = 'absolute';
//                 logo.style.left = `calc(50% + ${pos.x}px - ${logoRadius}px)`;
//                 logo.style.top = `calc(50% + ${pos.y}px - ${logoRadius}px)`;
//             }
//         });
//     }

//     function highlightRandomLogo() {
//         // Remove previous highlights
//         logos.forEach(logo => {
//             logo.classList.remove('highlight');
//             logo.style.zIndex = 1;
//         });

//         // Highlight one random logo
//         const randomIndex = Math.floor(Math.random() * logos.length);
//         const randomLogo = logos[randomIndex];
//         randomLogo.classList.add('highlight');
//         randomLogo.style.zIndex = 2; // Bring to front

//         // Hide the center circle
//         document.querySelector('.center-circle').style.display = 'none';
//     }

//     // Initial placement
//     placeLogos();

//     // Highlight and reposition logos every 2 seconds
//     setInterval(() => {
//         highlightRandomLogo();
//     }, 2000);
// });



document.addEventListener("DOMContentLoaded", function() {
    const allLogos = document.querySelectorAll('.all-logos img');
    const selectedLogo = document.querySelector('#selectedLogo');
    const detailsHeading = document.querySelector('#detailsHeading');
    const detailsParagraph = document.querySelector('#detailsParagraph');
    let currentIndex = 0;
    let interval;

    // Define an array with the logo details
    const logoDetails = [
        { alt: 'project 1', schoolName: 'Abacus Primary School', details: 'Counselling all mental patients' },
        { alt: 'project 2', schoolName: 'Greenwood International School', details: 'Details about project 2' },
        { alt: 'project 3', schoolName: 'Sunrise Academy', details: 'Details about project 3' },
        { alt: 'project 4', schoolName: 'Horizon High School', details: 'Details about project 4' },
        { alt: 'project 5', schoolName: 'Springfield College', details: 'Details about project 5' },
        { alt: 'project 6', schoolName: 'Evergreen Academy', details: 'Details about project 6' },
        { alt: 'project 7', schoolName: 'Maple Leaf School', details: 'Details about project 7' },
        { alt: 'project 8', schoolName: 'Pine Crest School', details: 'Details about project 8' },
        { alt: 'project 9', schoolName: 'River Valley School', details: 'Details about project 9' },
        { alt: 'project 10', schoolName: 'Mountainview High School', details: 'Details about project 10' },
        { alt: 'project 11', schoolName: 'Ocean Breeze Academy', details: 'Details about project 11' },
        { alt: 'project 12', schoolName: 'Sunset Hills School', details: 'Details about project 12' },
        { alt: 'project 13', schoolName: 'Desert Mirage School', details: 'Details about project 13' },
        { alt: 'project 14', schoolName: 'Northern Lights Academy', details: 'Details about project 14' },
        { alt: 'project 15', schoolName: 'Cedar Grove School', details: 'Details about project 15' },
        { alt: 'project 16', schoolName: 'Willow Creek Academy', details: 'Details about project 16' },
        { alt: 'project 17', schoolName: 'Crystal Lake School', details: 'Details about project 17' },
        { alt: 'project 18', schoolName: 'Starwood Academy', details: 'Details about project 18' },
    ];

    function selectLogo(logo) {
        // Remove highlight from all logos
        allLogos.forEach(l => l.classList.remove('highlight'));

        // Highlight the selected logo
        logo.classList.add('highlight');

        // Update the selected logo display
        selectedLogo.src = logo.src;
        selectedLogo.alt = logo.alt;

        // Find the corresponding details for the selected logo
        const logoDetail = logoDetails.find(detail => detail.alt === logo.alt);
        
        // Update the details only if a matching detail is found
        if (logoDetail) {
            detailsHeading.textContent = logoDetail.schoolName; // Set the school name as heading text
            detailsParagraph.textContent = logoDetail.details; // Set the paragraph text
        }
    }

    allLogos.forEach((logo, index) => {
        logo.addEventListener('click', () => {
            clearInterval(interval);
            currentIndex = index; // Set currentIndex to the clicked logo's index
            selectLogo(logo);
            startInterval(); // Restart the interval after manual selection
        });
    });

    function startInterval() {
        interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % allLogos.length; // Ensure currentIndex wraps around
            selectLogo(allLogos[currentIndex]); // Ensure currentIndex is within bounds
        }, 3000);
    }

    // Initially select a random logo
    if (allLogos.length > 0) {
        currentIndex = Math.floor(Math.random() * allLogos.length);
        selectLogo(allLogos[currentIndex]);
        startInterval();
    }
});

















