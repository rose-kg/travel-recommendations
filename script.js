
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
 
        document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }));
    }
});

function scrollToRecommendations() {
    const recommendationsSection = document.getElementById('recommendations');
    if (recommendationsSection) {
        recommendationsSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}
function changeImage(button, direction) {
    const card = button.closest('.recommendation-card');
    const images = card.querySelectorAll('.gallery-image');
    let currentIndex = 0;

    images.forEach((img, index) => {
        if (img.classList.contains('active')) {
            currentIndex = index;
        }
    });
    

    images[currentIndex].classList.remove('active');
    
    let newIndex = currentIndex + direction;
    if (newIndex >= images.length) {
        newIndex = 0;
    } else if (newIndex < 0) {
        newIndex = images.length - 1;
    }

    images[newIndex].classList.add('active');
}

setInterval(() => {
    const cards = document.querySelectorAll('.recommendation-card');
    cards.forEach(card => {
        const nextBtn = card.querySelector('.next-btn');
        if (nextBtn) {
            changeImage(nextBtn, 1);
        }
    });
}, 6000);
function showDetails(category) {
    const modal = document.getElementById('recommendationModal');
    const modalContent = document.getElementById('modalContent');
    
    let content = '';
    
    switch(category) {
        case 'beaches':
            content = `
                <h2>🏖️ Paradise Beach Destinations</h2>
                <div class="modal-images">
                    <img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Maldives overwater bungalows" style="width: 100%; margin-bottom: 1rem; border-radius: 10px;" crossorigin="anonymous">
                    <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Caribbean crystal clear waters" style="width: 100%; margin-bottom: 1rem; border-radius: 10px;" crossorigin="anonymous">
                </div>
                <h3>Top Beach Paradise Recommendations:</h3>
                <div class="destination-list">
                    <div class="destination-item">
                        <h4>🏝️ Maldives - Indian Ocean Paradise</h4>
                        <p>Experience ultimate luxury in crystal-clear turquoise waters with pristine white sand beaches. The Maldives offers unparalleled overwater villa experiences and world-class diving opportunities among vibrant coral reefs.</p>
                        <ul>
                            <li><strong>Best time to visit:</strong> November to April (dry season)</li>
                            <li><strong>Top activities:</strong> Snorkeling, scuba diving, spa treatments, sunset cruises</li>
                            <li><strong>Average temperature:</strong> 80-86°F (27-30°C) year-round</li>
                            <li><strong>Perfect for:</strong> Honeymoons, luxury getaways, underwater photography</li>
                        </ul>
                    </div>
                    <div class="destination-item">
                        <h4>🌴 Bora Bora, French Polynesia - Romantic Paradise</h4>
                        <p>The crown jewel of the South Pacific, featuring iconic overwater bungalows surrounded by a stunning coral reef and lagoon. Mount Otemanu provides a dramatic backdrop to this tropical paradise.</p>
                        <ul>
                            <li><strong>Best time to visit:</strong> May to October (dry season)</li>
                            <li><strong>Top activities:</strong> Water sports, hiking Mount Otemanu, cultural tours, pearl farm visits</li>
                            <li><strong>Average temperature:</strong> 75-85°F (24-29°C)</li>
                            <li><strong>Perfect for:</strong> Romance, adventure, luxury experiences</li>
                        </ul>
                    </div>
                    <div class="destination-item">
                        <h4>🏖️ Santorini, Greece - Volcanic Beach Beauty</h4>
                        <p>Unique volcanic beaches with dramatic black and red sand, combined with stunning cliff-top villages and world-famous sunsets. Experience the perfect blend of beach relaxation and rich Mediterranean culture.</p>
                        <ul>
                            <li><strong>Best time to visit:</strong> April to October (warm weather)</li>
                            <li><strong>Top activities:</strong> Wine tasting, historical site visits, sunset photography, beach hopping</li>
                            <li><strong>Average temperature:</strong> 70-80°F (21-27°C)</li>
                            <li><strong>Perfect for:</strong> Cultural exploration, photography, romantic getaways</li>
                        </ul>
                    </div>
                </div>
            `;
            break;
            
        case 'temples':
            content = `
                <h2>🏛️ Sacred Temple Destinations</h2>
                <div class="modal-images">
                    <img src="https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Angkor Wat temple complex at sunrise" style="width: 100%; margin-bottom: 1rem; border-radius: 10px;" crossorigin="anonymous">
                    <img src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Japanese temple with autumn colors" style="width: 100%; margin-bottom: 1rem; border-radius: 10px;" crossorigin="anonymous">
                </div>
                <h3>Magnificent Sacred Temple Experiences:</h3>
                <div class="destination-list">
                    <div class="destination-item">
                        <h4>🕌 Angkor Wat, Cambodia - Ancient Wonder</h4>
                        <p>The world's largest religious monument, showcasing magnificent Khmer architecture and intricate stone carvings. This UNESCO World Heritage site represents the pinnacle of classical Khmer art and spirituality.</p>
                        <ul>
                            <li><strong>Best time to visit:</strong> November to March (cool, dry season)</li>
                            <li><strong>Top activities:</strong> Sunrise viewing, temple exploration, photography, cultural learning</li>
                            <li><strong>Historical period:</strong> Built in early 12th century</li>
                            <li><strong>Perfect for:</strong> History enthusiasts, photographers, spiritual seekers</li>
                        </ul>
                    </div>
                    <div class="destination-item">
                        <h4>⛩️ Fushimi Inari Shrine, Japan - Thousand Torii Gates</h4>
                        <p>Famous for thousands of vermillion torii gates creating mystical tunnels up the sacred Mount Inari. This spiritual journey through nature offers a unique blend of Shinto tradition and natural beauty.</p>
                        <ul>
                            <li><strong>Best time to visit:</strong> March to May, September to November</li>
                            <li><strong>Top activities:</strong> Hiking through torii tunnels, meditation, cultural immersion</li>
                            <li><strong>Significance:</strong> Dedicated to Inari, Shinto deity of rice and prosperity</li>
                            <li><strong>Perfect for:</strong> Spiritual journeys, hiking, cultural photography</li>
                        </ul>
                    </div>
                    <div class="destination-item">
                        <h4>🏛️ Borobudur, Indonesia - Buddhist Masterpiece</h4>
                        <p>Magnificent 9th-century Buddhist temple featuring intricate stone reliefs and panoramic views of Java's volcanic landscape. This architectural marvel represents the Buddhist cosmology in stone.</p>
                        <ul>
                            <li><strong>Best time to visit:</strong> April to October (dry season)</li>
                            <li><strong>Top activities:</strong> Sunrise tours, relief panel study, meditation, cultural workshops</li>
                            <li><strong>Architecture:</strong> Mandala design with 2,672 relief panels and 504 Buddha statues</li>
                            <li><strong>Perfect for:</strong> Spiritual exploration, architecture lovers, sunrise photography</li>
                        </ul>
                    </div>
                </div>
            `;
            break;
            
        case 'countries':
            content = `
                <h2>🌍 Amazing Country Destinations</h2>
                <div class="modal-images">
                    <img src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Mount Fuji and Japanese landscape" style="width: 100%; margin-bottom: 1rem; border-radius: 10px;" crossorigin="anonymous">
                    <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="New Zealand scenic mountains and lakes" style="width: 100%; margin-bottom: 1rem; border-radius: 10px;" crossorigin="anonymous">
                </div>
                <h3>Diverse Country Adventures:</h3>
                <div class="destination-list">
                    <div class="destination-item">
                        <h4>🗾 Japan - Land of Rising Sun</h4>
                        <p>A perfect harmony of ancient traditions and cutting-edge technology. From the bustling streets of Tokyo to the serene temples of Kyoto, Japan offers an unparalleled cultural experience with stunning natural beauty.</p>
                        <ul>
                            <li><strong>Best time to visit:</strong> March to May (cherry blossoms), September to November (autumn colors)</li>
                            <li><strong>Highlights:</strong> Cherry blossoms, ancient temples, modern cities, Mount Fuji, traditional cuisine</li>
                            <li><strong>Must-visit cities:</strong> Tokyo, Kyoto, Osaka, Hiroshima, Nara</li>
                            <li><strong>Perfect for:</strong> Cultural immersion, food lovers, technology enthusiasts, nature lovers</li>
                        </ul>
                    </div>
                    <div class="destination-item">
                        <h4>🥝 New Zealand - Adventure Paradise</h4>
                        <p>The ultimate destination for outdoor enthusiasts, featuring dramatic landscapes from fjords to mountains, glaciers to beaches. Known as the adventure capital of the world with stunning natural beauty at every turn.</p>
                        <ul>
                            <li><strong>Best time to visit:</strong> December to March (summer), September to November (spring)</li>
                            <li><strong>Top activities:</strong> Bungee jumping, hiking, scenic drives, wildlife watching, extreme sports</li>
                            <li><strong>Must-see locations:</strong> Milford Sound, Queenstown, Bay of Islands, Rotorua, Hobbiton</li>
                            <li><strong>Perfect for:</strong> Adventure seekers, nature photographers, Lord of the Rings fans</li>
                        </ul>
                    </div>
                    <div class="destination-item">
                        <h4>🇮🇸 Iceland - Land of Fire and Ice</h4>
                        <p>A Nordic island nation featuring dramatic contrasts of glaciers and volcanoes, geysers and waterfalls. Experience the raw power of nature with opportunities to see the Northern Lights and explore unique geological wonders.</p>
                        <ul>
                            <li><strong>Best time to visit:</strong> June to August (midnight sun), September to March (Northern Lights)</li>
                            <li><strong>Top activities:</strong> Glacier hiking, hot spring bathing, Northern Lights viewing, whale watching</li>
                            <li><strong>Must-see attractions:</strong> Blue Lagoon, Golden Circle, Ring Road, Jökulsárlón Glacier Lagoon</li>
                            <li><strong>Perfect for:</strong> Nature lovers, photographers, geology enthusiasts, Northern Lights chasers</li>
                        </ul>
                    </div>
                </div>
            `;
            break;
    }
    
    modalContent.innerHTML = content;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('recommendationModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

window.onclick = function(event) {
    const modal = document.getElementById('recommendationModal');
    if (event.target === modal) {
        closeModal();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            const newsletter = formData.get('newsletter');
            
            if (!name || !email || !subject || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                showSuccessMessage();
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }
});

function showSuccessMessage() {
    const successMessage = document.getElementById('successMessage');
    if (successMessage) {
        successMessage.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeSuccessMessage() {
    const successMessage = document.getElementById('successMessage');
    if (successMessage) {
        successMessage.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });

        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease';
        
        if (img.complete) {
            img.style.opacity = '1';
        }
    });
});
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.recommendation-card, .mission-card, .team-member, .info-item, .value-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
});

window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroImage = document.querySelector('.hero-image img');
    
    if (hero && heroImage) {
        const rate = scrolled * -0.5;
        heroImage.style.transform = `translateY(${rate}px)`;
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.borderRight = '2px solid white';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                heroTitle.style.borderRight = 'none';
            }
        };
        
        setTimeout(typeWriter, 1000);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            const bars = hamburger.querySelectorAll('.bar');
            
            if (hamburger.classList.contains('active')) {
                bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
    }
});