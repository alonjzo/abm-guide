// ABM Suite Global Dark Mode Handler
// This script manages dark mode across all pages with localStorage persistence

(function() {
  // Initialize dark mode on page load
  function initDarkMode() {
    const root = document.documentElement;
    const savedTheme = localStorage.getItem('theme') || 'light';

    // Set the theme attribute
    root.setAttribute('data-theme', savedTheme);

    // Update body class for backwards compatibility
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

  // Toggle dark mode
  function toggleDarkMode() {
    const root = document.documentElement;
    const currentTheme = root.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    // Update DOM
    root.setAttribute('data-theme', newTheme);

    // Update body class
    if (newTheme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }

    // Save to localStorage
    localStorage.setItem('theme', newTheme);

    // Update button text if it exists
    const btn = document.querySelector('[data-theme-toggle]');
    if (btn) {
      btn.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    }
  }

  // Create toggle button if it doesn't exist
  function createToggleButton() {
    // Check if button already exists
    if (document.querySelector('[data-theme-toggle]')) return;

    // Check if we're in the global nav
    const nav = document.querySelector('.tp-global-nav');
    if (nav) {
      // Add to nav ONLY - no floating button
      const btn = document.createElement('button');
      btn.className = 'theme-toggle-nav';
      btn.setAttribute('data-theme-toggle', '');
      btn.setAttribute('aria-label', 'Switch theme');
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      btn.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
      btn.style.cssText = `
        background: transparent;
        border: 1px solid rgba(255,255,255,0.2);
        color: white;
        padding: 8px 12px;
        border-radius: 8px;
        cursor: pointer;
        font-size: 18px;
        margin-left: 20px;
      `;
      btn.addEventListener('click', toggleDarkMode);

      // Find the right place to insert it
      const navRight = nav.querySelector('.nav-right') || nav.querySelector('.nav-links') || nav;
      if (navRight.tagName === 'NAV') {
        navRight.appendChild(btn);
      } else {
        navRight.appendChild(btn);
      }
    }
    // NO floating button - removed the else block completely
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initDarkMode();
      createToggleButton();
    });
  } else {
    initDarkMode();
    createToggleButton();
  }

  // Also handle existing toggle buttons
  document.addEventListener('click', (e) => {
    if (e.target.matches('[data-theme-toggle]')) {
      e.preventDefault();
      toggleDarkMode();
    }
  });
})();