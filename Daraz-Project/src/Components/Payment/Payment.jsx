import React from "react";
import "./Payment.css";

const Payment = () => {
  return (
    <div className=" flex justify-start items-center gap-32 font-semibold mx-16 my-16 payment">
      <div>
        <h1 className="mb-5">Payment Methods</h1>
        <div className="flex items-center gap-1">
          <div className="w-16 h-12">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              className="w-full h-full object-fill p-1"
            />
          </div>
          <div className="w-16 h-12">
            <img
              src="data:image/png;base64,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"
              alt=""
              className="w-full h-full object-fill p-1"
            />
          </div>
          <div className="w-16 h-12">
            <img
              src="https://download.logo.wine/logo/Visa_Inc./Visa_Inc.-Logo.wine.png"
              alt=""
              className="w-full h-full object-fill p-1"
            />
          </div>
          <div className="w-16 h-12">
            <img
              src="https://iconape.com/wp-content/png_logo_vector/hbl-logo.png"
              alt=""
              className="w-full h-full object-fill p-1"
            />
          </div>
        </div>
      </div>
      <div>
        <h1 lassName="mb-5">Verified By</h1>
        <div className="w-16 h-12">
          <img
            src="data:image/png;base64,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"
            alt=""
            className="w-full h-full object-fill p-1"
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
