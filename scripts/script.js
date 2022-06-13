const mobileMenuTrigger = document.getElementById('mobileMenuTrigger');
const mobileMenu = document.querySelector('.nav-links-container');
const navLinks = document.querySelectorAll('.nav-links li a');

mobileMenuTrigger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    mobileMenuTrigger.classList.toggle('active');

    // Toggle Aria-Expanded Attribute True / False
    if (mobileMenu.classList.contains('active')) {
        mobileMenuTrigger.setAttribute('aria-expanded', 'true');
    } else {
        mobileMenuTrigger.setAttribute('aria-expanded', 'false');
    }
});

// Provide Styling for Current Page Anchor Tag

navLinks.forEach((link) => {
    if (link.href === window.location.href) {
        link.setAttribute('aria-current', 'page');
    }
});

// Make index.html page active on page load

const baseURI = document.baseURI;
const homePageAnchor = document.getElementById('home');

window.addEventListener('load', () => {
    if (baseURI) {
        homePageAnchor.setAttribute('aria-current', 'page');
    }
});


document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        mobileMenu.classList.remove('active');
        mobileMenuTrigger.classList.remove('active');
    }
});















