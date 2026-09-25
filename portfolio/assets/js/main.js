/**
 * Portfolio Wiki Client-Side Runtime
 * Vanilla ES6+, zero external framework dependencies
 */
(function () {
  'use strict';

  // Theme Management
  const themeToggle = document.getElementById('theme-toggle');
  const storedTheme = localStorage.getItem('portfolio-theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (themeToggle) {
      themeToggle.setAttribute('aria-pressed', theme === 'dark');
      themeToggle.innerHTML = theme === 'dark' ? '☀️ Claro' : '🌙 Escuro';
    }
    localStorage.setItem('portfolio-theme', theme);
  }

  const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');
  applyTheme(initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });
  }

  // Client-Side Search / Filter
  const searchInput = document.getElementById('project-search');
  if (searchInput) {
    searchInput.addEventListener('input', function (e) {
      const query = e.target.value.toLowerCase().trim();
      const cards = document.querySelectorAll('.project-card');
      let visibleCount = 0;

      cards.forEach(card => {
        const text = (card.getAttribute('data-search') || card.textContent).toLowerCase();
        const matches = text.includes(query);
        card.style.display = matches ? '' : 'none';
        if (matches) visibleCount++;
      });

      const emptyNotice = document.getElementById('no-search-results');
      if (emptyNotice) {
        emptyNotice.style.display = visibleCount === 0 ? 'block' : 'none';
      }
    });
  }
})();
