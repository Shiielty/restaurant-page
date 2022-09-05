import { nav, mainContent } from "./homepage.js";
import { menu } from "./menu.js";
import { about } from "./aboutUs.js";
import { booking } from "./booking.js";
import "./style.css";

const components = (() => {
  const navbar = nav();
  const homePage = mainContent();
  const menuPage = menu();
  const aboutPage = about();
  const bookingPage = booking();

  return { navbar, homePage, menuPage, aboutPage, bookingPage };
})();

/* remove the second child */
const clear = (parent) => {
  parent.removeChild(parent.childNodes[1]);
}

const navColor = (oppacity) => {
  navbar.style.backgroundColor = `rgb(0, 0, 0, ${oppacity})`;
}

const changeTab = (e) => {
  const targetClass = e.target.className;
  const targetId = e.target.id
  switch (true) {
    case targetClass.includes("home-btn"):
      clear(content);
      content.appendChild(components.homePage);
      navColor(0.3);
      break;
    case targetClass.includes("menu-btn"):
      clear(content);
      content.appendChild(components.menuPage);
      navColor(1);
      break;
    case targetClass.includes("about-btn"):
      clear(content);
      content.appendChild(components.aboutPage);
      navColor(1);
      break;
    case targetId.includes("booking"):
      clear(content);
      content.appendChild(components.bookingPage);
      navColor(1);
      break;
    default:
      break;
  }
}

const content = document.querySelector("#content");
content.appendChild(components.navbar);
content.appendChild(components.homePage);

const navbar = document.querySelector(".navbar");
const homeBtn = document.querySelectorAll(".home-btn");
const menuBtn = document.querySelectorAll(".menu-btn");
const aboutBtn = document.querySelector(".about-btn")
const bookingBtn = document.querySelector("#booking")

content.addEventListener("click", changeTab);