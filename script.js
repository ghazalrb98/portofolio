import config from "./config.json" assert { type: "json" };

const header = document.getElementById("header");
const profilePic = document.getElementById("profile-pic");
const causeScrollDiv = document.getElementById("cause-scroll-div");
const navBar = document.getElementById("nav-bar");

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
  setBottom(
    navBar,
    causeScrollDiv.clientHeight * config.headerAnimation.NavBottomRatio,
    "px"
  );
});

document.addEventListener("scroll", function () {
  const scrollTopValue = Math.floor(document.documentElement.scrollTop / 20);
  profilePic.setAttribute("src", `/images/header_step${scrollTopValue}.svg`);
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
setBottom(
  navBar,
  causeScrollDiv.clientHeight * config.headerAnimation.NavBottomRatio,
  "px"
);
