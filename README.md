# StaticProductList - Starbucks Product List — React + Vite


A simple React application that displays a list of Starbucks drinks using component-based rendering and array mapping. This project demonstrates fundamental React concepts including component creation, JSX rendering, list mapping, unique keys, and handling edge cases in data.

## Project Setup
This project was created using Vite with the React template.
Commands Used
    `npm create vite@latest my-product-list -- --template react`
    `cd my-product-list`
    `npm install`
    `npm run dev`



## Component Overview
ProductList Component
- Renders a list of Starbucks drinks
- Uses a local products array
- Demonstrates .map() for rendering lists
- Includes normal test cases and edge cases
- Safely handles missing or invalid data (e.g., null price)

## Test Cases
This project includes 6 total test cases:
- 3 Normal Cases
- 3 Edge Cases
Each case is rendered inside the ProductList component to demonstrate how the UI behaves with different types of data.

### Normal Test Cases
Normal Case 1 — Pink Drink
Input:
    `{ id: 1, name: "Pink Drink", description: "...", price: 5.45 }`

Expected Behavior:
- Renders name, description, and price
- Price displays as $5.45
- Layout remains clean

Normal Case 2 — Iced Dubai Chocolate Matcha
Input:
`{ id: 2, name: "Iced Dubai Chocolate Matcha", description: "...", price: 6.25 }`

Expected Behavior:
- Long name wraps correctly
- Price displays as $6.25
- No overflow issues

Normal Case 3 — Mocha Cookie Crumble Frappuccino
Input:
    `{ id: 3, name: "Mocha Cookie Crumble Frappuccino", description: "...", price: 6.75 }`

Expected Behavior:
- Renders normally
- Long description displays fully
- Card spacing remains consistent

### Edge Test Cases
Edge Case 1 — Missing Description
Input:
    `{ id: 4, name: "Cold Brew", description: "", price: 4.25 }`

Expected Behavior:
- Description area appears empty
- Component still renders
- No errors thrown

Edge Case 2 — Missing Price
Input:
    `{ id: 5, name: "Dragon Drink", description: "...", price: null }`

Expected Behavior:
- Price displays as "N/A"
- Component does not crash
- Demonstrates safe handling of invalid data

Edge Case 3 — Extremely Long Name
Input:
    `
        {
            id: 6, name: "Venti Iced Brown Sugar Oatmilk Shaken Espresso With Extra Cinnamon and Light Ice",
            description: "...",
            price: 7.15
        } 
    `
Expected Behavior:
- Long name wraps naturally
- Layout remains intact
- No overflow or breaking

Safe Price Rendering
To prevent crashes when price is null, the component uses conditional rendering:
    `{product.price !== null ? `$${product.price.toFixed(2)}` : "N/A"} `


This ensures the UI remains stable even with incomplete data.
