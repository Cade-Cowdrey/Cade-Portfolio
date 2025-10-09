// Smooth-scroll for anchor links
document.querySelectorAll('a.scroll').forEach(a=>{
  a.addEventListener('click', e=>{
    // allow normal new-tab behavior
    if (e.metaKey || e.ctrlKey) return;
    const id = a.getAttribute('href');
    if (id && id.startsWith('#')) {
      e.preventDefault();
      document.querySelector(id)?.scrollIntoView({behavior:'smooth', block:'start'});
      // close mobile menu after navigating
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

// Mobile nav
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('#nav-menu');
navToggle?.addEventListener('click', ()=>{
  const open = navMenu.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});

// Theme toggle with localStorage
const themeToggle = document.getElementById('themeToggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const saved = localStorage.getItem('cade-theme');
if (saved) document.documentElement.classList.toggle('dark', saved === 'dark');
else document.documentElement.classList.toggle('dark', prefersDark);

themeToggle?.addEventListener('click', ()=>{
  document.documentElement.classList.toggle('dark');
  localStorage.setItem('cade-theme',
    document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  );
});
document.addEventListener('keydown', (e)=>{ if (e.key.toLowerCase()==='l') themeToggle?.click(); });

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Lightweight lightbox using <dialog>
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
document.querySelectorAll('.gallery-item').forEach(a=>{
  a.addEventListener('click', (e)=>{
    e.preventDefault();
    lightboxImg.src = a.getAttribute('href');
    lightbox.showModal();
  });
});
lightbox.querySelector('.close').addEventListener('click', ()=> lightbox.close());
lightbox.addEventListener('click', (e)=>{ if (e.target === lightbox) lightbox.close(); });

// Improve <details> UX: close others in same card when one opens
document.querySelectorAll('.card details').forEach(d=>{
  d.addEventListener('toggle', ()=>{
    if (d.open) {
      d.closest('.card')?.querySelectorAll('details').forEach(other=>{
        if (other!==d) other.removeAttribute('open');
      });
    }
  });
});