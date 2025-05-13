const themeToggle = document.getElementById("themeToggle");
const animateBtn = document.getElementById("animateBtn");
const box = document.getElementById("box");

// Load saved theme from localStorage
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.body.className = savedTheme;
  themeToggle.checked = savedTheme === "dark";
});

// Save theme preference
themeToggle.addEventListener("change", () => {
  const theme = themeToggle.checked ? "dark" : "light";
  document.body.className = theme;
  localStorage.setItem("theme", theme);
});

// Animate the box and save theme
animateBtn.addEventListener("click", () => {
  box.classList.add("animated");

  // Remove class after animation duration (500ms)
  setTimeout(() => {
    box.classList.remove("animated");
  }, 500);

  // Also store theme as a preference
  const theme = document.body.className;
  localStorage.setItem("theme", theme);
});
