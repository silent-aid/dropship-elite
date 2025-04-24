import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-indigo-600">Wear Your Voice</h1>
      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-indigo-600">Home</Link>
        <Link to="/shop" className="text-gray-700 hover:text-indigo-600">Shop</Link>
        <Link to="/contact" className="text-gray-700 hover:text-indigo-600">Contact</Link>
        <Link to="/unlock" className="text-white bg-indigo-600 px-3 py-1 rounded hover:bg-indigo-700">Unlock</Link>
      </div>
    </nav>
  );
};

export default Navbar;
