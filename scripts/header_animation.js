const jokeItems = document.querySelector(".mainPage__joke").children;
const jokeItemsArr = Array.from(jokeItems);
const jokeButton = document.querySelector(".mainPage__header-rightMenu-logo");
const jokeSpan = document.querySelector(".mainPage__info-des-span");

jokeButton.addEventListener("click", () => {
  jokeItemsArr.forEach((e) => {
    e.classList.add("active");
  });
  jokeSpan.classList.add("active");
});
