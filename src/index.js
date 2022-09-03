import { homePage, nav, mainContent } from "./homepage.js";
import { menuPage, menu } from "./menu.js";
import { aboutUsPage, about } from "./aboutUs.js";
import "./style.css";

console.log(homePage());
console.log(menuPage());
console.log(aboutUsPage())

const navComponent = nav();
const mainContentComponent = mainContent();
const menuComponent = menu();
const aboutComponent = about();

const content = document.querySelector("#content");
content.appendChild(navComponent);
content.appendChild(mainContentComponent);

const homeBtn = document.querySelectorAll(".home-btn");
const menuBtn = document.querySelectorAll(".menu-btn");
const aboutBtn = document.querySelector(".about-btn")

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

aboutBtn.addEventListener("click", () => {
  content.removeChild(content.childNodes[1]);
  content.appendChild(aboutComponent)
})
