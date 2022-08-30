import { homePage, nav, mainContent } from "./homepage.js";
import { menuPage } from "./menu.js";
import "./style.css";

console.log(homePage());
console.log(menuPage());

const navComponent = nav();
const mainContentComponent = mainContent();

const content = document.querySelector("#content");
content.appendChild(navComponent);
content.appendChild(mainContentComponent);

const homeBtn = document.querySelectorAll(".home-btn");
const menuBtn = document.querySelectorAll(".menu-btn");

homeBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const mainContent = document.querySelector(".main-content");
    if (mainContent == null) {
      content.appendChild(mainContentComponent);
    } else {
      console.log("main content exist");
    }
  });
});

menuBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const mainContent = document.querySelector(".main-content");
    if (mainContent != null) {
      content.removeChild(mainContentComponent);
    } else {
      console.log("main content component doesn't exist");
    }
  });
});
