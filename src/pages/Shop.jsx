import React from "react";

const Shop = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-semibold text-center text-blue-600">Shop</h1>
      <p className="text-center text-gray-700 mt-4">Browse our collection of T-shirts, posters, and digital art!</p>
      {/* Add your product list here */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* Sample Product */}
        <div className="bg-white p-4 shadow-md rounded-md">
          <img src="https://via.placeholder.com/150" alt="T-shirt" className="w-full h-40 object-cover mb-4" />
          <h2 className="text-xl font-semibold text-blue-600">Custom T-Shirt</h2>
          <p className="text-gray-700 mt-2">Price: $20</p>
          <button className="bg-blue-600 text-white px-4 py-2 mt-4 rounded-md">Add to Cart</button>
        </div>
        {/* Repeat similar blocks for more products */}
      </div>
    </div>
  );
};

export default Shop;
