const imageItem = document.querySelectorAll(".slider__item");
const mainImg = document.querySelector(".modal__img");
const modalMoscow = document.querySelector(".modal");
const overlayMoscow = document.querySelector(".overlay");

const photoes = [
  "/assets/images/moscow_page/swiper/Swiper_photo1.jpg",
  "/assets/images/moscow_page/swiper/Swiper_photo2.png",
  "/assets/images/moscow_page/swiper/Swiper_photo3.jpg",
  "/assets/images/moscow_page/swiper/Swiper_photo4.jpg",
  "/assets/images/moscow_page/swiper/Swiper_photo5.jpg",
];

for (let i = 0; i < imageItem.length; i++) {
  imageItem[i].addEventListener("click", () => {
    overlayMoscow.classList.add("pushed");
    modalMoscow.classList.add("pushed");
    mainImg.src = photoes[i];
  });
}

overlayMoscow.addEventListener("click", () => {
  overlayMoscow.classList.remove("pushed");
  modalMoscow.classList.remove("pushed");
});
