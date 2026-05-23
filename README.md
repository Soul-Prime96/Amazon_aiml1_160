# Amazon_aiml1_160

A frontend Amazon clone built as part of my web development assignment.
Built in phases over 15 days, adding features incrementally.

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- Git & GitHub

## How to Run

Clone the repository and open `index.html` in any browser.

## Features

- Responsive product grid with 18 products
- Auto-playing slideshow with dot indicators
- Featured Today section showing 5 random products on every refresh
- Live search filter with no results message
- Category filter in navigation bar
- Dark mode with localStorage preference saving
- Cart counter with product name alert
- Scroll to top button
- Product detail page with URL parameter navigation

## Development Phases

# PHASE 1

We started by creating all three files (index.html, style.css, and script.js) and giving the project its basic structure:

Header → Navigation Bar → Slideshow → Products Section → Footer

# PHASE 2

In this phase, we focused on styling all the elements such as the header, navigation bar, products section, and footer. We also added hover effects to improve the user experience.

# PHASE 3

We implemented the slideshow functionality, added dot indicators so users can track the current slide, and included Previous/Next buttons for navigation.

# PHASE 4

In this phase, we moved all hardcoded HTML products into JavaScript and stored them as objects. We then built a renderProducts() function to dynamically display products throughout the application.

# PHASE 5

We added a Featured Products section using the Fisher-Yates Shuffle Algorithm. This section is displayed between the slideshow and the products section and shows 5 random products whenever the page is reloaded.

# PHASE 6

In this phase, we added a Dark Mode Toggle button in the header section. It allows users to switch between light and dark themes by changing the CSS styles of all elements. We also used Local Storage to save the user's preference so the selected theme remains active even after the page is reloaded.

# PHASE 7

We built a Search Filter feature that allows users to search for products. The search is case-insensitive, meaning products can be searched using either uppercase or lowercase letters. If no matching products are found, a "Nothing Found" message is displayed. The Featured Products section is automatically hidden while searching.

# PHASE 8

In this phase, we added a Cart Counter that increases whenever the Add to Cart button is clicked. An alert message is also displayed to inform the user which product has been added to the cart.

# PHASE 9

We implemented a Scroll to Top button that appears in the bottom-right corner of the page when the user scrolls more than 400 pixels. Clicking the button smoothly scrolls the page back to the top.

# PHASE 10

In this phase, we added functionality to the buttons in the secondary navigation bar. These buttons filter and display products based on their category. The Featured Products section is hidden whenever a category filter is applied.

# PHASE 11

We created a Product Details Page by adding three new files:

product.html
product.css
product.js

When a user clicks on a product, its detailed information is displayed on this page. We also added a Back button in the header that redirects users back to index.html.

# PHASE 12

In the final phase, we completed the project by adding proper comments, improving code formatting and spacing, and fixing bugs to ensure smooth functionality.

## References

- Initial project structure referenced from a peer's codebase
- AI assistance used for debugging and guidance (Claude by Anthropic)
- All feature logic, implementation and creative decisions by myself

#Images
<img width="1919" height="878" alt="Image-1" src="https://github.com/user-attachments/assets/8a18f0be-419b-4dff-ba92-9d1a91d977ed" />
<img width="1915" height="881" alt="Image-2" src="https://github.com/user-attachments/assets/5765bd4c-450c-4600-a1a9-c51a7eba192e" />
<img width="1917" height="885" alt="Image-3" src="https://github.com/user-attachments/assets/dd38a349-833c-4fef-9e36-5f51e92dbfa0" />

