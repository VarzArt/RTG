document.getElementById("About_us").addEventListener("click", scrollToAbout);
document.getElementById("infoButton").addEventListener("click", scrollToAbout);
document.getElementById("aboutFooter").addEventListener("click", scrollToAbout);
document.getElementById("Citi_page").addEventListener("click", scrollToCity);
document.getElementById("cityFooter").addEventListener("click", scrollToCity);
document.getElementById("Gallery").addEventListener("click", scrollToPlay);
document.getElementById("playFooter").addEventListener("click", scrollToPlay);
document.getElementById("Support").addEventListener("click", scrollToSupport);
document
  .getElementById("supportFooter")
  .addEventListener("click", scrollToSupport);
document.getElementById("mainFooter").addEventListener("click", scrollToMain);

function scrollToAbout(e) {
  element = document.getElementById("aboutPage");
  element.scrollIntoView({ behavior: "smooth" });
}

function scrollToCity(e) {
  element = document.getElementById("cityPage");
  element.scrollIntoView({ behavior: "smooth" });
}

function scrollToPlay(e) {
  element = document.getElementById("playPage");
  element.scrollIntoView({ behavior: "smooth" });
}

function scrollToSupport(e) {
  element = document.getElementById("supportPage");
  element.scrollIntoView({ behavior: "smooth" });
}

function scrollToMain(e) {
  element = document.getElementById("mainPage");
  element.scrollIntoView({ behavior: "smooth" });
}
