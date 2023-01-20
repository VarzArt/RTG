document.body.onload = function () {
  if (submenu.classList.contains("active")) {
    submenu.classList.remove("active");
  }
  setTimeout(() => {
    let preloader = document.getElementById("page-preloader");
    if (!preloader.classList.contains("done")) {
      preloader.classList.add("done");
    }
  }, 1000);
};
