import React from "react";
import { Link } from "react-router-dom"; // React Router Link component for navigation

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex space-x-4 justify-center">
        <li>
          <Link to="/" className="text-white text-xl">Home</Link>
        </li>
        <li>
          <Link to="/shop" className="text-white text-xl">Shop</Link>
        </li>
        <li>
          <Link to="/contact" className="text-white text-xl">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
