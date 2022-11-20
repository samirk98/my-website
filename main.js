const hamburgerBtn = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".item-3");
const menu = document.querySelector("ul");

hamburgerBtn.addEventListener("click", () => {
  menu.style.left = "0";
});

closeBtn.addEventListener("click", () => {
  menu.style.left = "-600%";
});
