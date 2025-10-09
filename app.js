// ===== Scroll Progress Bar =====
const progressBar = document.createElement('div');
progressBar.id = 'progress-bar';
document.body.prepend(progressBar);
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const width = (scrollTop / docHeight) * 100;
  progressBar.style.width = width + '%';
});

// ===== Smooth Scroll =====
document.querySelectorAll('a.scroll').forEach(a => {
  a.addEventListener('click', e => {
    if (e.metaKey || e.ctrlKey) return;
    const id = a.getAttribute('href');
    if (id && id.startsWith('#')) {
      e.preventDefault();
      document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

// ===== Mobile Nav =====
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('#nav-menu');
navToggle?.addEventListener('click', () => {
  const open = navMenu.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});

// ===== Theme Toggle =====
const themeToggle = document.getElementById('themeToggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const saved = localStorage.getItem('cade-theme');
if (saved) document.documentElement.classList.toggle('dark', saved === 'dark');
else document.documentElement.classList.toggle('dark', prefersDark);

themeToggle?.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  localStorage.setItem('cade-theme',
    document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  );
});
document.addEventListener('keydown', e => { if (e.key.toLowerCase() === 'l') themeToggle?.click(); });

// ===== Footer Year =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Lightbox =====
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
document.querySelectorAll('.gallery-item').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    lightboxImg.src = a.getAttribute('href');
    lightbox.showModal();
  });
});
lightbox.querySelector('.close').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', e => { if (e.target === lightbox) lightbox.close(); });

// ===== Close other details when one opens =====
document.querySelectorAll('.card details').forEach(d => {
  d.addEventListener('toggle', () => {
    if (d.open) {
      d.closest('.card')?.querySelectorAll('details').forEach(other => {
        if (other !== d) other.removeAttribute('open');
      });
    }
  });
});

// ===== Section & Card Reveal Animations =====
const revealElements = document.querySelectorAll('section, .card, .gallery-item, blockquote');
revealElements.forEach(el => el.classList.add('hidden-reveal'));
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealElements.forEach(el => observer.observe(el));

// ===== Back to Top Button =====
const backToTop = document.createElement('button');
backToTop.id = 'backToTop';
backToTop.title = 'Back to Top';
backToTop.innerHTML = '↑';
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
  if (window.scrollY > window.innerHeight * 0.5) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});