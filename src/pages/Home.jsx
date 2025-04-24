import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white flex items-center justify-center px-4">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          🚀 Unlock Winning Dropshipping Products
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Get daily viral product ideas, ad copy, and ready-to-use creatives to boost your store’s success. 
        </p>
        <Link
          to="/unlock"
          className="inline-block px-8 py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-full text-lg transition"
        >
          🔓 Unlock Now
        </Link>
      </div>
    </div>
  );
};

export default Home;
