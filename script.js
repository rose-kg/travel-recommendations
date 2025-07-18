// Destination data with detailed information
const destinations = {
    beaches: [
        {
            name: "Bora Bora - French Polynesia",
            image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            description: "An island in the Leeward group of the Society Islands of French Polynesia, an overseas collectivity of France located in the Pacific Ocean. Known for its stunning turquoise lagoon and luxury overwater bungalows.",
            details: {
                bestTime: "May to October (dry season)",
                activities: "Snorkeling, scuba diving, lagoon tours, hiking Mount Otemanu",
                temperature: "75-85°F (24-29°C)",
                perfectFor: "Honeymooners, luxury travelers, water sports enthusiasts",
                highlights: "Overwater bungalows, coral gardens, Mount Otemanu, lagoon excursions"
            }
        },
        {
            name: "Maldives - Indian Ocean Paradise",
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/0b/a5/a6/caption.jpg?w=2400&h=-1&s=1&cx=1920&cy=1080&chk=v1_15c12bc8431b4bf1b61e",
            description: "A tropical paradise consisting of 1,192 coral islands grouped in 26 atolls. Famous for crystal-clear waters, pristine white sand beaches, and world-class diving spots.",
            details: {
                bestTime: "November to April (dry season)",
                activities: "Diving, snorkeling, dolphin watching, spa treatments, water sports",
                temperature: "77-88°F (25-31°C)",
                perfectFor: "Honeymooners, divers, luxury seekers, beach lovers",
                highlights: "Overwater villas, manta ray diving, bioluminescent beaches, luxury resorts"
            }
        }
    ],
    temples: [
        {
            name: "Wat Benchamabophit - Thailand",
            image: "https://hips.hearstapps.com/hmg-prod/images/marble-elephant-in-fully-carved-famous-sandstone-royalty-free-image-1602776763.jpg?crop=1xw:1xh;center,top&resize=980:*",
            description: "Known as the Marble Temple, this stunning Buddhist temple in Bangkok showcases exquisite Thai architecture with intricate golden decorations, ornate carvings, and traditional red-tiled roofs. A masterpiece of Thai craftsmanship and spiritual design.",
            details: {
                bestTime: "November to March (cool and dry season)",
                activities: "Temple exploration, meditation sessions, photography, cultural tours, monk chanting ceremonies",
                temperature: "75-85°F (24-29°C)",
                perfectFor: "Spiritual seekers, photographers, cultural enthusiasts, architecture lovers",
                highlights: "Golden decorative elements, intricate Thai carvings, traditional architecture, peaceful courtyards, morning monk ceremonies"
            }
        },
        {
            name: "Kyoto Temples - Japan",
            image: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            description: "Ancient capital of Japan, home to over 2,000 temples and shrines. Famous for its classical Buddhist temples, gardens, imperial palaces, and traditional wooden houses, showcasing Japan's spiritual heritage.",
            details: {
                bestTime: "March to May (spring) or September to November (autumn)",
                activities: "Temple visits, meditation sessions, tea ceremonies, garden tours, cultural workshops",
                temperature: "50-75°F (10-24°C) varies by season",
                perfectFor: "Spiritual seekers, cultural enthusiasts, photographers, meditation practitioners",
                highlights: "Fushimi Inari Shrine, Kinkaku-ji Golden Pavilion, Kiyomizu-dera Temple, Bamboo Grove"
            }
        }
    ],
    countries: [
      {
            name: "Japan - Land of the Rising Sun",
            image: "https://ceylontoday.lk/wp-content/uploads/2023/01/1-19.jpg",
            description: "An island nation in East Asia known for its unique blend of ancient traditions and cutting-edge technology. From bustling Tokyo to serene Kyoto temples, Japan offers diverse experiences for every traveler.",
            details: {
                bestTime: "March to May (spring) or September to November (autumn)",
                activities: "Temple visits, cherry blossom viewing, hot springs, cultural experiences, city exploration",
                temperature: "50-75°F (10-24°C) varies by season",
                perfectFor: "Cultural enthusiasts, food lovers, tech enthusiasts, nature lovers, photographers",
                highlights: "Mount Fuji, Tokyo Skytree, Kyoto temples, cherry blossoms, traditional ryokans, bullet trains"
            }
        },
        {
            name: "Iceland - Nordic Wonder",
            image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            description: "A Nordic island country known for its dramatic landscapes, including volcanoes, geysers, hot springs, and lava fields. Famous for the Northern Lights and the Blue Lagoon geothermal spa.",
            details: {
                bestTime: "June to August (summer) or September to March (Northern Lights)",
                activities: "Northern Lights viewing, glacier hiking, hot springs, whale watching, volcano tours",
                temperature: "32-55°F (0-13°C) varies by season",
                perfectFor: "Adventure seekers, nature photographers, Northern Lights enthusiasts, geology lovers",
                highlights: "Blue Lagoon, Northern Lights, Golden Circle, glaciers, waterfalls, volcanic landscapes"
            }
        }
    ]
};

