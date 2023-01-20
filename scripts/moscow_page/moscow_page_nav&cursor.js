const moscowBlock = document.querySelector(".moscow");
const screenHeight = window.screen.height;
const moscowNavButtons = document.querySelectorAll(".moscow__navigation-item");
const moscowBanners = document.querySelectorAll(".moscow__block");

document.querySelectorAll(".cursor").forEach((node) => {
  moscowBlock.addEventListener("mousemove", (e) => {
    const rect = moscowBlock.getBoundingClientRect();
    const y = e.clientY - rect.top;
    node.style.cssText = `--move-x: ${e.clientX}px; --move-y: ${y}px;`;
  });
});

for (let i = 0; i < moscowNavButtons.length; i++) {
  moscowNavButtons[i].addEventListener("click", () => {
    moscowBanners.forEach((el) => {
      el.classList.remove("chosen");
    });
    moscowBanners[i].classList.add("chosen");
  });
}
