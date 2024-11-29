function Item({ product, addToCart }) {
  return (
   
//  <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
//       <img className="w-full h-4/5 object-cover"  src={product.image} alt={product.name} />
//       <div className="px-6 py-4">
//         <div className="font-bold text-xl mb-2">{product.name}</div>
//         <p className="text-black text-base font-bold"><sup>&#8377;</sup>{product.price}</p>
//       </div>
//       <button
//         onClick={() => addToCart(product)}
//         className="w-full bg-blue-500 text-white p-6 h-0 rounded hover:bg-blue-700"
//       >
//         Add to Cart
//       </button>
//     </div>

<div className="border border-gray-300 rounded-lg p-4 flex flex-col items-center">
<img src={product.image} alt={product.title} className="w-1/2 h-48  mb-4 rounded-md" />
<h3 className="font-semibold text-lg mb-2">{product.title}</h3>
<p className="text-xl font-bold text-gray-800 mb-4">${product.price}</p>
<button
  className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
  onClick={() => addToCart(product)}
>
  Add to Cart
</button>
</div>
    
   
  );
}
  export default Item