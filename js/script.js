/**
 * ============================================
 * Intersection Observer for Reveal on Scroll
 * ============================================
 */
const initRevealAnimation = () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Unobserve after animation to improve performance
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all animation classes
    const animationSelectors = [
        '.reveal',
        '.reveal-hero',
        '.reveal-slide-left',
        '.reveal-scale',
        '.reveal-rotate',
        '.reveal-slide-right',
        '.reveal-bounce',
        '.reveal-fade'
    ];
    
    animationSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            observer.observe(el);
        });
    });
};

/**
 * ============================================
 * Mouse Spotlight Movement Handler
 * ============================================
 */
const initSpotlightEffect = () => {
    const bentoCards = document.querySelectorAll('.bento-card');
    
    bentoCards.forEach(card => {
        const spotlight = card.querySelector('.spotlight');
        
        if (!spotlight) return;

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - 150; // Center the spotlight (300px / 2)
            const y = e.clientY - rect.top - 150;
            
            spotlight.style.transform = `translate(${x}px, ${y}px)`;
        });

        // Reset spotlight position when mouse leaves
        card.addEventListener('mouseleave', () => {
            spotlight.style.transform = 'translate(-150px, -150px)';
        });
    });
};

/**
 * ============================================
 * Initialize all functionality when DOM is ready
 * ============================================
 */
const init = () => {
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            initRevealAnimation();
            initSpotlightEffect();
        });
    } else {
        // DOM is already loaded
        initRevealAnimation();
        initSpotlightEffect();
    }
};

// Start initialization
init();

