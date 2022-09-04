import { homePage, nav, mainContent } from "./homepage.js";
import { menuPage, menu } from "./menu.js";
import { aboutUsPage, about } from "./aboutUs.js";
import { bookingPage, booking } from "./booking.js";
import "./style.css";

console.log(homePage());
console.log(menuPage());
console.log(aboutUsPage());
console.log(bookingPage());

const navComponent = nav();
const mainContentComponent = mainContent();
const menuComponent = menu();
const aboutComponent = about();
const bookingComponent = booking();

const content = document.querySelector("#content");
content.appendChild(navComponent);
content.appendChild(mainContentComponent);

const homeBtn = document.querySelectorAll(".home-btn");
const menuBtn = document.querySelectorAll(".menu-btn");
const aboutBtn = document.querySelector(".about-btn")
const bookingBtn = document.querySelector("#booking")

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
  content.appendChild(aboutComponent);

  const nav = document.querySelector(".navbar");
  nav.style.backgroundColor = "rgb(0, 0, 0, 1)";
})

bookingBtn.addEventListener("click", () => {
  content.removeChild(content.childNodes[1]);
  content.appendChild(bookingComponent);

  const nav = document.querySelector(".navbar");
  nav.style.backgroundColor = "rgb(0, 0, 0, 1)";
})