// Mobile navigation toggle
function toggleMobileNav() {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Initialize mobile navigation
function initMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileNav);
    }
    
    // Close mobile nav when clicking on nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const navMenu = document.querySelector('.nav-menu');
            const hamburger = document.querySelector('.hamburger');
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Image gallery functionality
function changeImage(button, direction) {
    const card = button.closest('.recommendation-card');
    const images = card.querySelectorAll('.gallery-image');
    let currentIndex = 0;
    
    // Find current active image
    images.forEach((img, index) => {
        if (img.classList.contains('active')) {
            currentIndex = index;
        }
    });
    
    // Remove active class from current image
    images[currentIndex].classList.remove('active');
    
    // Calculate new index
    let newIndex = currentIndex + direction;
    if (newIndex >= images.length) {
        newIndex = 0;
    } else if (newIndex < 0) {
        newIndex = images.length - 1;
    }
    
    // Add active class to new image
    images[newIndex].classList.add('active');
}

// Auto-rotate images
function autoRotateImages() {
    const galleries = document.querySelectorAll('.image-gallery');
    
    galleries.forEach(gallery => {
        const images = gallery.querySelectorAll('.gallery-image');
        if (images.length > 1) {
            setInterval(() => {
                let currentIndex = 0;
                images.forEach((img, index) => {
                    if (img.classList.contains('active')) {
                        currentIndex = index;
                    }
                });
                
                images[currentIndex].classList.remove('active');
                const nextIndex = (currentIndex + 1) % images.length;
                images[nextIndex].classList.add('active');
            }, 5000); // Change image every 5 seconds
        }
    });
}

