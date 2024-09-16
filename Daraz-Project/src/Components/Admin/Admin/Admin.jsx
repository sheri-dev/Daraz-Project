import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Sidebar2 from "../Sidebar2/Sidebar2";
import Middle from "../Middle/Middle";
import "./admin.css";

const Admin = () => {
  return (
    <>
      <div className="Seller">
        <div className="bg-gray-200">
          <div className="flex w-screen h-screen">
            <div className="w-20 fixed left-0 top-0 h-full">
              <Sidebar />
            </div>
            <div className="ml-20 mr-20 flex-grow">
              <Middle />
            </div>
            <div className="w-20 fixed right-0 top-0 h-full">
              <Sidebar2 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
