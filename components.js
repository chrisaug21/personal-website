// Components for site-wide reuse
document.addEventListener('DOMContentLoaded', function() {
    // Insert header with construction banner
    function insertHeader() {
        const headerPlaceholder = document.getElementById('header-placeholder');
        if (headerPlaceholder) {
            const currentPath = window.location.pathname;
            const pageName = currentPath.split('/').pop().split('.')[0];
            
            // Check if Font Awesome is already loaded
            if (!document.querySelector('link[href*="font-awesome"]')) {
                const fontAwesomeLink = document.createElement('link');
                fontAwesomeLink.rel = 'stylesheet';
                fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
                document.head.appendChild(fontAwesomeLink);
            }
            
            // Add CSS to ensure consistent sizing for the header and banner
            const headerCSS = `
                <style>
                    #header-placeholder {
                        font-size: 16px !important;
                        width: 100vw !important;
                        margin: 0 !important;
                        padding: 0 !important;
                        overflow-x: hidden !important;
                    }
                    #header-placeholder .construction-banner {
                        font-size: 16px !important;
                        padding: 0.5rem !important;
                        z-index: 1003 !important;
                        margin: 0 !important;
                        width: 100vw !important;
                        box-sizing: border-box !important;
                    }
                    #header-placeholder header {
                        font-size: 16px !important;
                        position: relative !important;
                        padding: 0 !important;
                        margin: 0 !important;
                        max-width: 100vw !important;
                        width: 100vw !important;
                        box-sizing: border-box !important;
                    }
                    #header-placeholder nav {
                        font-size: 16px !important;
                        display: flex !important;
                        justify-content: center !important;
                        align-items: center !important;
                        width: 100vw !important;
                        max-width: 100vw !important;
                        margin: 0 !important;
                        padding: 1rem !important;
                        background-color: var(--gold-accent) !important;
                        box-sizing: border-box !important;
                    }
                    #header-placeholder .nav-container {
                        max-width: 1200px !important;
                        margin: 0 auto !important;
                        width: 100% !important;
                        display: flex !important;
                        justify-content: space-between !important;
                        align-items: center !important;
                    }
                    #header-placeholder .logo {
                        flex-shrink: 0;
                    }
                    #header-placeholder .logo img {
                        height: 80px !important;
                    }
                    #header-placeholder .nav-links {
                        font-size: 18px !important;
                        display: flex !important;
                        align-items: center !important;
                        gap: 1.5rem !important;
                    }
                    #header-placeholder .nav-links li {
                        font-size: 18px !important;
                        list-style: none !important;
                        padding: 0 !important;
                    }
                    #header-placeholder .nav-links a {
                        font-size: 18px !important;
                        font-weight: 600 !important;
                        text-decoration: none !important;
                        color: #333 !important;
                        padding: 0.5rem 1rem !important;
                        border-radius: 4px !important;
                        transition: all 0.3s ease !important;
                    }
                    #header-placeholder .nav-links a:hover {
                        background-color: #0077cc !important;
                        color: white !important;
                        transform: translateY(-2px) !important;
                    }
                    #header-placeholder .nav-links a.active {
                        color: #0077cc !important;
                        background-color: rgba(0, 119, 204, 0.1) !important;
                    }
                    #header-placeholder .nav-links a.active:hover {
                        color: white !important;
                        background-color: #0077cc !important;
                    }
                    
                    /* Mobile menu styles */
                    #header-placeholder .mobile-menu-button {
                        display: none !important;
                        font-size: 28px !important;
                        background: none !important;
                        border: none !important;
                        color: #333 !important;
                        cursor: pointer !important;
                        padding: 10px !important;
                        z-index: 1002 !important;
                        flex-shrink: 0;
                        position: absolute !important;
                        right: 1rem !important;
                        top: 50% !important;
                        transform: translateY(-50%) !important;
                    }
                    
                    #header-placeholder .mobile-menu-button:hover {
                        color: #0077cc !important;
                    }
                    
                    #header-placeholder .mobile-menu {
                        display: none !important;
                        position: fixed !important;
                        top: 0 !important;
                        left: 0 !important;
                        width: 100% !important;
                        height: 100% !important;
                        background: linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(245,245,255,0.98) 100%) !important;
                        z-index: 1003 !important;
                        flex-direction: column !important;
                        justify-content: flex-start !important;
                        align-items: flex-start !important;
                        transition: opacity 0.4s ease, transform 0.4s ease !important;
                        opacity: 0 !important;
                        transform: translateY(-20px) !important;
                        padding: 80px 2rem 2rem 2rem !important;
                        overflow-y: auto !important;
                    }
                    
                    #header-placeholder .mobile-menu.open {
                        display: flex !important;
                        opacity: 1 !important;
                        transform: translateY(0) !important;
                    }
                    
                    #header-placeholder .mobile-menu-close {
                        font-size: 32px !important;
                        background: none !important;
                        border: none !important;
                        color: #333 !important;
                        cursor: pointer !important;
                        z-index: 1005 !important;
                        padding: 0 !important;
                        position: absolute !important;
                        right: 2rem !important;
                        top: 35px !important;
                    }
                    
                    #header-placeholder .mobile-menu-close:hover {
                        color: #0077cc !important;
                        transform: rotate(90deg) !important;
                    }
                    
                    #header-placeholder .mobile-menu-header {
                        display: flex !important;
                        align-items: center !important;
                        margin-bottom: 2rem !important;
                        width: 100% !important;
                        padding-bottom: 1rem !important;
                        border-bottom: 1px solid rgba(0,0,0,0.1) !important;
                    }
                    
                    #header-placeholder .mobile-menu-logo-title {
                        display: flex !important;
                        align-items: center !important;
                        gap: 1rem !important;
                        flex-shrink: 0 !important;
                        text-decoration: none !important;
                        color: inherit !important;
                    }
                    
                    #header-placeholder .mobile-menu-header img {
                        height: 60px !important;
                        flex-shrink: 0 !important;
                    }
                    
                    #header-placeholder .mobile-menu-header h2 {
                        font-size: 24px !important;
                        font-weight: 600 !important;
                        color: #333 !important;
                        margin: 0 !important;
                        white-space: nowrap !important;
                    }
                    
                    #header-placeholder .mobile-nav-links {
                        display: flex !important;
                        flex-direction: column !important;
                        align-items: flex-start !important;
                        gap: 0.5rem !important;
                        width: 100% !important;
                        padding: 0 !important;
                        margin: 0 0 auto 0 !important;
                    }
                    
                    #header-placeholder .mobile-nav-links li {
                        list-style: none !important;
                        width: 100% !important;
                        text-align: left !important;
                        border-radius: 8px !important;
                        margin-bottom: 0.5rem !important;
                        transition: background-color 0.3s ease !important;
                    }
                    
                    #header-placeholder .mobile-nav-links a {
                        font-size: 22px !important;
                        font-weight: 600 !important;
                        text-decoration: none !important;
                        color: #333 !important;
                        padding: 1rem 1.5rem !important;
                        display: block !important;
                        transition: all 0.3s ease !important;
                        width: 100% !important;
                        border-radius: 8px !important;
                        border-left: 4px solid transparent !important;
                    }
                    
                    #header-placeholder .mobile-nav-links a.active {
                        color: #0077cc !important;
                        border-left: 4px solid #0077cc !important;
                        background-color: rgba(0, 119, 204, 0.05) !important;
                    }
                    
                    #header-placeholder .mobile-nav-links a:hover {
                        background-color: rgba(0, 119, 204, 0.1) !important;
                        color: #0077cc !important;
                        transform: translateX(5px) !important;
                    }
                    
                    #header-placeholder .mobile-social-links {
                        display: flex !important;
                        justify-content: flex-start !important;
                        gap: 1.5rem !important;
                        margin-top: 2rem !important;
                        padding: 1.5rem 0 !important;
                        width: 100% !important;
                        border-top: 1px solid rgba(0,0,0,0.1) !important;
                    }
                    
                    #header-placeholder .mobile-social-links a {
                        font-size: 1.8rem !important;
                        color: #333 !important;
                        transition: all 0.3s ease !important;
                        display: flex !important;
                        align-items: center !important;
                        justify-content: center !important;
                        width: 50px !important;
                        height: 50px !important;
                        border-radius: 50% !important;
                        background-color: rgba(0,0,0,0.05) !important;
                    }
                    
                    #header-placeholder .mobile-social-links a:hover {
                        color: white !important;
                        background-color: #0077cc !important;
                        transform: translateY(-5px) !important;
                    }
                    
                    @media (max-width: 768px) {
                        #header-placeholder .nav-links {
                            display: none !important;
                        }
                        
                        #header-placeholder .mobile-menu-button {
                            display: block !important;
                        }
                        
                        #header-placeholder nav {
                            padding: 0.5rem 1rem !important;
                        }
                        
                        #header-placeholder .logo img {
                            height: 60px !important;
                        }
                    }
                </style>
            `;
            
            const headerHTML = `
                ${headerCSS}
                <div class="construction-banner">
                    🚧 This website is under construction - all content may be placeholder or work-in-progress 🚧
                </div>
                <header>
                    <nav>
                        <div class="nav-container">
                            <div class="logo"><a href="index.html"><img src="images/glasses icon.png" alt="Chris Augustine"></a></div>
                            <ul class="nav-links">
                                <li><a href="about.html" class="${pageName === 'about' ? 'active' : ''}">About</a></li>
                                <li><a href="experience-journey.html" class="${pageName === 'experience-journey' || pageName === 'experience' ? 'active' : ''}">Experience</a></li>
                                <li><a href="skills.html" class="${pageName === 'skills' ? 'active' : ''}">Skills</a></li>
                                <li><a href="philosophy.html" class="${pageName === 'philosophy' ? 'active' : ''}">Philosophy</a></li>
                                <li><a href="contact.html" class="${pageName === 'contact' ? 'active' : ''}">Contact</a></li>
                            </ul>
                            <button class="mobile-menu-button" aria-label="Open menu">☰</button>
                        </div>
                    </nav>
                    
                    <!-- Mobile Menu -->
                    <div class="mobile-menu">
                        <div class="mobile-menu-header">
                            <div class="logo-container">
                                <a href="index.html">
                                    <img src="images/glasses icon.png" alt="Chris Augustine">
                                </a>
                                <a href="index.html" style="text-decoration: none; color: inherit;">
                                    <h2>Chris Augustine</h2>
                                </a>
                            </div>
                            <button class="mobile-menu-close" aria-label="Close menu">✕</button>
                        </div>
                        
                        <ul class="mobile-nav-links">
                            <li><a href="about.html" class="${pageName === 'about' ? 'active' : ''}">About</a></li>
                            <li><a href="experience-journey.html" class="${pageName === 'experience-journey' || pageName === 'experience' ? 'active' : ''}">Experience</a></li>
                            <li><a href="skills.html" class="${pageName === 'skills' ? 'active' : ''}">Skills</a></li>
                            <li><a href="philosophy.html" class="${pageName === 'philosophy' ? 'active' : ''}">Philosophy</a></li>
                            <li><a href="contact.html" class="${pageName === 'contact' ? 'active' : ''}">Contact</a></li>
                        </ul>
                        
                        <div class="mobile-social-links">
                            <a href="https://www.linkedin.com/in/chrisaug21" target="_blank" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                            <a href="mailto:chris@chrisaug.com" title="Email"><i class="fas fa-envelope"></i></a>
                        </div>
                    </div>
                </header>
            `;
            
            headerPlaceholder.innerHTML = headerHTML;
            
            // Mobile menu toggle functionality
            const mobileMenuButton = headerPlaceholder.querySelector('.mobile-menu-button');
            const mobileMenuClose = headerPlaceholder.querySelector('.mobile-menu-close');
            const mobileMenu = headerPlaceholder.querySelector('.mobile-menu');
            const mobileNavLinks = headerPlaceholder.querySelectorAll('.mobile-nav-links a');
            const mobileMenuHeader = headerPlaceholder.querySelector('.mobile-menu-header');
            const mobileSocialLinks = headerPlaceholder.querySelectorAll('.mobile-social-links a');
            
            if (mobileMenuButton && mobileMenuClose && mobileMenu) {
                // Open mobile menu
                mobileMenuButton.addEventListener('click', function() {
                    mobileMenu.classList.add('open');
                    document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
                    
                    // Animate menu items in sequence
                    if (mobileMenuHeader) {
                        mobileMenuHeader.style.opacity = '0';
                        mobileMenuHeader.style.transform = 'translateY(-20px)';
                        setTimeout(() => {
                            mobileMenuHeader.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                            mobileMenuHeader.style.opacity = '1';
                            mobileMenuHeader.style.transform = 'translateY(0)';
                        }, 100);
                    }
                    
                    mobileNavLinks.forEach((link, index) => {
                        const li = link.parentElement;
                        li.style.opacity = '0';
                        li.style.transform = 'translateX(-20px)';
                        setTimeout(() => {
                            li.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                            li.style.opacity = '1';
                            li.style.transform = 'translateX(0)';
                        }, 100 + (index * 50));
                    });
                    
                    mobileSocialLinks.forEach((link, index) => {
                        link.style.opacity = '0';
                        link.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            link.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                            link.style.opacity = '1';
                            link.style.transform = 'translateY(0)';
                        }, 300 + (index * 50));
                    });
                });
                
                // Close mobile menu
                mobileMenuClose.addEventListener('click', function() {
                    mobileMenu.classList.remove('open');
                    document.body.style.overflow = ''; // Re-enable scrolling
                    
                    // Reset animations for next open
                    setTimeout(() => {
                        if (mobileMenuHeader) {
                            mobileMenuHeader.style.transition = 'none';
                            mobileMenuHeader.style.opacity = '';
                            mobileMenuHeader.style.transform = '';
                        }
                        
                        mobileNavLinks.forEach(link => {
                            const li = link.parentElement;
                            li.style.transition = 'none';
                            li.style.opacity = '';
                            li.style.transform = '';
                        });
                        
                        mobileSocialLinks.forEach(link => {
                            link.style.transition = 'none';
                            link.style.opacity = '';
                            link.style.transform = '';
                        });
                    }, 400);
                });
                
                // Close menu when clicking a link
                mobileNavLinks.forEach(link => {
                    link.addEventListener('click', function() {
                        mobileMenu.classList.remove('open');
                        document.body.style.overflow = ''; // Re-enable scrolling
                        
                        // Reset animations for next open
                        setTimeout(() => {
                            if (mobileMenuHeader) {
                                mobileMenuHeader.style.transition = 'none';
                                mobileMenuHeader.style.opacity = '';
                                mobileMenuHeader.style.transform = '';
                            }
                            
                            mobileNavLinks.forEach(link => {
                                const li = link.parentElement;
                                li.style.transition = 'none';
                                li.style.opacity = '';
                                li.style.transform = '';
                            });
                            
                            mobileSocialLinks.forEach(link => {
                                link.style.transition = 'none';
                                link.style.opacity = '';
                                link.style.transform = '';
                            });
                        }, 400);
                    });
                });
            }
        }
    }
    
    // Call the function to insert the header
    insertHeader();
}); 