// Show detailed destination information
function showDetails(category) {
    const modal = document.getElementById('recommendationModal');
    const modalContent = document.getElementById('modalContent');
    
    let content = `<h2>${getCategoryTitle(category)}</h2>`;
    
    destinations[category].forEach((destination, index) => {
        content += `
            <div class="destination-item">
                <h4>${destination.name}</h4>
                <div class="modal-images" style="margin-bottom: 1.5rem;">
                    <img src="${destination.image}" alt="${destination.name}" style="width: 100%; max-height: 300px; object-fit: cover; border-radius: 15px;" crossorigin="anonymous">
                </div>
                <p style="margin-bottom: 1.5rem; color: #5d6d7e; line-height: 1.7;">${destination.description}</p>
                <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 12px; border-left: 4px solid #e74c3c;">
                    <h5 style="color: #2c3e50; margin-bottom: 1rem; font-size: 1.2rem;">Travel Details:</h5>
                    <ul style="list-style: none; padding: 0;">
                        <li style="margin-bottom: 0.8rem; color: #5d6d7e;"><strong>🗓️ Best Time to Visit:</strong> ${destination.details.bestTime}</li>
                        <li style="margin-bottom: 0.8rem; color: #5d6d7e;"><strong>🎯 Activities:</strong> ${destination.details.activities}</li>
                        <li style="margin-bottom: 0.8rem; color: #5d6d7e;"><strong>🌡️ Temperature:</strong> ${destination.details.temperature}</li>
                        <li style="margin-bottom: 0.8rem; color: #5d6d7e;"><strong>👥 Perfect For:</strong> ${destination.details.perfectFor}</li>
                        <li style="margin-bottom: 0.8rem; color: #5d6d7e;"><strong>✨ Highlights:</strong> ${destination.details.highlights}</li>
                    </ul>
                </div>
            </div>
        `;
    });
    
    modalContent.innerHTML = content;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Get category title for display
function getCategoryTitle(category) {
    const titles = {
        beaches: '🏖️ Paradise Beaches',
        temples: '🏛️ Sacred Temples',
        countries: '🌍 Amazing Countries'
    };
    return titles[category] || 'Destinations';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('recommendationModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Search functionality
function searchDestinations() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (!searchTerm) {
        alert('Please enter a search term');
        return;
    }
    
    const searchResults = [];
    
    // Search through all destinations
    Object.keys(destinations).forEach(category => {
        destinations[category].forEach(destination => {
            const searchableText = `${destination.name} ${destination.description} ${destination.details.activities} ${destination.details.perfectFor}`.toLowerCase();
            
            if (searchableText.includes(searchTerm)) {
                searchResults.push({
                    ...destination,
                    category: category
                });
            }
        });
    });
    
    displaySearchResults(searchResults, searchTerm);
}

// Display search results
function displaySearchResults(results, searchTerm) {
    const searchResultsSection = document.getElementById('searchResults');
    const searchResultsContent = document.getElementById('searchResultsContent');
    const recommendationsSection = document.getElementById('recommendations');
    
    if (results.length === 0) {
        searchResultsContent.innerHTML = `
            <div style="text-align: center; padding: 3rem;">
                <h3 style="color: #e74c3c; margin-bottom: 1rem;">No destinations found</h3>
                <p style="color: #5d6d7e;">No destinations match your search for "${searchTerm}". Try different keywords or browse our categories below.</p>
            </div>
        `;
    } else {
        let content = `<p style="margin-bottom: 2rem; color: #5d6d7e; font-size: 1.1rem;">Found ${results.length} destination${results.length > 1 ? 's' : ''} matching "${searchTerm}":</p>`;
        
        results.forEach(destination => {
            content += `
                <div class="search-result-card">
                    <h3>${destination.name}</h3>
                    <img src="${destination.image}" alt="${destination.name}" crossorigin="anonymous">
                    <p>${destination.description}</p>
                    <div style="background: #f8f9fa; padding: 1rem; border-radius: 10px; margin-top: 1rem;">
                        <p><strong>Best Time:</strong> ${destination.details.bestTime}</p>
                        <p><strong>Activities:</strong> ${destination.details.activities}</p>
                        <p><strong>Perfect For:</strong> ${destination.details.perfectFor}</p>
                    </div>
                </div>
            `;
        });
        
        searchResultsContent.innerHTML = content;
    }
    
    // Show search results and hide recommendations
    searchResultsSection.style.display = 'block';
    recommendationsSection.style.display = 'none';
    
    // Scroll to search results
    searchResultsSection.scrollIntoView({ behavior: 'smooth' });
}

// Clear search and show all destinations
function clearSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResultsSection = document.getElementById('searchResults');
    const recommendationsSection = document.getElementById('recommendations');
    
    searchInput.value = '';
    searchResultsSection.style.display = 'none';
    recommendationsSection.style.display = 'block';
    
    // Scroll to recommendations
    recommendationsSection.scrollIntoView({ behavior: 'smooth' });
}

// Smooth scroll to recommendations section
function scrollToRecommendations() {
    const recommendationsSection = document.getElementById('recommendations');
    recommendationsSection.scrollIntoView({ behavior: 'smooth' });
}

// Contact form functionality
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
}

