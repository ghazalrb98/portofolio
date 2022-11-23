import config from "./config.json" assert { type: "json" };

const header = document.getElementById("header");
const profilePic = document.getElementById("profile-pic");
const causeScrollDiv = document.getElementById("cause-scroll-div");
const navBar = document.getElementById("nav-bar");

// Initial State
let headerHeight = header.clientHeight;

let headerAnimationFinished = false;

function setHeight(element, height, unit) {
  element.style.height = `${height}${unit}`;
}

function setBottom(element, bottom, unit) {
  element.style.bottom = `${bottom}${unit}`;
}

window.addEventListener("resize", function () {
  setHeight(
    causeScrollDiv,
    document.documentElement.clientHeight +
      config.headerAnimation.causeScrollDivExtraHeight,
    "px"
  );
  setHeight(
    navBar,
    header.clientWidth * config.headerAnimation.NavHeightWidthRatio,
    "px"
  );
  headerHeight = header.clientHeight;
});

document.addEventListener("scroll", function () {
  const scrollTopValue = Math.floor(document.documentElement.scrollTop / 20);
  profilePic.setAttribute("src", `/images/header_step${scrollTopValue}.svg`);

  if (scrollTopValue === config.headerAnimation.frameCount) {
    headerAnimationFinished = true;
    setBottom(
      navBar,
      document.documentElement.clientHeight / 2 -
        (headerHeight * config.headerAnimation.ContainerLastFirstHeightRatio) /
          2,
      "px"
    );
    navBar.classList.remove("hidden");
    causeScrollDiv.style.animationName = "navExpansion";
  } else {
    navBar.classList.add("hidden");
  }
});

setHeight(
  causeScrollDiv,
  document.documentElement.clientHeight +
    config.headerAnimation.causeScrollDivExtraHeight,
  "px"
);
setHeight(
  navBar,
  header.clientWidth * config.headerAnimation.NavHeightWidthRatio,
  "px"
);
