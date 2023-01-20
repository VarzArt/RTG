const aboutButton = document.querySelector(".about__text-description-button");
const list = document.querySelectorAll(".about__list-item");
const aboutMenuHeader = document.querySelector(".about__text-list_header");
const aboutMenuFooter = document.querySelector(".about__text-list_footer");

aboutButton.addEventListener("click", changeAnimateClass);

function changeAnimateClass() {
  aboutButton.classList.remove("_active");
  aboutButton.classList.add("_hinge");
  for (let i = 0; i < list.length; i++) {
    list[i].classList.add("_active");
  }
  aboutMenuHeader.classList.add("_active");
  aboutMenuFooter.classList.add("_active");
}
