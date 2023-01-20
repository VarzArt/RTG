const supportPlayButton = document.querySelector(".support-video-button-btn");
const supportLoader = document.querySelector(".support-video-loader ");
const supportPedestrial = document.querySelector(".suppurt-video-pedestal");
const supportTv = document.querySelector(".support-video-bg");
const supportTitle = document.querySelector(".support__text-title");
const supportTitleSpan = supportTitle.querySelector("span");
const supportSubtitle = document.querySelector(".support__text-subtitle");
const supportContentTitle = document.querySelector(
  ".support__text-content-title"
);
const supportContentSubtitle = document.querySelector(
  ".support__text-content-subtitle"
);
const supportContent = document.querySelector(".support__text-content-social");

supportTitleSpan.addEventListener("click", () => {
  supportSubtitle.classList.add("clicked");
  supportContentTitle.classList.add("clicked");
  supportContentSubtitle.classList.add("clicked");
  supportContent.classList.add("clicked");
});

supportPlayButton.addEventListener("click", () => {
  setTimeout(startVideo, 4800);
  supportPlayButton.classList.add("notplay");
  supportLoader.classList.add("play");
  setTimeout(() => {
    supportPedestrial.classList.add("openPed");
    supportLoader.classList.add("background");
    supportTv.classList.add("openbg");
  }, 2800);
});

const startVideo = async () => {
  const supportVideo = document.querySelector(".support-video-video");

  try {
    await supportVideo.play();
    supportVideo.setAttribute("autoplay", true);
    supportVideo.classList.add("openVi");
  } catch (err) {
    console.log(err, "video play error");
  }
};
