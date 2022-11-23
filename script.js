const header = document.getElementById("header");
const profilePic = document.getElementById("profile-pic");
const causeScrollDiv = document.getElementById("cause-scroll-div");

function setHeight(element, height, unit) {
  element.style.height = `${height}${unit}`;
}

// window.addEventListener("resize", function () {
//   setHeight(causeScrollDiv, document.documentElement.clientHeight + 820, "px");
// });

document.addEventListener("scroll", function () {
  const scrollTopValue = Math.floor(document.documentElement.scrollTop / 20);
  profilePic.setAttribute("src", `/images/header_step${scrollTopValue}.svg`);
});

// setHeight(causeScrollDiv, document.documentElement.clientHeight + 820, "px");
