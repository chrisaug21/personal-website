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
                    }
                    #header-placeholder .construction-banner {
                        font-size: 16px !important;
                        padding: 0.5rem !important;
                    }
                    #header-placeholder header {
                        font-size: 16px !important;
                    }
                    #header-placeholder nav {
                        font-size: 16px !important;
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
                        border-bottom: 2px solid #0077cc !important;
                    }
                    #header-placeholder .nav-links a.active:hover {
                        color: white !important;
                        border-bottom: 2px solid white !important;
                    }
                </style>
            `;
            
            const headerHTML = `
                ${headerCSS}
                <div class="construction-banner">
                    🚧 This website is under construction - all content may be placeholder or work-in-progress 🚧
                </div>
                <header>
                    <nav style="margin-bottom: 0;">
                        <div class="logo"><a href="index.html"><img src="images/glasses icon.png" alt="Chris Augustine" style="height: 80px;"></a></div>
                        <ul class="nav-links">
                            <li><a href="about.html" class="${pageName === 'about' ? 'active' : ''}">About</a></li>
                            <li><a href="experience-journey.html" class="${pageName === 'experience-journey' || pageName === 'experience' ? 'active' : ''}">Experience</a></li>
                            <li><a href="skills.html" class="${pageName === 'skills' ? 'active' : ''}">Skills</a></li>
                            <li><a href="philosophy.html" class="${pageName === 'philosophy' ? 'active' : ''}">Philosophy</a></li>
                            <li><a href="contact.html" class="${pageName === 'contact' ? 'active' : ''}">Contact</a></li>
                        </ul>
                    </nav>
                </header>
            `;
            
            headerPlaceholder.innerHTML = headerHTML;
        }
    }
    
    // Call the function to insert the header
    insertHeader();
}); 