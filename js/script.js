"use strict";
const switcherContainer = document.querySelector(".switcher");
const switcherThemeBtn = document.querySelector(".switcher__btn--theme");

// SWITCHER EXPAND WHEN CLICK ON THEME BUTTON
switcherThemeBtn.addEventListener("click", () => {
  switcherContainer.classList.toggle("open");
});

// SWITCHER HIDE WHEN SCROLL DOWN
window.addEventListener("scroll", () => {
  if (switcherContainer.classList.contains("open"))
    switcherContainer.classList.remove("open");
});

// THEME COLOR SWITCHER
const linkThemeColors = document.querySelectorAll(".theme-colors");

const setThemeColor = (color) => {
  linkThemeColors.forEach((themeColor) => {
    color === themeColor.getAttribute("title")
      ? themeColor.removeAttribute("disabled", "false")
      : themeColor.setAttribute("disabled", "true");
  });
};

// THEME DAY & NIGHT MODE SWITCHER
const switcherDayNightBtn = document.querySelector(".switcher__btn--day-night");

switcherDayNightBtn.addEventListener("click", () => {
  switcherDayNightBtn.querySelector("i").classList.toggle("fa-sun");
  switcherDayNightBtn.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("night-mode");
});

window.addEventListener("load", () => {
  if (document.body.classList.contains("night-mode")) {
    switcherDayNightBtn.querySelector("i").classList.add("fa-moon");
    switcherDayNightBtn.querySelector("i").classList.remove("fa-sun");
  } else {
    switcherDayNightBtn.querySelector("i").classList.add("fa-sun");
    switcherDayNightBtn.querySelector("i").classList.remove("fa-moon");
  }
});
