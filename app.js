/* -----------------------------
   Cade Cowdrey Portfolio Scripts
   ----------------------------- */

// Year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Theme Toggle (Light / Dark)
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light-mode");
}

// Toggle theme on click
themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  if (body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.removeItem("theme");
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll("a.scroll").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Scroll Progress Bar
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.getElementById("progress-bar").style.width = `${scrollPercent}%`;
});

// Back to Top Button
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Fade in sections as they come into view
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".section").forEach((section) => {
  observer.observe(section);
});
