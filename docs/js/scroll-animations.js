/**
 * Scroll-triggered animations using Intersection Observer
 */

(function() {
  'use strict';

  // Only run if IntersectionObserver is supported
  if (!('IntersectionObserver' in window)) {
    return;
  }

  // Configuration
  const config = {
    root: null,
    rootMargin: '0px 0px -100px 0px', // Trigger slightly before element enters viewport
    threshold: 0.15 // Trigger when 15% of element is visible
  };

  // Elements to animate on scroll
  const animateOnScrollSelectors = [
    '.step-card',
    '.benefit-card',
    '.testimonial-card',
    '.cta-section'
  ];

  // Create observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add animation class
        entry.target.classList.add('animate-fade-in-up');

        // Optional: Stop observing after animation
        observer.unobserve(entry.target);
      }
    });
  }, config);

  // Wait for DOM to be ready
  function init() {
    // Find all elements matching selectors
    animateOnScrollSelectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);

      elements.forEach((element, index) => {
        // Add staggered delay based on index
        if (index > 0) {
          element.style.animationDelay = `${index * 0.1}s`;
        }

        // Start observing
        observer.observe(element);
      });
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
