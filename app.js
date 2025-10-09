// ===== Scroll Progress Bar =====
window.addEventListener("scroll", () => {
  const progressBar = document.getElementById("progress-bar");
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (scrollTop / scrollHeight) * 100;
  progressBar.style.width = scrolled + "%";
});

// ===== Smooth Scroll for Internal Links =====
document.querySelectorAll('a.scroll').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// ===== Intersection Observer for Fade-In Animation =====
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".section").forEach(section => {
  section.classList.add("hidden-reveal");
  observer.observe(section);
});

// ===== Back to Top Button =====
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== Mobile Nav Toggle =====
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.getElementById("nav-menu");
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
}

// ===== Light/Dark Theme Toggle =====
const themeToggle = document.getElementById("themeToggle");
const sun = themeToggle.querySelector(".sun");
const moon = themeToggle.querySelector(".moon");
const root = document.documentElement;

function setTheme(dark) {
  if (dark) {
    root.classList.add("dark");
    sun.style.display = "none";
    moon.style.display = "inline";
    localStorage.setItem("theme", "dark");
  } else {
    root.classList.remove("dark");
    sun.style.display = "inline";
    moon.style.display = "none";
    localStorage.setItem("theme", "light");
  }
}

themeToggle.addEventListener("click", () => {
  setTheme(!root.classList.contains("dark"));
});

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  setTheme(savedTheme === "dark");
  document.getElementById("year").textContent = new Date().getFullYear();
});

// ===== Lightbox for Gallery =====
const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxClose = lightbox.querySelector(".close");

galleryItems.forEach(item => {
  item.addEventListener("click", e => {
    e.preventDefault();
    lightboxImg.src = item.querySelector("img").src;
    lightbox.showModal();
  });
});

lightboxClose.addEventListener("click", () => {
  lightbox.close();
});

lightbox.addEventListener("click", e => {
  if (e.target === lightbox) lightbox.close();
});
