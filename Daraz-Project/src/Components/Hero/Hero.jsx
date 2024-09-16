import React, { useState, useEffect } from "react";
import "./Hero.css";
import slider1 from "../../images/banner1.webp";
import slider2 from "../../images/banner5.webp";
import slider3 from "../../images/banner3.webp";
import slider4 from "../../images/banner4.webp";
import slider5 from "../../images/banner2.webp";
import darazLogo from "../../images/minidaraz.webp";
import darazSide1 from "../../images/darazSide1.webp";
import darazSide2 from "../../images/darazSide2.webp";
import darazQR from "../../images/darazQR.webp";

import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";

const Hero = () => {
  const images = [slider1, slider2, slider3, slider4, slider5];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval); // Clear interval on unmount
  }, [images.length]);

  return (
    <>
      <div className="hero-section">
        <div className="relative image-slider">
          {/* Images */}
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          {/* Dots for navigation */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-white" : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>
        <div className="pc-download">
          <div className="pc-module-header">
            <div className="picture-logo">
              <img src={darazLogo} height="42" width="25" alt="Daraz Logo" />
            </div>
            <span className="title">TRY DARAZ APP</span>
          </div>
          <div className="pc-module-body">
            <div className="score">
              <span className="rated-txt">4.8 Rated</span>
            </div>
            <div className="enjoy-tips-wrap">
              <span className="enjoy-tips">Download the App now</span>
            </div>
            <div className="Market-logo">
              <div className="side-1">
                <div className="picture-wrapper badge">
                  <img
                    className="img2"
                    src={darazSide1}
                    height="36"
                    width="36"
                    alt="Free Shipping"
                  />
                </div>
                <span className="txt1">
                  <b>Free Shipping </b>
                </span>
              </div>
              <div className="side-2">
                <div className="picture-wrapper badge">
                  <img
                    className="img2"
                    src={darazSide2}
                    height="36"
                    width="36"
                    alt="Exclusive Vouchers"
                  />
                </div>
                <span className="txt2">
                  <b>Exclusive Vouchers</b>
                </span>
              </div>
            </div>
          </div>
          <div className="pc-module-footer">
            <div className="content">
              <div className="qr-code-wrap">
                <div className="picture-wrapper qr-code">
                  <img src={darazQR} height="85" width="90" alt="QR Code" />
                </div>
              </div>
              <div className="download-btn">
                <div className="playstore">
                  <IoLogoGooglePlaystore />
                  <span>Google Play</span>
                </div>
                <div className="appstore">
                  <FaApple />
                  <span>App Store</span>
                </div>
              </div>
            </div>
            <span className="last-text">Download the app now!</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
