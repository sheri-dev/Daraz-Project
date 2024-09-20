import React, { useEffect, useState } from "react";
import Box from "../Box/Box";
import { useDispatch } from "react-redux"; // Import useDispatch from react-redux
import { addToCart } from "../../actions/cartActions"; // Import the addToCart action
import "./Categories.css";
import axios from "axios";

const Categories = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch(); // Initialize dispatch

  // Fetch products from API
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
    dispatch(addToCart(product)); // Dispatch the action to add the product to the cart
  };

  return (
    <div className="container mx-auto px-4 mt-10 Cate">
      <h1 className="text-2xl font-semibold text-center md:text-left">
        Categories
      </h1>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-8 gap-4 py-3">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              onClick={() => handleAddToCart(product)}
              className="cursor-pointer"
            >
              <Box
                name={product.title}
                image={product.thumbnail}
                price={product.price}
                discount="25 %" // Passing discount info
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

export default Categories;
