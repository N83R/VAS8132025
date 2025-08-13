// scripts.js
// This file contains simple enhancements for the ag drone website.

// Update the year in the footer dynamically so it always displays the current
// year.
document.addEventListener('DOMContentLoaded', () => {
  // Insert the current year into the footer. This keeps the copyright up to
  // date without requiring manual edits.
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Observe elements with the fade-in class and apply the visible class when
  // they enter the viewport. This produces a smooth reveal effect as the
  // user scrolls. Elements start hidden until observed.
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      threshold: 0.15,
    }
  );

  document.querySelectorAll('.fade-in').forEach((el) => {
    observer.observe(el);
  });
});
// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
});
