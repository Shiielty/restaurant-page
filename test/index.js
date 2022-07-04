import './style.css';
import { homePage, nav } from './homepage.js'

console.log("Hello, world!");
console.log("Loading css...")
console.log(homePage());

const navbar = nav();

const content = document.querySelector("#content");
content.childNodes(navbar);