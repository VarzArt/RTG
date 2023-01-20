const changerSubtitle = document.querySelector(".changer-text__subtitile");
const changerSubtitleSpan = changerSubtitle.querySelector("span");
const changerClick = document.querySelector(".changer-text__click");
const changerName = document.querySelector(".changer-text__name");
const changerApp = document.querySelector(".changer-app");

changerSubtitleSpan.addEventListener("click", () => {
  changerClick.classList.add("blocked");
  changerName.classList.add("active");
  changerApp.classList.add("active");
});

const cities = document.getElementById("Cities");
const submenu = document.querySelector(".mainPage__header-leftMenu-submenu");

cities.addEventListener("click", () => {
  submenu.classList.toggle("active");
});

submenu.addEventListener("click", () => {
  submenu.classList.remove("active");
});
