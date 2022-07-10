import { homePage, nav, mainContent } from './homepage.js'
import { menuPage } from './menu.js'
import './style.css';

console.log("Hello, world!");
console.log("Loading css...")
console.log(homePage());
console.log(menuPage());

const navComponent = nav();
const mainContentComponent = mainContent();

const content = document.querySelector("#content");
content.appendChild(navComponent);
content.appendChild(mainContentComponent);

const menuBtn = document.querySelectorAll(".menu-btn");
menuBtn.forEach((menu) => {
    menu.addEventListener("click", () => {
        content.removeChild(mainContentComponent);
    });
});