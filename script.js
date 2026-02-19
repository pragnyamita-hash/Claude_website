/* ============================================
   Pragnya Paramita — Resume Showcase Website
   Interactions & animations
   ============================================ */

// ---- Nav: scroll effect ----
const nav = document.getElementById('nav');
function updateNav() {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}
window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

// ---- Mobile hamburger menu ----
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-link');

function toggleMenu(open) {
  mobileMenu.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', String(open));
  document.body.style.overflow = open ? 'hidden' : '';

  // Animate hamburger → ✕
  const spans = hamburger.querySelectorAll('span');
  if (open) {
    spans[0].style.transform = 'translateY(7px) rotate(45deg)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  }
}

hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.contains('open');
  toggleMenu(!isOpen);
});

mobileLinks.forEach(link => {
  link.addEventListener('click', () => toggleMenu(false));
});

// ---- Scroll reveal (IntersectionObserver) ----
const revealElements = document.querySelectorAll('[data-reveal], .timeline-item, .skill-block, .edu-card');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger siblings if they share a parent
        const siblings = [...entry.target.parentElement.querySelectorAll('[data-reveal], .timeline-item, .skill-block')];
        const idx = siblings.indexOf(entry.target);
        const delay = Math.min(idx * 80, 400);

        setTimeout(() => {
          entry.target.classList.add('revealed');
        }, delay);

        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
);

revealElements.forEach(el => observer.observe(el));

// ---- Hero photo: swap initials for real photo if provided ----
// To add your headshot: place it as "assets/photo.jpg"
// and the initials will automatically be replaced.
(function loadHeroPhoto() {
  const photoEl = document.getElementById('heroPhoto');
  if (!photoEl) return;
  const img = new Image();
  img.src = 'assets/photo.jpg';
  img.onload = function () {
    const initials = photoEl.querySelector('.hero-photo-initials');
    if (initials) initials.remove();
    img.alt = 'Pragnya Paramita';
    photoEl.appendChild(img);
  };
  // If image fails to load, initials stay — no error shown
})();

// ---- Smooth active nav link highlighting ----
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navAnchors.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach(s => sectionObserver.observe(s));
