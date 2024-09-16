import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store"; // Import the Redux store
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Footer2 from "./Components/Documentation/Footer2";
import Footer3 from "./Components/Footer3/Footer3";
import Seller from "./Components/Admin/Seller";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Sign-Up/SignUp";
import Flashsale from "./Components/Flashsale/Flashsale";
import Categories from "./Components/Categories/Categories";
import Justforyou from "./Components/JustForYou/Justforyou";
import Payment from "./Components/Payment/Payment";
import Cart from "./Components/Cart/Cart";

export default function App() {
  return (
    <Provider store={store}>
      {" "}
      {/* Wrap the entire app with the Redux Provider */}
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Flashsale />
                <Categories />
                <Justforyou />
                <Payment />
                <Footer2 />
              </>
            }
          />
          <Route path="/Seller" element={<Seller />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Sign-Up" element={<SignUp />} />
          <Route path="/Cart" element={<Cart />} />
          <Route
            path="*"
            element={
              <h2 style={{ textAlign: "center" }}>404 Page Not Found</h2>
            }
          />
        </Routes>
        <Footer3 />
        <hr />
      </Router>
    </Provider>
  );
}
