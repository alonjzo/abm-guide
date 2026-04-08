// Back to Top Button for ABM Suite
(function() {
  // Create the button
  const createBackToTopButton = () => {
    // Check if button already exists
    if (document.querySelector('#back-to-top')) return;

    const button = document.createElement('button');
    button.id = 'back-to-top';
    button.innerHTML = '↑';
    button.setAttribute('aria-label', 'Back to top');
    button.style.cssText = `
      position: fixed;
      bottom: 80px;
      right: 20px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: linear-gradient(135deg, #ec4899, #8b5cf6);
      border: none;
      color: white;
      font-size: 24px;
      font-weight: bold;
      cursor: pointer;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      z-index: 9998;
      box-shadow: 0 4px 12px rgba(236, 72, 153, 0.3);
    `;

    // Add hover effect
    button.onmouseover = () => {
      button.style.transform = 'scale(1.1)';
      button.style.boxShadow = '0 6px 20px rgba(236, 72, 153, 0.4)';
    };
    button.onmouseout = () => {
      button.style.transform = 'scale(1)';
      button.style.boxShadow = '0 4px 12px rgba(236, 72, 153, 0.3)';
    };

    // Add click handler
    button.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    document.body.appendChild(button);
    return button;
  };

  // Show/hide button based on scroll position
  const toggleButtonVisibility = (button) => {
    if (window.scrollY > 300) {
      button.style.opacity = '1';
      button.style.visibility = 'visible';
    } else {
      button.style.opacity = '0';
      button.style.visibility = 'hidden';
    }
  };

  // Initialize
  const init = () => {
    const button = createBackToTopButton();

    // Add scroll listener with throttling
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          toggleButtonVisibility(button);
          ticking = false;
        });
        ticking = true;
      }
    });
  };

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();