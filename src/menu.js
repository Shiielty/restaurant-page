const menuPage = () => console.log("Loading menu... Success!!");

// declare menu names and price in object, dumpling and noodle soup

const dumplings = {
    "Chiken Dumpling": 6.25,
    "Beef Dumpling": 6.25,
    "Vegetable Dumpling": 6.00,
    "Peking Duck Spring Roll": 6.00, 
}
const noodles = {
    "Spicy Beef Stew Noodle Soup": 5.75,
    "Chiken Noodle Soup": 5.75,
    "House Special Noodle Soup": 5.75,
    "Shrimp Lo Mein": 5.75,
    "Vegetable Lo Mein": 5.00,
}

const test = () => {
    for (const menu in dumplings) {
        console.log(`${menu}'s price is ${dumplings[menu]}`);
    }
}

const createMenu = (menuType, type, obj, name) => {
    const menuContainer = document.createElement("div");
    const menuName = document.createElement("p");
    const divider = document.createElement("div");
    const menuPrice = document.createElement("p");
    
    menuContainer.classList.add("menu-container");
    menuName.classList.add("menu-name");
    divider.classList.add("divider");
    menuPrice.classList.add("menu-price");
    
    menuType.textContent = type;
    menuName.textContent = `${name}`;
    menuPrice.textContent = `$${obj[name].toFixed(2)}`;
    
    menuContainer.appendChild(menuName);
    menuContainer.appendChild(divider);
    menuContainer.appendChild(menuPrice);

    return menuContainer;
}

// Menu page structure: header menu (h1) + (menu container > menu heading (h2) + menu names (p)*n)*2
const menu = () => {
    
    const container = document.createElement("div");
    const menuHead = document.createElement("h1");
    
    container.classList.add("menu-content");
    menuHead.classList.add("menu-head");

    menuHead.textContent = "Menu";

    container.appendChild(menuHead);

    for (let i = 0; i < 2; i++) {
        const menuType = document.createElement("h3");
        const menusContainer = document.createElement("div");

        menuType.classList.add("menu-type");

        menusContainer.appendChild(menuType);

        if (i === 0){
            for (const name in dumplings) {
                const dumplingMenus = createMenu(menuType, "Dumplings", dumplings, name);
                menusContainer.appendChild(dumplingMenus);
                container.appendChild(menusContainer);
            }
        }
        else {
            for (const name in noodles) {
                const noodleMenus = createMenu(menuType,"Noodles", noodles, name);
                menusContainer.appendChild(noodleMenus);
                container.appendChild(menusContainer);
            }
        }
    }

    return container;
}



// create dom elements: 
//  - header menu (h1) * 1
//  - menu container (div) * 2
//  - menu heading (h2) * 1 each container
//  - menu names (p) * n each container --> loop to input all menu names and prices
// append all of that to menuContent and export it as menu *page*

export {menuPage, test, menu}