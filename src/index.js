import './style.css';
import {homePage} from './homepage.js'

console.log("Hello, world!");
console.log("Loading css...")
const testDOM = homePage();
const content = document.querySelector("#content")
content.appendChild(testDOM);