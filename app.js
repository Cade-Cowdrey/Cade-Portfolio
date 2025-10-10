/* ==========================================================
   Cade Cowdrey Portfolio – Interactive Behavior Script
   Handles scroll reveal, progress bar, back-to-top, and theme toggle
   ========================================================== */

// ---------- Scroll Progress Bar ----------
const progressBar = document.getElementById("progress-bar");
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (scrollTop / height) * 100;
  progressBar.style.width = scrolled + "%";
});

// ---------- Back to Top Button ----------
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ---------- Theme Toggle (Light/Dark Mode) ----------
const themeToggle = document.getElementById("themeToggle");
const userTheme = localStorage.getItem("theme");

if (userTheme === "light") {
  document.body.classList.add("light-mode");
  themeToggle.textContent = "🌞";
} else {
  themeToggle.textContent = "🌙";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  const currentTheme = document.body.classList.contains("light-mode") ? "light" : "dark";
  localStorage.setItem("theme", currentTheme);
  themeToggle.textContent = currentTheme === "light" ? "🌞" : "🌙";
});

// ---------- Section Fade-In on Scroll ----------
const sections = document.querySelectorAll(".section");
const revealSection = () => {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      section.classList.add("visible");
    }
  });
};
window.addEventListener("scroll", revealSection);
window.addEventListener("load", revealSection);

// ---------- Smooth Anchor Scroll ----------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});
