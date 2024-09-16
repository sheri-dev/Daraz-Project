import React from "react";
import "./box .css"; // Assuming you have styling here

const Box = ({ name, image, price }) => {
  return (
    <div className="box">
      <img src={image} alt={name} className="box-image" />
      <h3 className="box-name">{name}</h3>
      <p className="box-price">${price}</p> {/* Displaying price */}
    </div>
  );
};

export default Box;
