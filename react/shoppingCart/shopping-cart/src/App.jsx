import { useState } from "react";
import "./App.css";

function ShoppingCart() {
  const [products] = useState([
    { id: 1, name: "Headphone", price: 29.99 },
    { id: 2, name: "Keyboard", price: 29.99 },
    { id: 3, name: "Mouse", price: 9.99 },
    { id: 4, name: "Mouse pad", price: 4.99 },
  ]);

  const [cart, setCart] = useState([]);

  function addToCart(product) {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  function removeFromCart(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-lg mx-auto mt-20 px-5 bg-amber-50 rounded-xl shadow-md">
      {/* Products Section */}
      <h2 className="text-2xl font-bold mb-4 text-amber-800">Products</h2>

      <div className="flex flex-col gap-3 mb-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm"
          >
            <span className="text-gray-700 font-medium">
              {product.name} —{" "}
              <span className="text-amber-600">${product.price}</span>
            </span>
            <button
              onClick={() => addToCart(product)}
              className="bg-amber-500 hover:bg-amber-600 text-white text-sm px-4 py-1.5 rounded-lg transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <h2 className="text-2xl font-bold mb-4 text-amber-800">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-400 italic">Cart is empty</p>
      ) : (
        <div className="flex flex-col gap-3">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm"
            >
              <span className="text-gray-700">
                {item.name}{" "}
                <span className="text-amber-600 font-semibold">
                  x{item.quantity}
                </span>
              </span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-400 hover:bg-red-500 text-white text-sm px-4 py-1.5 rounded-lg transition"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total */}
          <div className="flex justify-between items-center mt-4 pt-4 border-t border-amber-200">
            <span className="text-lg font-bold text-amber-800">Total</span>
            <span className="text-xl font-bold text-amber-600">
              ${total.toFixed(2)}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
