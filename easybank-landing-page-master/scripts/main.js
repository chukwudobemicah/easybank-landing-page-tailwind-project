"use strict";

const hamburgerContainer = document.querySelector(".hamburger-container");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hamburgerImg = document.querySelector(".hamburger-img");
const nav = document.querySelector("nav");
const asideArticle = document.querySelector(".section-2-container");

hamburgerContainer.addEventListener("click", function () {
  nav.classList.toggle("translate-y-[-150%]");
  nav.classList.toggle("translate-y-[0]");
  if (!hamburgerContainer.classList.contains("rotate")) {
    hamburgerContainer.classList.remove("rotate-cancel");
    hamburgerContainer.classList.add("rotate");
    const cancelSrc = hamburgerImg.getAttribute("data-close");
    hamburgerImg.src = cancelSrc;
  } else {
    hamburgerContainer.classList.remove("rotate");
    hamburgerContainer.classList.add("rotate-cancel");
    const openSrc = hamburgerImg.getAttribute("data-open");
    hamburgerImg.src = openSrc;
  }
});

document.querySelector(".section-1").addEventListener("click", function () {
  if (hamburgerContainer.classList.contains("rotate")) {
    hamburgerContainer.classList.remove("rotate");
    hamburgerContainer.classList.add("rotate-cancel");
    const openSrc = hamburgerImg.getAttribute("data-open");
    hamburgerImg.src = openSrc;
    nav.classList.add("translate-y-[-150%]");
  }
});

asideArticle.addEventListener("mouseover", function () {
  console.log("hi");
  setTimeout(() => {
    asideArticle.style.cursor = "url(../images/icon-online.svg) 36 36, auto";
  }, 100);
});
