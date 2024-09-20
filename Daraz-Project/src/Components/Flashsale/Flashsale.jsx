import React, { useState, useEffect } from "react";
import Product from "../Product/Product";
import { useDispatch } from "react-redux"; // Import useDispatch
import { addToCart } from "../../actions/cartActions"; // Import addToCart action
import "./style.css";
import axios from "axios";

const Flashsale = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch(); // Initialize dispatch

  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      setProducts(res.data.products); // Set only the products array
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Handler for adding a product to the cart
  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); // Dispatch the action to add product to the cart
  };

  return (
    <div className="container mx-auto px-4 mt-10 after-hero">
      {/* Flash Sale Hero Section */}
      <div className="hidden xl:block mx-auto h-52 relative animation after-hero-pic mb-6">
        <button className="h-14 w-28 text-white bg-orange-500 rounded-2xl font-semibold absolute right-5 md:right-20 top-1/2 transform -translate-y-1/2 transition hover:bg-orange-600">
          Shop Now
        </button>
        <img
          src="https://img.lazcdn.com/us/lazgcp/df09d4a0-d3d2-4e94-a8ed-8ef6983b7a02_PK-1188-400.png_1200x1200q80.png_.webp"
          alt=""
          className="w-full h-full object-cover p-1"
        />
      </div>

      {/* Flash Sale Title */}
      <h1 className="text-2xl font-semibold text-center md:text-left mb-4">
        Flash Sale
      </h1>

      {/* Sale and Shop All Button */}
      <div className="flex justify-between items-center p-4 border-b-2 border-gray-200">
        <span className="text-orange-500 font-semibold text-lg">
          On Sale Now
        </span>
        <button className="p-2 border-2 border-orange-500 text-orange-500 font-semibold hover:bg-orange-500 hover:text-white transition">
          Shop All Products
        </button>
      </div>

      {/* Responsive Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 py-3">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="cursor-pointer flex flex-col items-center" // Center content
              onClick={() => handleAddToCart(product)}
            >
              <Product
                image={product.thumbnail}
                item={product.title}
                price={product.price}
                old_price={product.price + 50} // Example calculation for old price
                discount="25%" // Static discount value for display
              />
            </div>
          ))
        ) : (
          <p>Loading....</p>
        )}
      </div>
    </div>
  );
};

export default Flashsale;
