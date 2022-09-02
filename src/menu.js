const menuPage = () => console.log("Loading menu... Success!!");

// declare menu names and price in object, dumpling and noodle soup
// Menu page structure: header menu (h1) + (menu container > menu heading (h2) + menu names (p)*n)*2
// create dom elements: 
//  - header menu (h1) * 1
//  - menu container (div) * 2
//  - menu heading (h2) * 1 each container
//  - menu names (p) * n each container --> loop to input all menu names and prices
// append all of that to menuContent and export it as menu *page*

export {menuPage}