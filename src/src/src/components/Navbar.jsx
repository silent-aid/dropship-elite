import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex gap-4">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/shop" className="hover:underline">Shop</Link>
      <Link to="/contact" className="hover:underline">Contact</Link>
    </nav>
  );
};

export default Navbar;
