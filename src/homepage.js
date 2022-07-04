const homePage = () => console.log("Homepage Loaded!");

const leftLinks = ["HOME", "MENU"]
const rightLinks = ["ABOUT US", "BOOKING"]
const nav = () => {
    const navbar = document.createElement("nav");
    navbar.classList.add("navbar");
    const leftNav = document.createElement("div");
    leftNav.classList.add("left-links")
    const rightNav = document.createElement("div");
    rightNav.classList.add("right-links");

    leftLinks.forEach((link) => {
        const a = document.createElement("a");
        a.setAttribute("href", "#");
        a.textContent = link;
        leftNav.appendChild(a);
    })

    rightLinks.forEach((link) => {
        const a = document.createElement("a");
        a.setAttribute("href", "#");
        a.textContent = link;
        rightNav.appendChild(a);
        if (link === "BOOKING") {
            a.setAttribute("id", "booking");
        }
    })

    navbar.appendChild(leftNav);
    navbar.appendChild(rightNav);

    return navbar;
}


export { homePage, nav }