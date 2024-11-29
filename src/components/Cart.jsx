function Cart({ cartItems, removeFromCart, closeCart}) {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        <ul className="mb-4">
          {cartItems.map((item, index) => (
            <li key={index} className="flex justify-between mb-2">
              <img src={item.image} alt={item.title} className="w-1/2 h-48  mb-4 rounded-md" />
              <span>{item.name}</span>
              <div className="flex items-center space-x-2">
                <span>${item.price}</span>
                <button   id="remove"
                  onClick={() => removeFromCart(item.id)
                  
                 
                  }
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex justify-between font-bold text-lg mb-4">
          <span>Total:</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
 
        <button
          onClick={closeCart}
          className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
        >
          Close
        </button>
   
      </div>
    </div>
  );
}

  export default Cart