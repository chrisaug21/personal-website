// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple animation for sections as they scroll into view
    const sections = document.querySelectorAll('section');
    
    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.style.opacity = 1;
                section.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Initial styles for animation
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Check scroll position on page load and scroll
    checkScroll();
    window.addEventListener('scroll', checkScroll);
    
    // Handle mobile menu - in case the components.js script doesn't load correctly
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuButton && mobileMenuClose && mobileMenu) {
        // Open mobile menu
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.add('open');
            document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
        });
        
        // Close mobile menu
        mobileMenuClose.addEventListener('click', function() {
            mobileMenu.classList.remove('open');
            document.body.style.overflow = ''; // Re-enable scrolling
        });
        
        // Close menu when clicking a mobile navigation link
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('open');
                document.body.style.overflow = ''; // Re-enable scrolling
            });
        });
    }
});
