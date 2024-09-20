import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import { useDispatch } from "react-redux"; // Import useDispatch from react-redux
import { addToCart } from "../../actions/cartActions"; // Import the addToCart action
import "./Justforyou.css";
import axios from "axios";

const Justforyou = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch(); // Initialize dispatch

  // Fetch products from API
  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      setProducts(res.data.products); // Set products array from the response
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
    <>
      <div className="container mx-auto px-4 mt-10 just-for">
        <h1 className="text-2xl font-semibold text-center md:text-left">
          Just For You
        </h1>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 py-3">
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
                  old_price={
                    product.discountPercentage
                      ? (
                          product.price *
                          (1 + product.discountPercentage / 100)
                        ).toFixed(2)
                      : product.price
                  }
                  discount={`${product.discountPercentage}%`}
                />
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>

        {/* Responsive "Load More" Button */}
        <div className="text-xl text-blue-600 border border-blue-600 w-full md:w-48 lg:w-64 text-center py-2 mx-auto mt-10 cursor-pointer hover:bg-blue-600 hover:text-white transition">
          Load More
        </div>

        {/* Add any other sections like Customer Care below */}
      </div>
    </>
  );
};

export default Justforyou;
