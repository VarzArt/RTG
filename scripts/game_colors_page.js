// VARIABLES

const cols = document.querySelectorAll(".column");
const cremlin = document.querySelector(".cremlin");
const leftCremlin = document.querySelector(".cremlin__image-left").childNodes;
const rightCremlin = document.querySelector(".cremlin__image-right").childNodes;
const centerCremlin = document.querySelector(
  ".cremlin__image-center"
).childNodes;
const topCremlin = document.querySelector(".cremlin__image-top").childNodes;
const pickCremlin = document.querySelector(".cremlin__image-pick").childNodes;
const clockCremlin = document.querySelector(".cremlin__image-clock-element");

// GENERAL MECHANICS

document.addEventListener("keyup", (event) => {
  event.preventDefault();
  if (event.code.toLowerCase() === "space") {
    setRandomColors();
  }
});

window.addEventListener("keydown", (e) => {
  if (e.code.toLowerCase() === "space" && e.target === document.body) {
    e.preventDefault();
  }
});

// LOCK AND COPY BUTTONS

document.addEventListener("click", (event) => {
  const type = event.target.dataset.type;

  if (type === "lock") {
    const node =
      event.target.tagName.toLowerCase() === "i"
        ? event.target
        : event.target.children[0];

    node.classList.toggle("fa-lock-open");
    node.classList.toggle("fa-lock");
  } else if (type === "copy") {
    copyToClickboard(event.target.textContent);
  }
});

// COPY FUNCTION

function copyToClickboard(text) {
  return navigator.clipboard.writeText(text);
}

// RANDOM COLORS FUNCTION AND DEPENDENSIES

function setRandomColors(isInitial) {
  const colors = isInitial ? getColorsFromHash() : [];

  cols.forEach((col, index) => {
    const isLocked = col.querySelector("i").classList.contains("fa-lock");
    const text = col.querySelector("h2");
    const button = col.querySelector("button");

    for (let i = 0; i < leftCremlin.length; i++) {
      if (
        leftCremlin[i].nodeName.toLowerCase() == "p" &&
        rightCremlin[i].nodeName.toLowerCase() == "p"
      ) {
        leftCremlin[i].style.background = colors[0];
        rightCremlin[i].style.background = colors[0];
      }
    }

    for (let j = 0; j < centerCremlin.length; j++) {
      if (
        centerCremlin[j].nodeName.toLowerCase() == "p" &&
        topCremlin[j].nodeName.toLowerCase() == "p"
      ) {
        centerCremlin[j].style.background = colors[1];
        topCremlin[j].style.background = colors[2];
      }
    }

    for (let k = 0; k < centerCremlin.length; k++) {
      if (pickCremlin[k].nodeName.toLowerCase() == "p") {
        pickCremlin[k].style.background = colors[3];
      }
    }

    clockCremlin.style.background = colors[4];

    if (isLocked) {
      colors.push(text.textContent);
      return;
    }

    const color = isInitial
      ? colors[index]
        ? colors[index]
        : chroma.random()
      : chroma.random();

    if (!isInitial) {
      colors.push(color);
    }

    text.textContent = color;
    col.style.background = color;
    setTextColor(text, color);
    setTextColor(button, color);
  });

  updateColorsHash(colors);
}

// TEXT COLOR FUNCTION

function setTextColor(text, color) {
  const luminanse = chroma(color).luminance();
  text.style.color = luminanse > 0.5 ? "black" : "white";
}

// SET HASH

function updateColorsHash(colors = []) {
  document.location.hash = colors
    .map((col) => {
      return col.toString().substring(1);
    })
    .join("-");
}

// GET COLORS FROM HASH

function getColorsFromHash() {
  if (document.location.hash.length > 1) {
    return document.location.hash
      .substring(1)
      .split("-")
      .map((color) => "#" + color);
  }
  return [];
}

setRandomColors(true);