// Handle contact form submission
function handleContactSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const formObject = {};
    
    // Convert FormData to object
    for (let [key, value] of formData.entries()) {
        formObject[key] = value;
    }
    
    // Basic validation
    if (!formObject.name || !formObject.email || !formObject.subject || !formObject.message) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formObject.email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Simulate form submission
    showSuccessMessage();
    e.target.reset();
}

// Show success message
function showSuccessMessage() {
    const successMessage = document.getElementById('successMessage');
    if (successMessage) {
        successMessage.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

// Close success message
function closeSuccessMessage() {
    const successMessage = document.getElementById('successMessage');
    if (successMessage) {
        successMessage.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Handle Enter key for search
function initSearchKeyHandler() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchDestinations();
            }
        });
    }
}

// Close modal when clicking outside
function initModalCloseHandler() {
    const modal = document.getElementById('recommendationModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
    
    const successMessage = document.getElementById('successMessage');
    if (successMessage) {
        successMessage.addEventListener('click', function(e) {
            if (e.target === successMessage) {
                closeSuccessMessage();
            }
        });
    }
}

// Handle escape key to close modals
function initEscapeKeyHandler() {
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
            closeSuccessMessage();
        }
    });
}

// Lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add loading animation
function showLoading() {
    const loadingDiv = document.createElement('div');
    loadingDiv.id = 'loading';
    loadingDiv.innerHTML = `
        <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(255,255,255,0.9); display: flex; justify-content: center; align-items: center; z-index: 9999;">
            <div style="text-align: center;">
                <div style="width: 50px; height: 50px; border: 5px solid #f3f3f3; border-top: 5px solid #e74c3c; border-radius: 50%; animation: spin 1s linear infinite;"></div>
                <p style="margin-top: 1rem; color: #2c3e50; font-weight: 600;">Loading amazing destinations...</p>
            </div>
        </div>
        <style>
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        </style>
    `;
    document.body.appendChild(loadingDiv);
    
    // Remove loading after 2 seconds
    setTimeout(() => {
        const loading = document.getElementById('loading');
        if (loading) {
            loading.remove();
        }
    }, 2000);
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Show loading animation
    showLoading();
    
    // Initialize all features
    initMobileNav();
    initContactForm();
    initSearchKeyHandler();
    initModalCloseHandler();
    initEscapeKeyHandler();
    initLazyLoading();
    initSmoothScrolling();
    
    // Start auto-rotating images after a delay
    setTimeout(() => {
        autoRotateImages();
    }, 3000);
    
    // Add some interactive effects
    addInteractiveEffects();
});

// Add interactive effects
function addInteractiveEffects() {
    // Add hover effects to cards
    const cards = document.querySelectorAll('.recommendation-card, .mission-card, .team-member, .info-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add parallax effect to hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        
        if (hero) {
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
    
    // Add fade-in animation for sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe sections for fade-in effect
    const sections = document.querySelectorAll('.introduction, .recommendations, .about-content, .contact-content');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Add search suggestions
function initSearchSuggestions() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    const suggestions = [
        'beach', 'temple', 'south africa', 'iceland', 'diving', 'snorkeling', 
        'cultural', 'adventure', 'honeymoon', 'luxury', 'spiritual', 
        'photography', 'northern lights', 'safari', 'wildlife', 'thailand'
    ];
    
    searchInput.addEventListener('input', function() {
        const value = this.value.toLowerCase();
        if (value.length > 2) {
            const matches = suggestions.filter(s => s.includes(value));
            // You can implement dropdown suggestions here
        }
    });
}

// Performance optimization
function optimizePerformance() {
    // Debounce scroll events
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(function() {
            // Handle scroll events here
        }, 16); // ~60fps
    });
    
    // Preload critical images
    const criticalImages = [
        'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize performance optimizations
optimizePerformance();