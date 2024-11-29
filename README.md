# Fake Store API - Product List & Cart Management

## Overview

This project uses the **Fake Store API** to fetch a list of products and display them in a user-friendly format. Users can add products to the cart, view the cart contents in a modal, and remove items from the cart. It features responsive design, ensuring optimal performance on both desktop and mobile devices.

## Features

- **Fetch Products**: Products are fetched from the Fake Store API.
- **Product Display**: Products are displayed with key information such as product image, title, price, and an "Add to Cart" button.
- **Add to Cart**: When the "Add to Cart" button is clicked, the product is added to the cart.
  - If the product is already in the cart, an alert will display: "Item already added to the cart."
- **Responsive Layout**: The product display adjusts for mobile and desktop views.
- **Cart Management**:
  - The **cart icon** shows the current count of items in the cart.
  - Clicking the **Cart** icon opens a modal displaying the list of products in the cart.
  - Each item in the cart has a **"Remove "** button, allowing users to remove products from the cart.
  - The cart value updates dynamically as products are added or removed.

## Installation

### Prerequisites

- Node.js
- NPM (Node Package Manager)

### Steps to Set Up

1. **Clone the repository**:
   ```bash
   git clone https://github.com/rizasimkhana/shopping-cart.git
   cd shopping cart
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the project**:
   ```bash
   npm start
   ```

   The app will be available at `http://localhost:3000`.

## Project Structure

- **src/components**
  - `App.jsx`: Displays the list of products fetched from the API.
  - `Item.js`: Displays individual product details.
  - `Cart.js`: Displays the cart content in a modal and allows for product removal.

- **src/App.js**: Main entry point for the app. Manages the overall state of products and cart.

## Features in Detail

### Fetching and Displaying Products
- The app fetches a list of products from the Fake Store API using a utility function.
- Products are displayed in a responsive grid format.
- Each product displays:
  - Product image
  - Title
  - Price
  - "Add to Cart" button

### Add to Cart Functionality
- When the user clicks the **"Add to Cart"** button, the product is added to the cart state.
  - The cart state is stored globally (e.g., in React Context or via a global state manager like Redux).
- If the item is already in the cart, an **alert** appears: `"Item already added to the cart"`.
- The cart count in the **cart icon** dynamically updates to reflect the number of products in the cart.

### Cart Modal
- When the **Cart** button in the Navbar is clicked, a modal opens.
  - The modal shows the products added to the cart.
  - Each product in the modal has a **"Remove"** button that removes the item from the cart when clicked.

### Product Removal from Cart
- Users can remove products from the cart by clicking the **"Remove"** button in the cart modal.
  - The cart state is updated accordingly, and the modal reflects the changes in real-time.

### Responsive Design
- The layout is designed to work well on both **desktop** and **mobile** screens.
- The grid of products is responsive, adjusting to different screen sizes.
- The cart modal is also responsive and will scale appropriately for different devices.

## Technologies Used

- **Reactjs**: For building the user interface.
- **tailwindcss**: For styling the application, with a focus on responsiveness.
- **React UseEffect**: For making HTTP requests to the Fake Store API.

## Screenshots

### Desktop View:
- Product grid displayed with images, titles, prices, and add-to-cart buttons.
- Navbar at the top with cart item count.
- Responsive layout that adjusts based on screen size.

### Mobile View:
- Products are displayed in a stacked layout for better mobile experience.
- Navbar and cart modal are optimized for smaller screens.

### Cart Modal:
- Modal showing products in the cart, with a "Remove" option for each.

## How to Contribute

1. Fork the repository.
2. Create a new branch for your feature.
3. Make your changes and commit them.
4. Open a pull request with a description of the changes made.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Fake Store API for providing a simple mock product data API.
- React team for building such a powerful and flexible framework.

