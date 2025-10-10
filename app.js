/* ==========================================================
   Cade Cowdrey Portfolio – Refined Interaction Script
   ========================================================== */

// ---------- 🌙 THEME TOGGLE ----------
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light-mode");
  themeToggle.textContent = "🌙";
}

// Toggle theme
themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  const isLight = body.classList.contains("light-mode");
  themeToggle.textContent = isLight ? "🌙" : "☀️";
  localStorage.setItem("theme", isLight ? "light" : "dark");
});

// ---------- 📜 SCROLL PROGRESS BAR ----------
window.addEventListener("scroll", () => {
  const progressBar = document.getElementById("progress-bar");
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercent = (scrollTop / scrollHeight) * 100;
  progressBar.style.width = scrollPercent + "%";
});

// ---------- ⬆️ BACK TO TOP BUTTON ----------
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// ---------- 📄 COLLAPSIBLE PDF VIEWERS ----------
function togglePDF(id) {
  const pdfDiv = document.getElementById(id);
  const isCollapsed = pdfDiv.classList.contains("collapsed");

  // Collapse all others
  document.querySelectorAll(".pdf-viewer").forEach(viewer => viewer.classList.add("collapsed"));

  if (isCollapsed) {
    pdfDiv.classList.remove("collapsed");
  } else {
    pdfDiv.classList.add("collapsed");
  }
}

// ---------- ✨ FADE-IN SECTION ON SCROLL ----------
const sections = document.querySelectorAll(".section");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.9;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ---------- 🔗 SMOOTH NAVIGATION ----------
document.querySelectorAll('#nav-menu a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth"
      });
    }
  });
});
