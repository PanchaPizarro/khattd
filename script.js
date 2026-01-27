// ==========================================
// KHATTD - JavaScript
// Interactividad y efectos dinámicos
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ==========================================
    // MOBILE NAVIGATION
    // ==========================================
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            navToggle.classList.toggle('active');
            navToggle.setAttribute('aria-expanded', navLinks.classList.contains('active'));
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }
    
    // ==========================================
    // SMOOTH SCROLL
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = target.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: prefersReducedMotion ? 'auto' : 'smooth'
                });
            }
        });
    });
    
    // ==========================================
    // SCROLL ANIMATIONS
    // ==========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = prefersReducedMotion ? null : new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        if (prefersReducedMotion) {
            section.style.opacity = '1';
            section.style.transform = 'none';
        } else {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        }
    });
    
    // ==========================================
    // TRACK CARDS ANIMATION
    // ==========================================
    const trackObserver = prefersReducedMotion ? null : new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, index * 100);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.track-card').forEach(card => {
        if (prefersReducedMotion) {
            card.style.opacity = '1';
            card.style.transform = 'none';
        } else {
            card.style.opacity = '0';
            card.style.transform = 'translateX(-50px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            trackObserver.observe(card);
        }
    });
    
    // ==========================================
    // NAVBAR BACKGROUND ON SCROLL
    // ==========================================
    let lastScroll = 0;
    const nav = document.querySelector('.nav');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add/remove background based on scroll position
        if (currentScroll > 100) {
            nav.style.background = 'rgba(10, 10, 15, 0.98)';
            nav.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.5)';
        } else {
            nav.style.background = 'rgba(10, 10, 15, 0.95)';
            nav.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    }, { passive: true });
    
    // ==========================================
    // LOADING ARTIST IMAGE FROM SPOTIFY
    // ==========================================
    const artistImage = document.getElementById('artistImage');
    if (artistImage) {
        // Fallback to a placeholder if Spotify image fails
        artistImage.onerror = function() {
            // Create a gradient placeholder with the artist's initials
            const canvas = document.createElement('canvas');
            canvas.width = 400;
            canvas.height = 400;
            const ctx = canvas.getContext('2d');
            
            // Gradient background
            const gradient = ctx.createLinearGradient(0, 0, 400, 400);
            gradient.addColorStop(0, '#ff00ff');
            gradient.addColorStop(1, '#00ffff');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, 400, 400);
            
            // Artist initials
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 150px Bebas Neue, sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('K', 200, 200);
            
            this.src = canvas.toDataURL();
        };
    }
    
    // ==========================================
    // STATS COUNTER ANIMATION
    // ==========================================
    const animateCounter = (element, target, duration = 2000) => {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = formatNumber(target);
                clearInterval(timer);
            } else {
                element.textContent = formatNumber(Math.floor(current));
            }
        }, 16);
    };
    
    const formatNumber = (num) => {
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K+';
        }
        return num;
    };
    
    // Trigger counter animation when stats are visible
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target.querySelector('.stat-number');
                const value = statNumber.textContent;
                
                // Only animate numbers
                if (!prefersReducedMotion && value.includes('K')) {
                    const numValue = parseFloat(value) * 1000;
                    animateCounter(statNumber, numValue);
                }
                
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.stat').forEach(stat => {
        statsObserver.observe(stat);
    });
    
    // ==========================================
    // PARALLAX EFFECT ON SCROLL
    // ==========================================
    if (!prefersReducedMotion) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.hero-image, .bg-animated');
            
            parallaxElements.forEach(element => {
                const speed = element.dataset.speed || 0.5;
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });
        }, { passive: true });
    }
    
    // ==========================================
    // CURSOR TRAIL EFFECT (Desktop only)
    // ==========================================
    if (!prefersReducedMotion && window.innerWidth > 968) {
        let mouseX = 0;
        let mouseY = 0;
        const trail = [];
        const trailLength = 5;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        
        // Create trail elements
        for (let i = 0; i < trailLength; i++) {
            const dot = document.createElement('div');
            dot.style.position = 'fixed';
            dot.style.width = '10px';
            dot.style.height = '10px';
            dot.style.borderRadius = '50%';
            dot.style.background = i % 2 === 0 ? '#ff00ff' : '#00ffff';
            dot.style.pointerEvents = 'none';
            dot.style.opacity = 1 - (i / trailLength);
            dot.style.zIndex = '9999';
            dot.style.transition = 'all 0.1s ease';
            document.body.appendChild(dot);
            trail.push(dot);
        }
        
        // Animate trail
        let currentX = mouseX;
        let currentY = mouseY;
        
        const animateTrail = () => {
            currentX += (mouseX - currentX) * 0.1;
            currentY += (mouseY - currentY) * 0.1;
            
            trail.forEach((dot, index) => {
                const nextDot = trail[index + 1] || { offsetLeft: currentX, offsetTop: currentY };
                
                dot.style.left = nextDot.offsetLeft + 'px';
                dot.style.top = nextDot.offsetTop + 'px';
            });
            
            if (trail[0]) {
                trail[0].style.left = currentX + 'px';
                trail[0].style.top = currentY + 'px';
            }
            
            requestAnimationFrame(animateTrail);
        };
        
        animateTrail();
    }
    
    // ==========================================
    // GLITCH EFFECT ON HOVER
    // ==========================================
    const glitchElement = document.querySelector('.glitch');
    if (glitchElement && !prefersReducedMotion) {
        glitchElement.addEventListener('mouseenter', () => {
            glitchElement.style.animation = 'none';
            setTimeout(() => {
                glitchElement.style.animation = 'glitch 0.3s infinite';
            }, 10);
        });
        
        glitchElement.addEventListener('mouseleave', () => {
            glitchElement.style.animation = 'glitch 3s infinite';
        });
    }
    
    // ==========================================
    // CONSOLE EASTER EGG
    // ==========================================
    console.log('%c🎵 KHATTD 🎵', 'font-size: 50px; font-weight: bold; background: linear-gradient(90deg, #ff00ff, #00ffff); -webkit-background-clip: text; color: transparent;');
    console.log('%cNuevo talento urbano desde Limache, Chile 🇨🇱', 'font-size: 16px; color: #00ffff;');
    console.log('%cEscúchalo en Spotify: https://open.spotify.com/artist/4RM6nPIBiC7a0XInK9gngA', 'font-size: 14px; color: #ff00ff;');
    
    // ==========================================
    // PAGE LOADED
    // ==========================================
    console.log('✅ Página cargada correctamente');
});
