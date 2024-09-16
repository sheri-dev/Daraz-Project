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
    <div className="mx-20 after-hero">
      <div className="h-52 relative animation after-hero-pic ">
        <button className="h-14 w-28 text-white bg-orange-500 rounded-2xl font-semibold absolute right-20 top-1/2 font-bounce">
          Shop Now
        </button>
        <img
          src="https://img.lazcdn.com/us/lazgcp/df09d4a0-d3d2-4e94-a8ed-8ef6983b7a02_PK-1188-400.png_1200x1200q80.png_.webp"
          alt=""
          className="w-full h-full object-fill p-1"
        />
      </div>

      <h1 className="text-2xl font-semibold">Flash Sale</h1>

      <div className="flex justify-between items-center p-4 border-b-2 border-grey-200">
        <span className="text-orange-400 font-semibold">On Sale Now</span>
        <button className="p-2 border-2 border-orange-400 text-orange-400 font-semibold">
          Shop All Products
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 py-3">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} onClick={() => handleAddToCart(product)}>
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
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Flashsale;
