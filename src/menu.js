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
    "Vegetable Lo Mein": 5.00
}

// Menu page structure: header menu (h1) + (menu container > menu heading (h2) + menu names (p)*n)*2
// create dom elements: 
//  - header menu (h1) * 1
//  - menu container (div) * 2
//  - menu heading (h2) * 1 each container
//  - menu names (p) * n each container --> loop to input all menu names and prices
// append all of that to menuContent and export it as menu *page*

export {menuPage}