/* portfolio.js — dark mode, hamburger, scroll progress */
(function () {
  // ── Dark Mode ──────────────────────────────────────────
  const html = document.documentElement;
  const saved = localStorage.getItem('theme') || 'light';
  html.setAttribute('data-theme', saved);

  function updateToggleIcon() {
    document.querySelectorAll('.theme-toggle').forEach(btn => {
      btn.innerHTML = html.getAttribute('data-theme') === 'dark'
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
      btn.title = html.getAttribute('data-theme') === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    updateToggleIcon();

    document.querySelectorAll('.theme-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        updateToggleIcon();
      });
    });

    // ── Hamburger ─────────────────────────────────────────
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobileNav');
    if (hamburger && mobileNav) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        mobileNav.classList.toggle('open');
      });
      mobileNav.querySelectorAll('.nav-link').forEach(l =>
        l.addEventListener('click', () => {
          hamburger.classList.remove('open');
          mobileNav.classList.remove('open');
        })
      );
    }

    // ── Scroll Progress ────────────────────────────────────
    const bar = document.querySelector('.scroll-progress');
    if (bar) {
      function updateProgress() {
        const scrollTop  = window.scrollY || document.documentElement.scrollTop;
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = scrollable > 0 ? (scrollTop / scrollable * 100) + '%' : '0%';
      }
      window.addEventListener('scroll', updateProgress, { passive: true });
      updateProgress();
    }
  });
})();
