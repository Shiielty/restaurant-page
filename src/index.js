import { homePage, nav, mainContent } from "./homepage.js";
import { menuPage, menu } from "./menu.js";
import { aboutUsPage } from "./aboutUs.js";
import "./style.css";

console.log(homePage());
console.log(menuPage());
console.log(console.log(aboutUsPage()))

const navComponent = nav();
const mainContentComponent = mainContent();
const menuComponent = menu();

const content = document.querySelector("#content");
content.appendChild(navComponent);
content.appendChild(mainContentComponent);

const homeBtn = document.querySelectorAll(".home-btn");
const menuBtn = document.querySelectorAll(".menu-btn");

homeBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    content.removeChild(content.childNodes[1]);
    content.appendChild(mainContentComponent);

    const nav = document.querySelector(".navbar");
    nav.style.backgroundColor = "rgb(0, 0, 0, 0.5)";
  });
});

menuBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    content.removeChild(content.childNodes[1]);
    content.appendChild(menuComponent);

    const nav = document.querySelector(".navbar");
    nav.style.backgroundColor = "rgb(0, 0, 0, 1)";
  });
});
