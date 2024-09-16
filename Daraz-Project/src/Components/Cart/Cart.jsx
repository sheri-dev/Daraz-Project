import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../../actions/cartActions";
import "./Cart.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleIncrease = (productId) => {
    dispatch(increaseQuantity(productId));
  };

  const handleDecrease = (productId) => {
    dispatch(decreaseQuantity(productId));
  };

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className="cart">
      <div className="bg-gray-100 min-h-screen py-10">
        <div className="container mx-auto">
          <h1 className="text-2xl font-semibold mb-6">Shopping Cart</h1>

          <div className="flex flex-col lg:flex-row justify-between gap-6">
            {/* Product Details Section */}
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-4 rounded-lg shadow-md w-full lg:w-3/4"
                >
                  <div className="flex items-start gap-4 border-b pb-4">
                    {/* Product Image */}
                    <div className="w-24 h-24 bg-gray-200 rounded-md overflow-hidden">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1">
                      <h2 className="text-lg font-bold mb-2">{item.title}</h2>
                      <p className="text-gray-600 mb-2">
                        This is a short description of the product.
                      </p>
                      <p className="text-xl font-semibold mb-4">
                        ${item.price}
                      </p>

                      {/* Quantity Selector */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleDecrease(item.id)}
                          className="bg-gray-200 hover:bg-gray-300 text-black py-1 px-3 rounded"
                        >
                          -
                        </button>
                        <input
                          type="text"
                          className="w-10 text-center border border-gray-300 rounded-md"
                          value={item.quantity}
                          readOnly
                        />
                        <button
                          onClick={() => handleIncrease(item.id)}
                          className="bg-gray-200 hover:bg-gray-300 text-black py-1 px-3 rounded"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Your cart is empty</p>
            )}
          </div>

          {/* Checkout Section */}
          <div className="bg-white p-4 rounded-lg shadow-md w-full lg:w-1/4 mt-6">
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>

            {/* Price Summary */}
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Subtotal</span>
              <span className="text-lg font-medium">
                $
                {cartItems
                  .reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  )
                  .toFixed(2)}
              </span>
            </div>

            {/* Shipping Info */}
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Shipping</span>
              <span className="text-lg font-medium">$0.00</span>
            </div>

            {/* Total */}
            <div className="flex justify-between mb-6 font-bold text-xl">
              <span>Total</span>
              <span>
                $
                {cartItems
                  .reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  )
                  .toFixed(2)}
              </span>
            </div>

            {/* Checkout Button */}
            <button className="bg-yellow-500 w-full py-2 text-white rounded-lg hover:bg-yellow-600">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
