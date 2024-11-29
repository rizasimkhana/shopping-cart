import Cart from "./components/Cart";
import Item from "./components/Item";
import React, { useState,useEffect} from 'react';
import Swal from 'sweetalert2'
function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen,setIsCartOpen] = useState(false);
  const [products, setProducts] = useState([]);

   // using Fetch
   useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Function to add item to the cart
  const addToCart = (product) => {
    // Check if the item is already in the cart
    const itemExists = cartItems.some((item) => item.id === product.id);
    if (itemExists) {
      // alert('This item is already in your cart!');
      Swal.fire("This item is already added");
      return;
    }
    setCartItems([...cartItems, product]);
  };

  // Function to remove item from the cart
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };


  // Open the cart modal
  const openCart = () => {
    setIsCartOpen(true);
  };

  // Close the cart modal
  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css" />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Shopping Cart</h1>

        {/* Product List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {products.map((product) => (
            <Item key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>

        {/* View Cart Button */}
        <div className="relative">
          <button
            onClick={openCart}
            className="bg-green-500 text-white p-4 rounded-full fixed bottom-10 right-10 shadow-lg hover:bg-green-700"
          >
            <i class="fa-solid fa-cart-shopping"></i>
            {/* Display cart item count */}
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex justify-center items-center">
                {cartItems.length}
              </span>
            )}
          </button>
        </div>

        {/* Display Cart Modal if isCartOpen is true */}
        {isCartOpen && <Cart cartItems={cartItems} removeFromCart={removeFromCart} closeCart={closeCart} />}
      </div>
    </>

  );
}

export default App
