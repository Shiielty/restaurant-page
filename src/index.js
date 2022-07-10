import { homePage, nav, mainContent } from './homepage.js'
import './style.css';

console.log("Hello, world!");
console.log("Loading css...")
console.log(homePage());

const content = document.querySelector("#content");
content.appendChild(nav());
content.appendChild(mainContent());