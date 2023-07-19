const htmlEl = document.documentElement;
const themeToggleBtn = document.getElementById("theme-toggle");
const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
const themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

if (
  localStorage.getItem("fylo-theme") === "dark" ||
  (!("fylo-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  themeToggleLightIcon.classList.remove("hidden");
} else {
  themeToggleDarkIcon.classList.remove("hidden");
}

// Listen for toggle button click:
themeToggleBtn.addEventListener("click", toggleMode);

function toggleMode() {
  // Toggle icon:
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  const lsTheme = localStorage.getItem("fylo-theme");
  const setTheme = (theme) => localStorage.setItem("fylo-theme", theme);

  // If is set in localStorage:
  if (lsTheme) {
    // If light - make dark and save in localStorage:
    if (lsTheme === "light") {
      htmlEl.classList.add("dark");
      setTheme("dark");
    } else {
      htmlEl.classList.remove("dark");
      setTheme("light");
    }
  } else {
    // If not in localStorage:
    if (htmlEl.classList.contains("dark")) {
      htmlEl.classList.remove("dark");
      setTheme("light");
    } else {
      htmlEl.classList.add("dark");
      setTheme("dark");
    }
  }
}
