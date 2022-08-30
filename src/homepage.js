const homePage = () => console.log("Homepage Loaded!");

const leftLinks = ["HOME", "MENU"];
const rightLinks = ["ABOUT US", "BOOKING"];
const nav = () => {
  const navbar = document.createElement("nav");
  navbar.classList.add("navbar");
  const leftNav = document.createElement("div");
  leftNav.classList.add("left-links");
  const rightNav = document.createElement("div");
  rightNav.classList.add("right-links");

  leftLinks.forEach((link) => {
    const a = document.createElement("a");
    a.setAttribute("href", "#");
    a.textContent = link;
    if (link === "MENU") {
      a.classList.add("menu-btn");
    } else if (link === "HOME") {
      a.classList.add("home-btn");
    }
    leftNav.appendChild(a);
  });

  rightLinks.forEach((link) => {
    const a = document.createElement("a");
    a.setAttribute("href", "#");
    a.textContent = link;
    rightNav.appendChild(a);
    if (link === "BOOKING") {
      a.setAttribute("id", "booking");
    }
  });

  navbar.appendChild(leftNav);
  navbar.appendChild(rightNav);

  return navbar;
};

const mainContent = () => {
  const bg = document.createElement("div");
  const bgFilter = document.createElement("div");
  const mainContent = document.createElement("div");
  const title = document.createElement("div");
  const titleDesc = document.createElement("div");
  const subDesc = document.createElement("div");
  const menuBtn = document.createElement("span");

  bg.classList.add("bg");
  bgFilter.classList.add("bg-filter");
  mainContent.classList.add("main-content");
  title.classList.add("title");
  titleDesc.classList.add("title-desc");
  subDesc.classList.add("title-desc", "sub-desc");
  menuBtn.classList.add("menu-link", "menu-btn");

  title.textContent = "Dice";
  titleDesc.textContent = "A Perfect Place for Your Dumpling Addictions";
  subDesc.textContent = "Check out our ";
  menuBtn.textContent = "menu";

  subDesc.appendChild(menuBtn);

  mainContent.appendChild(bg);
  mainContent.appendChild(bgFilter);
  mainContent.appendChild(title);
  mainContent.appendChild(titleDesc);
  mainContent.appendChild(subDesc);

  return mainContent;
};

export { homePage, nav, mainContent };
