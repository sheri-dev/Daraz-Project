import { IoSearchOutline } from "react-icons/io5";
import { BsCart } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-orange-500 h-[119px] fixed w-full z-10">
      {/* Mobile Menu Button */}
      <div className="block md:hidden p-4">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? (
            <HiX className="h-6 w-6" />
          ) : (
            <HiMenu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-gray-100 ${isOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col items-center text-sm text-white px-6 py-2">
          <NavLink to="/" className="py-2" onClick={() => setIsOpen(false)}>
            SAVE MORE ON APP
          </NavLink>
          <NavLink
            to="/Seller"
            className="py-2"
            onClick={() => setIsOpen(false)}
          >
            SELL ON DARAZ
          </NavLink>
          <NavLink to="/" className="py-2" onClick={() => setIsOpen(false)}>
            HELP & SUPPORT
          </NavLink>
          <NavLink
            to="/Login"
            className="py-2"
            onClick={() => setIsOpen(false)}
          >
            LOGIN
          </NavLink>
          <NavLink
            to="/Sign-Up"
            className="py-2"
            onClick={() => setIsOpen(false)}
          >
            SIGN UP
          </NavLink>
        </ul>
      </div>

      {/* Upper Nav for larger screens */}
      <div className=" bg-orange-500 hidden md:flex bg-gray-100 h-[25px] items-center text-sm text-white px-6">
        <ul className="flex justify-end gap-6 w-full">
          <NavLink to="/" className="hover:underline">
            SAVE MORE ON APP
          </NavLink>
          <NavLink to="/Seller" className="hover:underline">
            SELL ON DARAZ
          </NavLink>
          <NavLink to="/" className="hover:underline">
            HELP & SUPPORT
          </NavLink>
          <NavLink to="/Login" className="hover:underline">
            LOGIN
          </NavLink>
          <NavLink to="/Sign-Up" className="hover:underline">
            SIGN UP
          </NavLink>
        </ul>
      </div>

      {/* Lower Nav */}
      <div className="flex flex-col md:flex-row items-center justify-between p-4">
        <img
          src="daraz-logo.svg"
          height="80px"
          width="80px"
          alt="Daraz Logo"
          className="mb-2 md:mb-0"
        />
        <div className="relative flex items-center flex-1 max-w-[900px] mx-auto">
          <input
            className="pl-12 pr-12 h-[45px] w-full border border-gray-300 rounded-md"
            type="text"
            placeholder="Search on Daraz"
          />
          <IoSearchOutline className="absolute right-3 text-orange-500 bg-white border-l border-gray-300 h-[45px] w-[54px] flex items-center justify-center rounded-r-md" />
        </div>
        <NavLink to="/Cart" className="ml-4">
          <BsCart className="text-white h-[45px] w-[54px] flex items-center justify-center" />
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
